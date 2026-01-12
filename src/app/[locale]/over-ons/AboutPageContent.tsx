'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import Image from 'next/image';

/* =============================================================================
   Track Record Card Component
   ============================================================================= */

interface TrackRecordItemProps {
  title: string;
  description: string;
  index: number;
}

function TrackRecordCard({ title, description, index }: TrackRecordItemProps) {
  const icons = [
    // AI assistants - brain/chat
    'M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    // Document processing
    'M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z',
    // Knowledge systems - lightbulb
    'M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18',
    // Decision support - chart
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
  ];

  return (
    <div className="flex items-start gap-4 p-5 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-md transition-all">
      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-bpc-teal/10 flex items-center justify-center" aria-hidden="true">
        <svg className="w-6 h-6 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icons[index]} />
        </svg>
      </div>
      <div>
        <h4 className="font-display font-bold text-bpc-navy-900 mb-1">{title}</h4>
        <p className="text-bpc-navy-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

/* =============================================================================
   Founder Card Component
   ============================================================================= */

interface FounderProps {
  name: string;
  role: string;
  image: string;
}

function FounderCard({ name, role, image }: FounderProps) {
  return (
    <div className="flex flex-col items-center text-center group">
      <div className="relative mb-5">
        {/* Glow effect behind photo */}
        <div className="absolute inset-0 rounded-full bg-white/20 blur-xl scale-110 group-hover:scale-125 transition-transform duration-500" aria-hidden="true" />
        
        {/* Photo container */}
        <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-white/30 shadow-2xl group-hover:border-white/50 transition-all duration-300">
          <Image
            src={image}
            alt={name}
            width={176}
            height={176}
            className="object-cover w-full h-full"
          />
        </div>
      </div>
      <h3 className="text-xl md:text-2xl font-display font-bold text-white mb-1">
        {name}
      </h3>
      <p className="text-bpc-teal-300 font-medium">
        {role}
      </p>
    </div>
  );
}

/* =============================================================================
   Value Card Component (with drivers)
   ============================================================================= */

interface ValueCardProps {
  title: string;
  description: string;
  drivers: string;
  index: number;
}

function ValueCard({ title, description, drivers, index }: ValueCardProps) {
  const icons = [
    'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z', // Craftsmanship
    'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z', // Results
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z', // Involvement
    'M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z', // Direct
  ];

  const colors = [
    'bg-bpc-teal/10 text-bpc-teal',
    'bg-bpc-navy/10 text-bpc-navy',
    'bg-bpc-sky/10 text-bpc-sky',
    'bg-bpc-teal-600/10 text-bpc-teal-600',
  ];

  return (
    <article className="group p-6 lg:p-8 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-lg transition-all duration-300">
      <div className={cn('w-14 h-14 rounded-2xl flex items-center justify-center mb-6', colors[index])} aria-hidden="true">
        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icons[index]} />
        </svg>
      </div>
      <h3 className="text-xl font-display font-bold text-bpc-navy-900 mb-3">
        {title}
      </h3>
      <p className="text-bpc-navy-600 mb-4">
        {description}
      </p>
      <p className="text-sm text-bpc-navy-400 italic">
        {drivers}
      </p>
    </article>
  );
}

/* =============================================================================
   Belief Card Component
   ============================================================================= */

interface BeliefCardProps {
  title: string;
  description: string;
}

function BeliefCard({ title, description }: BeliefCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white/50 hover:bg-white transition-colors">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bpc-teal/10 flex items-center justify-center" aria-hidden="true">
        <svg className="w-4 h-4 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-bpc-navy-900 mb-1">{title}</h4>
        <p className="text-bpc-navy-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

/* =============================================================================
   Distinction Point Component
   ============================================================================= */

interface DistinctionPointProps {
  title: string;
  description: string;
}

function DistinctionPoint({ title, description }: DistinctionPointProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-bpc-teal/10 flex items-center justify-center" aria-hidden="true">
        <svg className="w-4 h-4 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <div>
        <h4 className="font-bold text-bpc-navy-900 mb-1">{title}</h4>
        <p className="text-bpc-navy-600 text-sm">{description}</p>
      </div>
    </div>
  );
}

/* =============================================================================
   Main Page Content
   ============================================================================= */

export function AboutPageContent() {
  const t = useTranslations('about_page');

  // Track record items
  const trackRecord = t.raw('experience.track_record') as TrackRecordItemProps[];

  // Background areas
  const backgroundAreas = t.raw('experience.background.areas') as string[];

  // Founders
  const founders = t.raw('founders.team') as FounderProps[];

  // Values (with drivers)
  const values = t.raw('values.items') as ValueCardProps[];

  // Beliefs
  const beliefs = t.raw('beliefs.items') as BeliefCardProps[];

  // Distinction points
  const distinctionPoints = t.raw('distinction.points') as DistinctionPointProps[];

  return (
    <>
      {/* =========================================================================
          HERO SECTION - Clean design like Aanpak page
          ========================================================================= */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-navy-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-sky/10 blur-3xl" />
        </div>

        <div className="container-content relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {t('hero.section_label')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {t('hero.title')}
            </h1>
            <p className="text-2xl md:text-3xl font-display text-bpc-teal-400 mb-6">
              {t('hero.subtitle')}
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('hero.text')}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          MISSION & VISION SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24" aria-labelledby="mission-title">
        <div className="container-content">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Mission */}
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-bpc-teal/5 to-transparent border border-bpc-teal/10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('mission.section_label')}
              </div>
              <h2 id="mission-title" className="text-2xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('mission.title')}
              </h2>
              <p className="text-xl text-bpc-navy-700 font-medium mb-4">
                {t('mission.text')}
              </p>
              <p className="text-bpc-navy-600">
                {t('mission.elaboration')}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-bpc-navy/5 to-transparent border border-bpc-navy/10">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bpc-navy/10 text-bpc-navy-700 text-sm font-medium mb-4">
                {t('vision.section_label')}
              </div>
              <h2 className="text-2xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('vision.title')}
              </h2>
              <p className="text-xl text-bpc-navy-700 font-medium mb-4">
                {t('vision.text')}
              </p>
              <p className="text-bpc-navy-600 mb-4">
                {t('vision.elaboration')}
              </p>
              <p className="text-bpc-navy-500 text-sm italic">
                {t('vision.ambition')}
              </p>
            </div>
          </div>

          {/* Promise - Wat wij garanderen */}
          <div className="mt-12 p-8 lg:p-10 rounded-3xl bg-bpc-navy-900 text-white text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-gray-300 text-sm font-medium mb-4">
              {t('promise.section_label')}
            </div>
            <h2 className="text-2xl font-display font-bold mb-4">
              {t('promise.title')}
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              {t('promise.text')}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          EXPERIENCE / TRACK RECORD SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="experience-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('experience.section_label')}
              </div>
              <h2 id="experience-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('experience.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('experience.intro')}
              </p>
            </div>

            {/* Track record cards */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {trackRecord.map((item, i) => (
                <TrackRecordCard key={`track-${i}`} {...item} index={i} />
              ))}
            </div>

            {/* Background/experience block */}
            <div className="p-8 rounded-3xl bg-white border border-gray-100">
              <h3 className="text-xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('experience.background.title')}
              </h3>
              <p className="text-bpc-navy-600 mb-6">
                {t('experience.background.text')}
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {backgroundAreas.map((area, i) => (
                  <div key={`area-${i}`} className="flex items-center gap-3 p-3 rounded-lg bg-gray-50">
                    <svg className="flex-shrink-0 w-4 h-4 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm text-bpc-navy-700">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOUNDERS SECTION - Blue Gradient Background
          ========================================================================= */}
      <section 
        className="relative py-20 lg:py-28 overflow-hidden"
        aria-labelledby="founders-title"
        style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #0284c7 25%, #0369a1 50%, #0891b2 75%, #14b8a6 100%)'
        }}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl animate-pulse" />
            <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-white/5 blur-3xl" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-3xl" />
          </div>
        </div>

        <div className="container-content relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-white text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-white animate-pulse motion-reduce:animate-none" aria-hidden="true" />
                {t('founders.section_label')}
              </div>
              <h2 id="founders-title" className="text-3xl md:text-5xl font-display font-bold text-white mb-6">
                {t('founders.title')}
              </h2>
              <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
                {t('founders.intro')}
              </p>
            </div>

            {/* Founders grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {founders.map((founder, i) => (
                <FounderCard key={`founder-${i}`} {...founder} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VALUES SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24" aria-labelledby="values-title">
        <div className="container-content">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-4">
              {t('values.section_label')}
            </div>
            <h2 id="values-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900">
              {t('values.title')}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map((value, i) => (
              <ValueCard key={`value-${i}`} {...value} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          BELIEFS SECTION
          ========================================================================= */}
      <section 
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="beliefs-title"
      >
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('beliefs.section_label')}
              </div>
              <h2 id="beliefs-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900">
                {t('beliefs.title')}
              </h2>
            </div>

            <div className="space-y-3">
              {beliefs.map((belief, i) => (
                <BeliefCard key={`belief-${i}`} {...belief} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          DISTINCTION SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24" aria-labelledby="distinction-title">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('distinction.section_label')}
              </div>
              <h2 id="distinction-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900">
                {t('distinction.title')}
              </h2>
            </div>

            <div className="p-8 rounded-3xl bg-white border border-gray-100 space-y-6">
              {distinctionPoints.map((point, i) => (
                <DistinctionPoint key={`distinction-${i}`} {...point} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-bpc-navy-900" aria-labelledby="cta-title">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="cta-title" className="text-2xl md:text-3xl font-display font-bold text-white mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              {t('cta.description')}
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 group"
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
    </>
  );
}
