'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

/* =============================================================================
   Service Card Component
   ============================================================================= */

interface ServiceItemProps {
  name: string;
  description: string;
  index: number;
}

function ServiceItem({ name, description, index }: ServiceItemProps) {
  const icons = [
    // AI assistants
    'M9.75 3.104v5.625m0 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0A3.75 3.75 0 0113.5 8.729a3.75 3.75 0 01-3.75 3.75m0-6.375V8.73m3.75-3.75V8.73M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    // Documents
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    // Knowledge
    'M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25',
    // Process automation
    'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
    // Platforms
    'M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3',
  ];

  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-navy/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <span 
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-bpc-navy/10 text-bpc-navy flex items-center justify-center"
          aria-hidden="true"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icons[index] || icons[0]} />
          </svg>
        </span>
        <div>
          <h3 className="text-lg font-display font-bold text-bpc-navy-900 mb-2">
            {name}
          </h3>
          <p className="text-bpc-navy-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   Approach Card Component
   ============================================================================= */

interface ApproachItemProps {
  title: string;
  description: string;
  index: number;
}

function ApproachItem({ title, description, index }: ApproachItemProps) {
  const icons = [
    'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z', // Lightning - speed
    'M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z', // Quality
    'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z', // Ownership
  ];

  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-bpc-navy/5 to-transparent border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bpc-navy text-white flex items-center justify-center" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icons[index] || icons[0]} />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-display font-bold text-bpc-navy-900 mb-2">
            {title}
          </h3>
          <p className="text-bpc-navy-600 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   Main Page Component
   ============================================================================= */

export function CreationsPageContent() {
  const t = useTranslations('creations_page');
  const tCommon = useTranslations('common');

  const services = t.raw('services.items') as Array<{ name: string; description: string }>;
  const approachItems = t.raw('approach.items') as Array<{ title: string; description: string }>;
  const trackRecordItems = t.raw('track_record.items') as Array<{ stat: string; description: string }>;
  const forWhoItems = t.raw('for_who.items') as string[];
  const featuredStats = t.raw('featured_product.stats') as Array<{ value: string; label: string }>;
  const featuredFeatures = t.raw('featured_product.features') as string[];
  const ctaOptions = t.raw('cta.options') as Array<{ title: string; description: string; button: string; url: string }>;

  return (
    <>
      {/* Hero Section - Dark design */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-navy-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-sky/10 blur-3xl" />
        </div>

        <div className="container-content relative">
          <div className="max-w-3xl">
            {/* Breadcrumb */}
            <nav className="mb-6" aria-label="Breadcrumb">
              <ol className="flex items-center gap-2 text-sm text-white/60">
                <li>
                  <Link href="/diensten" className="hover:text-bpc-teal-400 transition-colors">
                    Diensten
                  </Link>
                </li>
                <li aria-hidden="true">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </li>
                <li className="font-medium text-white">{t('hero.label')}</li>
              </ol>
            </nav>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {t('hero.label')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('hero.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-6">
              {t('intro.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 leading-relaxed mb-4">
              {t('intro.text')}
            </p>
            <p className="text-bpc-navy-500 leading-relaxed">
              {t('intro.focus')}
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-content">
          <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-12 text-center">
            {t('services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <ServiceItem
                key={`service-${index}`}
                name={service.name}
                description={service.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Product Section - Volentis */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-teal-900" aria-hidden="true" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-bpc-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-sky/10 blur-3xl" />
        </div>

        <div className="container-content relative">
          {/* Section Label */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {t('featured_product.section_label')}
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left: Content */}
              <div>
                {/* Badge */}
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-bpc-teal/20 text-bpc-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-bpc-teal-400" aria-hidden="true" />
                  {t('featured_product.badge')}
                </span>

                <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-2">
                  {t('featured_product.title')}
                </h2>
                <p className="text-lg text-bpc-teal-400 font-medium mb-4">
                  {t('featured_product.subtitle')}
                </p>
                <p className="text-white/80 leading-relaxed mb-8">
                  {t('featured_product.description')}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  {featuredStats.map((stat, index) => (
                    <div key={`stat-${index}`} className="text-center p-4 rounded-xl bg-white/5 border border-white/10">
                      <div className="text-2xl md:text-3xl font-display font-bold text-bpc-teal-400">
                        {stat.value}
                      </div>
                      <div className="text-xs text-white/60 mt-1">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={t('featured_product.external_url')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-bpc-teal text-white font-semibold rounded-full hover:bg-bpc-teal-600 transition-colors group"
                  >
                    <span>{t('featured_product.cta_primary')}</span>
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
                  >
                    {t('featured_product.cta_secondary')}
                  </Link>
                </div>
              </div>

              {/* Right: Features & Integrations */}
              <div className="space-y-6">
                {/* Features */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <ul className="space-y-3">
                    {featuredFeatures.map((feature, index) => (
                      <li key={`feature-${index}`} className="flex items-start gap-3">
                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-bpc-teal/20 text-bpc-teal-400 flex items-center justify-center mt-0.5" aria-hidden="true">
                          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <span className="text-white/90">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Integrations */}
                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-3">
                    {t('featured_product.integrations_label')}
                  </p>
                  <p className="text-white/80 text-sm">
                    {t('featured_product.integrations')}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-12 text-center">
            {t('approach.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {approachItems.map((item, index) => (
              <ApproachItem
                key={`approach-${index}`}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Track Record Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-4 text-center">
              {t('track_record.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-12 text-center">
              {t('track_record.intro')}
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {trackRecordItems.map((item, index) => (
                <div 
                  key={`track-${index}`}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex-shrink-0 min-w-[80px]">
                    <span className="text-3xl font-display font-bold text-bpc-teal">
                      {item.stat}
                    </span>
                  </div>
                  <p className="text-bpc-navy-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-4 text-center">
              {t('for_who.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-8 text-center">
              {t('for_who.description')}
            </p>
            <ul className="space-y-4">
              {forWhoItems.map((item, index) => (
                <li 
                  key={`for-who-${index}`}
                  className="flex items-start gap-4 p-4 rounded-xl bg-white border border-gray-100"
                >
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bpc-navy/10 text-bpc-navy flex items-center justify-center" aria-hidden="true">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-bpc-navy-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4 text-center">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-12 text-center max-w-2xl mx-auto">
              {t('cta.description')}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: Direct starten (Volentis) */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-bpc-teal-900 to-bpc-teal-800 text-white">
                <h3 className="text-xl font-display font-bold mb-2">
                  {ctaOptions[0].title}
                </h3>
                <p className="text-white/80 mb-6">
                  {ctaOptions[0].description}
                </p>
                <a
                  href={ctaOptions[0].url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bpc-teal-900 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
                >
                  <span>{ctaOptions[0].button}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              {/* Option 2: Op maat bouwen */}
              <div className="p-8 rounded-2xl bg-gradient-to-br from-bpc-navy-900 to-bpc-navy-800 text-white">
                <h3 className="text-xl font-display font-bold mb-2">
                  {ctaOptions[1].title}
                </h3>
                <p className="text-white/80 mb-6">
                  {ctaOptions[1].description}
                </p>
                <Link
                  href={ctaOptions[1].url}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-bpc-navy-900 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
                >
                  <span>{ctaOptions[1].button}</span>
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16">
        <div className="container-content">
          <div className="text-center">
            <Link 
              href="/diensten"
              className="inline-flex items-center gap-2 text-bpc-navy-600 hover:text-bpc-navy transition-colors"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
              <span>{tCommon('back_to_services')}</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
