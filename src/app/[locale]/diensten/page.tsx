import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { ServicesPageContent } from './ServicesPageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services_page' });

  return {
    title: t('title'),
    description: t('meta_description'),
  };
}

export default function ServicesPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  return <ServicesPageContent />;
}
