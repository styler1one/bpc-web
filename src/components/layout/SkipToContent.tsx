'use client';

import { useTranslations } from 'next-intl';

export function SkipToContent() {
  const t = useTranslations('navigation');

  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-6 focus:py-3 focus:bg-bpc-navy focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-bpc-teal focus:ring-offset-2"
    >
      {t('skip_to_content')}
    </a>
  );
}
