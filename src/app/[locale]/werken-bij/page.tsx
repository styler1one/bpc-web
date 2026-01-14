import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { CareersPageContent } from './CareersPageContent';

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'careers_page' });

  return {
    title: t('title'),
    description: t('meta_description'),
  };
}

export default function CareersPage({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  unstable_setRequestLocale(locale);

  return <CareersPageContent />;
}
