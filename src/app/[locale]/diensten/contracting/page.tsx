import { Metadata } from 'next';
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { type Locale } from '@/i18n/config';
import { ContractingPageContent } from './ContractingPageContent';

interface Props {
  params: { locale: Locale };
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'contracting_page' });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function ContractingPage({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);

  return <ContractingPageContent />;
}
