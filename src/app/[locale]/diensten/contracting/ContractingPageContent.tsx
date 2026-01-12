'use client';

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
    // AI specialists - brain/sparkles
    'M9.75 3.104v5.625m0 0a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zm0 0A3.75 3.75 0 0113.5 8.729a3.75 3.75 0 01-3.75 3.75m0-6.375V8.73m3.75-3.75V8.73M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z',
    // Program management - clipboard
    'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    // Finance transformation - chart with upward trend
    'M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941',
    // Supply chain & manufacturing - boxes/cog
    'M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z',
    // Business analysis - chart bars
    'M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6',
    // Change & adoption - user group
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    // Process excellence - arrows in circle (continuous improvement)
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99',
    // Technical specialists - code
    'M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5',
  ];

  return (
    <div className="group relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-sky/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <span 
          className="flex-shrink-0 w-12 h-12 rounded-xl bg-bpc-sky/10 text-bpc-sky flex items-center justify-center"
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
}

function ApproachItem({ title, description }: ApproachItemProps) {
  return (
    <div className="relative p-6 rounded-2xl bg-gradient-to-br from-bpc-sky/10 to-transparent border border-gray-100">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bpc-sky text-white flex items-center justify-center" aria-hidden="true">
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
   Flexibility Card Component
   ============================================================================= */

interface FlexibilityItemProps {
  name: string;
  description: string;
  index: number;
}

function FlexibilityItem({ name, description, index }: FlexibilityItemProps) {
  const icons = [
    'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z', // Clock - temporary
    'M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5', // Expertise
    'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z', // Team
  ];

  return (
    <div className="relative p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-sky/30 hover:shadow-md transition-all duration-300">
      <div className="flex items-start gap-4">
        <span 
          className="flex-shrink-0 w-10 h-10 rounded-xl bg-bpc-sky/10 text-bpc-sky flex items-center justify-center"
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icons[index] || icons[0]} />
          </svg>
        </span>
        <div>
          <h3 className="text-lg font-display font-bold text-bpc-navy-900 mb-1">
            {name}
          </h3>
          <p className="text-bpc-navy-600 leading-relaxed text-sm">
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

export function ContractingPageContent() {
  const t = useTranslations('contracting_page');
  const tCommon = useTranslations('common');

  const services = t.raw('services.items') as Array<{ name: string; description: string }>;
  const whyChooseItems = t.raw('why_choose.items') as Array<{ title: string; description: string }>;
  const approachItems = t.raw('approach.items') as Array<{ title: string; description: string }>;
  const flexibilityItems = t.raw('flexibility.items') as Array<{ name: string; description: string }>;
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

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-navy-900 text-white">
        <div className="container-content">
          <h2 className="text-3xl font-display font-bold mb-12 text-center">
            {t('why_choose.title')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {whyChooseItems.map((item, index) => (
              <div 
                key={`why-${index}`}
                className="relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span 
                    className="flex-shrink-0 w-10 h-10 rounded-full bg-bpc-sky/20 text-bpc-sky flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <h3 className="text-lg font-display font-bold">
                    {item.title}
                  </h3>
                </div>
                <p className="text-white/70 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-content">
          <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-12 text-center">
            {t('services.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
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

      {/* Flexibility Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-bpc-navy-900 mb-4 text-center">
              {t('flexibility.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-10 text-center">
              {t('flexibility.description')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {flexibilityItems.map((item, index) => (
                <FlexibilityItem
                  key={`flex-${index}`}
                  name={item.name}
                  description={item.description}
                  index={index}
                />
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
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-bpc-sky/10 text-bpc-sky flex items-center justify-center" aria-hidden="true">
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
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white">
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
              className="inline-flex items-center gap-2 text-bpc-navy-600 hover:text-bpc-sky transition-colors"
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
