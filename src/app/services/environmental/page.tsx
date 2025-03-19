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

export const metadata: Metadata = getPageMeta('/services/environmental');

export default async function Page() {
  const Items = [
    {
      title: 'Eco-friendly Cleaning and Products',
      content: {
        title: 'Eco-friendly Cleaning and Products',
        description: (
          <>
            <p>
              Our eco-friendly cleaning services prioritize the health of your
              space and the planet. We exclusively use environmentally conscious
              cleaning products that are effective yet gentle, ensuring a
              thorough clean without compromising on green principles.
            </p>
            <p>
              Contact us for details about our eco-friendly products, services,
              and the impact they have!
            </p>
          </>
        ),
        img: '/images/services/environmental/1.png'
      }
    },
    {
      title: 'Waste Utilization Programs',
      content: {
        title: 'Waste Utilization Programs',
        description: (
          <>
            <p>
              Our programs aim to minimize the environmental impact of waste by
              finding creative and sustainable solutions.
            </p>

            <p>
              From recycling initiatives to composting practices, GoGreen is
              dedicated to turning waste into valuable resources. By selecting
              GoGreen, you help our waste utilization programs contribute to a
              cleaner, greener future.
            </p>
          </>
        ),
        img: '/images/services/environmental/2.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Environmental Services"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Discover a new kind of cleaning with GoGreen, where every service is designed to safeguard the environment and promote sustainability. Become a part of something bigger through the simple act of cleaning."
        imgSrc="/images/services/environmental/main.png"
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
                  solutions.{' '}
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
