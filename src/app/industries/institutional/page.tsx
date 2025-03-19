import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';

import { ContactUsSection } from '@/components/ContactUsSection';

import { ImageTextSection } from '@/components/UI/ImageTextSection';

import { TextBlock } from '@/components/UI/TextBlock';
import { ServicesSection } from '@/components/ServicesSection';

import { TabsSection } from '@/components/TabsSection';

import { _industries, _services } from '@/utils/constants';

export const metadata: Metadata = getPageMeta('/industries/institutional');

export default async function Page() {
  const Items = [
    {
      title: 'Government',
      content: {
        title: 'Government',
        description: (
          <>
            <p>
              When you work in Government, public expectations are high. GoGreen
              understands the importance of making a positive impression.
            </p>
            <p>
              Our innovative solutions not only help you put your best foot
              forward but also demonstrate your commitment to environmental
              responsibility.
            </p>
          </>
        ),
        img: '/images/industries/institutional/1.jpg'
      }
    },
    {
      title: 'Finance',
      content: {
        title: 'Finance',
        description: (
          <>
            <p>
              Precision and professionalism reign supreme in the world of
              Finance. GoGreen offers tailored cleaning services to match these
              standards of excellence.
            </p>
            <p>
              We pride ourselves in creating an organized workspace that
              inspires efficiency and client trust.
            </p>
          </>
        ),
        img: '/images/industries/institutional/2.jpg'
      }
    },
    {
      title: 'Municipalities',
      content: {
        title: 'Municipalities',
        description: (
          <>
            <p>
              GoGreen provides dedicated cleaning services for municipalities,
              ensuring the heart of local communities stays vibrant and clean.{' '}
            </p>
            <p>
              Our team tends to public spaces, streets, and facilities,
              contributing to the well-being and aesthetics of the community. We
              uphold the cleanliness standards that make municipalities thriving
              and welcoming places.
            </p>
          </>
        ),
        img: '/images/industries/institutional/3.jpg'
      }
    }
  ];

  return (
    <>
      <MainSection
        title="Institutional"
        subTitle="Edmonton’s Green Cleaning Experts"
        text="Welcome to Go Green, your premier choice for sustainable cleaning and comprehensive facility maintenance services in Edmonton."
        imgSrc="/images/industries/institutional/main.png"
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

      <ContactUsSection />
    </>
  );
}
