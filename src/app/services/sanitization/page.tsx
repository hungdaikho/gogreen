import { MainSection } from '@/components/MainSection';
import { getPageMeta } from '@/utils/getMeta';
import { Metadata } from 'next';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { IndustriesSection } from '@/components/BigSliderSection';
import { BusinessProcessSection } from '@/components/BusinessProcessSection';
import { FAQ } from '@/components/FAQ';
import { ReviewsSection } from '@/components/ReviewsSection';
import { ServicesSection } from '@/components/ServicesSection';
import { TabsSection } from '@/components/TabsSection';
import { TextBlock } from '@/components/UI/TextBlock';
import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/services/sanitization');

export default async function Page() {
  const Items = [
    {
      title: 'Commercial Deep Cleaning and Disinfection',
      content: {
        title: 'Commercial Deep Cleaning and Disinfection',
        description: (
          <>
            <p>
              Elevate the hygiene standards of your commercial space with
              GoGreen`s specialized deep cleaning and disinfection services.
            </p>
            <p>
              Our expert team goes beyond the surface, delivering a cleaning
              experience that ensures a safe and sanitary environment. We
              consider your industry specifications and use them to create a
              comprehensive cleaning plan.
            </p>
          </>
        ),
        img: '/images/services/sanitary/1.jpg'
      }
    },
    {
      title: 'One Time Disinfection',
      content: {
        title: 'One Time Disinfection',
        description: (
          <>
            <p>
              When you need a swift and thorough disinfection solution, turn to
              GoGreen`s one-time disinfection service. We’re ready to provide
              immediate and effective sanitation, ensuring your space is free
              from harm.{' '}
            </p>
            <p>
              By using advanced disinfectants and following meticulous
              protocols, we create a safe and sanitized environment.
            </p>
          </>
        ),
        img: '/images/services/sanitary/2.jpeg'
      }
    },
    {
      title: 'Recurring Disinfection',
      content: {
        title: 'Recurring Disinfection',
        description: (
          <>
            <p>
              Our commitment to continuous disinfection means you get the peace
              of mind that comes from knowing your space is consistently and
              thoroughly disinfected. Take advantage of our flexible scheduling
              options, allowing you to tailor the frequency of disinfection.{' '}
            </p>
            <p>
              With GoGreen, your safety is our priority, and our recurring
              service is designed to provide lasting assurance in every
              environment.
            </p>
          </>
        ),
        img: '/images/services/sanitary/3.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Disinfection and Sanitary Processing"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Explore eco-friendly disinfection services in Edmonton. Choose GoGreen for a proactive approach to health and hygiene."
        imgSrc="/images/services/sanitary/main.png"
      />

      <ImageTextSection
        image1Src="/images/history/1.png"
        image2Src="/images/history/2.png"
        className=" mb-28 lg:mb-44"
        textBlocks={[
          <TextBlock
            key={1}
            subtitle="Eco-friendly Janitorial and Maintenance"
            title="Go Green"
            paragraph={
              <>
                <p>
                  Our commitment to eco-friendly janitorial and maintenance
                  services makes us the ideal partner for keeping your premises
                  pristine.
                </p>
                <p>
                  Tailoring our services to meet your needs and budget, Go Green
                  ensures your business shines brighter, enhancing your
                  competitive edge with our exceptional green cleaning
                  solutions.
                </p>
              </>
            }
          />
        ]}
      />

      <TabsSection items={Items} />
      <ServicesSection
        items={_services}
        subtitle="Discover the Difference with GoGreen"
        title="Services"
      />

      <BusinessProcessSection />
      <IndustriesSection
        items={_industries}
        title="Industries"
        subTitle="Your Partner for Eco-Friendly Cleaning"
      />
      <FAQ />
      <ReviewsSection className=" pb-28 lg:pb-44" />
      <ContactUsSection />
    </>
  );
}
