import { unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { HeroSection } from '@/components/sections/HeroSection';
import { ProblemSection } from '@/components/sections/ProblemSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ResultsSection } from '@/components/sections/ResultsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection';
import { ClientsSection } from '@/components/sections/ClientsSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <ProblemSection />
      <ServicesSection />
      <ResultsSection />
      <ExperienceSection />
      <ClientsSection />
      <CTASection />
    </>
  );
}
