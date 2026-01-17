'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function ProofSection() {
  const t = useTranslations('proof');
  const tTransition = useTranslations('transitions');

  const highlights = t.raw('product.highlights') as string[];

  return (
    <section 
      className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50"
      aria-labelledby="proof-title"
    >
      <div className="container-content">
        {/* Section Label */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
        </div>

        <h2 
          id="proof-title"
          className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 text-center mb-10"
        >
          {t('title')}
        </h2>

        {/* Product Card */}
        <div className="max-w-3xl mx-auto">
          <div className="relative p-8 md:p-10 rounded-3xl bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-teal-900 text-white overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
              <div className="absolute -top-20 -right-20 w-[300px] h-[300px] rounded-full bg-bpc-teal/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-[200px] h-[200px] rounded-full bg-bpc-sky/10 blur-3xl" />
            </div>

            <div className="relative">
              {/* Badge */}
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bpc-teal/20 text-bpc-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-bpc-teal-400" aria-hidden="true" />
                Live product
              </span>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                {/* Left: Content */}
                <div className="flex-grow">
                  <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-1">
                    {t('product.name')}
                  </h3>
                  <p className="text-bpc-teal-400 font-medium mb-4">
                    {t('product.tagline')}
                  </p>
                  <p className="text-white/80 leading-relaxed mb-6 max-w-xl">
                    {t('product.description')}
                  </p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-3 mb-6">
                    {highlights.map((highlight, index) => (
                      <span 
                        key={`highlight-${index}`}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white/90 text-sm"
                      >
                        <svg className="w-4 h-4 text-bpc-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: CTA */}
                <div className="flex-shrink-0">
                  <a
                    href={t('product.url')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bpc-navy-900 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
                  >
                    <span>{t('product.cta_primary')}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Footer link */}
          <div className="mt-6 text-center mb-12">
            <p className="text-bpc-navy-600">
              {t('footer.text')}{' '}
              <Link 
                href={t('footer.link_url')}
                className="text-bpc-teal-600 font-medium hover:text-bpc-teal-700 transition-colors inline-flex items-center gap-1"
              >
                {t('footer.link_text')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </p>
          </div>

          {/* Transition to Experience */}
          <div className="text-center pt-8 border-t border-gray-200">
            <p className="text-xl font-semibold text-bpc-navy-700 mb-2">
              {tTransition('proof_to_experience.text')}
            </p>
            <div aria-hidden="true">
              <svg className="w-6 h-6 mx-auto text-bpc-teal animate-bounce motion-reduce:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
