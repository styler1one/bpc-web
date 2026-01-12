import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { ConsultingPageContent } from './ConsultingPageContent';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'consulting_page' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function ConsultingPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <ConsultingPageContent />;
}
