import { unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { HeroSection } from '@/components/sections/HeroSection';
import { ServicesSection } from '@/components/sections/ServicesSection';
import { ProofSection } from '@/components/sections/ProofSection';
import { ValuesSection } from '@/components/sections/ValuesSection';
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
      <ServicesSection />
      <ProofSection />
      <ValuesSection />
      <CTASection />
    </>
  );
}
