import { GoogleReview } from '@/types/types';
import fs from 'fs';
import path from 'path';
import NodeCache from 'node-cache';
import axios from 'axios';

const PLACE_ID = process.env.PLACE_ID;
const API_KEY = process.env.GOOGLE_API_KEY;

const CACHE_TTL = 7 * 86400; // 7 ngày
const myCache = new NodeCache({ stdTTL: CACHE_TTL });

const REVIEWS_FILE_PATH = path.join(process.cwd(), 'reviews.json');

async function fetchReviews() {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${PLACE_ID}&key=${API_KEY}`;
  try {
    const response = await axios.get(url);
    if (response.data.status === 'OK') {
      return response.data.result.reviews;
    } else {
      throw new Error('Error fetching reviews from Google API');
    }
  } catch (error) {
    console.error('Error fetching reviews', error);
    return null;
  }
}

async function saveNewReviews(reviews: GoogleReview[]) {
  let existingReviews = [];

  // Đọc dữ liệu review đã lưu
  if (fs.existsSync(REVIEWS_FILE_PATH)) {
    const data = fs.readFileSync(REVIEWS_FILE_PATH, 'utf-8');
    existingReviews = JSON.parse(data).reviews;
  }

  // Chỉ lưu review mới
  const newReviews: GoogleReview[] = reviews.filter(
    (review: GoogleReview) =>
      !existingReviews.some(
        (existingReview: GoogleReview) => existingReview.time === review.time
      )
  );

  if (newReviews.length > 0) {
    const updatedReviews = [...existingReviews, ...newReviews];

    fs.writeFileSync(
      REVIEWS_FILE_PATH,
      JSON.stringify({ reviews: updatedReviews }, null, 2),
      'utf-8'
    );

    console.log('New reviews saved to file');
  } else {
    console.log('No new reviews to save');
  }
}

async function getReviewsFromFile() {
  if (fs.existsSync(REVIEWS_FILE_PATH)) {
    const data = fs.readFileSync(REVIEWS_FILE_PATH, 'utf-8');
    return JSON.parse(data).reviews;
  } else {
    return [];
  }
}

export async function GetReviews() {
  try {
    let cachedData = myCache.get('reviewsData');
    if (!cachedData) {
      const fetchedData = await fetchReviews();

      if (fetchedData) {
        await saveNewReviews(fetchedData);
        cachedData = { reviews: fetchedData };
        myCache.set('reviewsData', cachedData);
      }
    } else {
      console.log('Data from cache');
    }

    const reviews = await getReviewsFromFile();

    // Chỉ lấy review có rating >= 4
    const filteredReviews =
      (cachedData as { reviews: GoogleReview[] }).reviews?.filter(
        (review: GoogleReview) => review.rating >= 4
      ) || reviews.filter((review: GoogleReview) => review.rating >= 4);

    return { reviews: filteredReviews };
  } catch (error) {
    console.error('Error fetching reviews', error);
    return { reviews: [] };
  }
}
