'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/* =============================================================================
   Service Card Component
   ============================================================================= */

interface ServiceItemProps {
  name: string;
  description: string;
  index: number;
}

function ServiceItem({ name, description, index }: ServiceItemProps) {
  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <span 
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-bpc-teal/10 text-bpc-teal font-bold flex items-center justify-center text-lg"
          aria-hidden="true"
        >
          {index + 1}
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
}

function ApproachItem({ title, description }: ApproachItemProps) {
  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-bpc-navy/5 to-transparent border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bpc-navy text-white flex items-center justify-center" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
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

export function ConsultingPageContent() {
  const t = useTranslations('consulting_page');
  const tCommon = useTranslations('common');

  const services = t.raw('services.items') as Array<{ name: string; description: string }>;
  const approachItems = t.raw('approach.items') as Array<{ title: string; description: string }>;
  const forWhoItems = t.raw('for_who.items') as string[];

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
                <li className="font-medium text-white">Consulting</li>
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
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
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
              />
            ))}
          </div>
        </div>
      </section>

      {/* For Who Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bpc-teal/10 text-bpc-teal flex items-center justify-center" aria-hidden="true">
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
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-bpc-navy-900 to-bpc-navy-800 text-white">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-white/80 mb-8">
              {t('cta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-bpc-navy-900 font-semibold rounded-full hover:bg-gray-100 transition-colors group"
            >
              <span>{t('cta.button')}</span>
              <svg 
                className="w-5 h-5 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Back Link */}
      <section className="pb-16">
        <div className="container-content">
          <div className="text-center">
            <Link 
              href="/diensten"
              className="inline-flex items-center gap-2 text-bpc-navy-600 hover:text-bpc-teal transition-colors"
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
