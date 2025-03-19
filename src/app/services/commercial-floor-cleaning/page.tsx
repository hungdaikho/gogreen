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

export const metadata: Metadata = getPageMeta(
  '/services/commercial-floor-cleaning'
);

export default async function Page() {
  const Items = [
    {
      title: 'Floor Polishing',
      content: {
        title: 'Floor Polishing',
        description:
          'Trust GoGreen to bring out the lustre in your floors, creating a polished and sophisticated finish that elevates the overall aesthetic of your space. We use only the best tools and products to make your floors gorgeous and shiny. ',
        img: '/images/services/commercial/1.jpg'
      }
    },
    {
      title: 'Carpet Cleaning',
      content: {
        title: 'Carpet Cleaning',
        description:
          'We employ advanced techniques and eco-friendly products to thoroughly cleanse and rejuvenate your carpets, leaving them looking and feeling like new. Trust GoGreen for a deep and effective clean that enhances the appearance and longevity of your carpets.',
        img: '/images/services/commercial/2.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Commercial Floor Cleaning"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="GoGreen offers eco-friendly floor cleaning services tailored to meet your needs, ensuring a spotless and polished finish every time."
        imgSrc="/images/services/commercial/main.png"
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
                  pristine.{' '}
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
