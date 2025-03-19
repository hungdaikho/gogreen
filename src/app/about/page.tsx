import { Metadata } from 'next';
import { getPageMeta } from '@/utils/getMeta';
import { MainSection } from '@/components/MainSection';
import { SecondSection } from './components/SecondSection';
import { WhyUsSection } from '@/components/WhyUsSection';
import { PeopleSection } from './components/PeopleSection';
import { AboutSection } from './components/AboutSection';
import { ContactUsSection } from '@/components/ContactUsSection';

export const metadata: Metadata = getPageMeta('/about');

export default async function Page() {
  return (
    <>
      <MainSection
        title="About GoGreen"
        subTitle="Janitorial and Maintenance Services"
        text="We maintain competitive pricing and unwavering quality and are committed to reducing environmental impact and protecting people's health."
        imgSrc="/images/about/main.png"
      />
      <SecondSection />
      <WhyUsSection />
      {/*  <PeopleSection /> */}
      <AboutSection />
      <ContactUsSection />
    </>
  );
}
