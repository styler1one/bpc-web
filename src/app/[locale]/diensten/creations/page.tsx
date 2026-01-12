import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { CreationsPageContent } from './CreationsPageContent';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'creations_page' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function CreationsPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <CreationsPageContent />;
}
