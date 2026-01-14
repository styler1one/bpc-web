'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/* =============================================================================
   Types
   ============================================================================= */

interface WorkPoint {
  title: string;
  description: string;
}

interface WhoFitsPoints {
  title: string;
  points: string[];
}

interface VacancyRole {
  id: string;
  title: string;
  type: string;
  location: string;
  why_visible: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  why_bpc: string;
}

interface OfferItem {
  title: string;
  description: string;
}

/* =============================================================================
   Work Point Card Component
   ============================================================================= */

function WorkPointCard({ title, description, index }: WorkPoint & { index: number }) {
  const icons = [
    // Small team
    'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    // Rocket / Production
    'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    // Server / IT
    'M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z',
    // Heart / Involvement
    'M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z',
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
   Vacancy Card Component
   ============================================================================= */

function VacancyCard({ role, isExpanded, onToggle }: { role: VacancyRole; isExpanded: boolean; onToggle: () => void }) {
  return (
    <article 
      className={cn(
        "rounded-2xl border transition-all duration-300",
        isExpanded 
          ? "bg-white border-bpc-teal/30 shadow-lg" 
          : "bg-white border-gray-100 hover:border-bpc-teal/20 hover:shadow-md"
      )}
    >
      {/* Header - always visible */}
      <button
        onClick={onToggle}
        className="w-full p-6 text-left flex items-start justify-between gap-4"
        aria-expanded={isExpanded}
      >
        <div className="flex-1">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bpc-teal/10 text-bpc-teal-700">
              {role.type}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {role.location}
            </span>
          </div>
          <h3 className="text-xl font-display font-bold text-bpc-navy-900 mb-1">
            {role.title}
          </h3>
          <p className="text-bpc-navy-500 text-sm italic">
            {role.why_visible}
          </p>
        </div>
        <div className="flex-shrink-0 w-8 h-8 rounded-full bg-bpc-teal/10 flex items-center justify-center">
          <svg 
            className={cn(
              "w-4 h-4 text-bpc-teal transition-transform duration-300",
              isExpanded && "rotate-180"
            )} 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {/* Expandable content */}
      <div 
        className={cn(
          "overflow-hidden transition-all duration-300",
          isExpanded ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="px-6 pb-6 space-y-6 border-t border-gray-100 pt-6">
          {/* Description */}
          <p className="text-bpc-navy-700">
            {role.description}
          </p>

          {/* Two column layout for responsibilities and requirements */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Responsibilities */}
            <div>
              <h4 className="font-semibold text-bpc-navy-900 mb-3">Wat je doet</h4>
              <ul className="space-y-2">
                {role.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-bpc-navy-600">
                    <svg className="flex-shrink-0 w-4 h-4 mt-0.5 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Requirements */}
            <div>
              <h4 className="font-semibold text-bpc-navy-900 mb-3">Wat we zoeken</h4>
              <ul className="space-y-2">
                {role.requirements.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-bpc-navy-600">
                    <svg className="flex-shrink-0 w-4 h-4 mt-0.5 text-bpc-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Why BPC */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-bpc-teal/5 to-transparent border-l-4 border-bpc-teal">
            <p className="text-bpc-navy-800 font-medium italic">
              &ldquo;{role.why_bpc}&rdquo;
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}

/* =============================================================================
   Offer Item Card Component
   ============================================================================= */

function OfferCard({ title, description, index }: OfferItem & { index: number }) {
  const icons = [
    // Target / Impact
    'M12 21a9 9 0 100-18 9 9 0 000 18zm0-4a5 5 0 100-10 5 5 0 000 10zm0-4a1 1 0 100-2 1 1 0 000 2z',
    // Users / Senior
    'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    // Key / Autonomy
    'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
    // Lightning / Fast
    'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    // Chat / Honest
    'M8.625 9.75a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 01.778-.332 48.294 48.294 0 005.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z',
    // Building / Growth
    'M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z',
  ];

  return (
    <div className="flex items-start gap-4 p-5 rounded-xl bg-white/50 hover:bg-white transition-colors">
      <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-bpc-teal/10 flex items-center justify-center" aria-hidden="true">
        <svg className="w-5 h-5 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d={icons[index]} />
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

export function CareersPageContent() {
  const t = useTranslations('careers_page');
  
  // State for expanded vacancy cards
  const [expandedRole, setExpandedRole] = useState<string | null>(null);

  // Get data from translations
  const workPoints = t.raw('how_we_work.points') as WorkPoint[];
  const positivePoints = t.raw('who_fits.positive') as WhoFitsPoints;
  const negativePoints = t.raw('who_fits.negative') as WhoFitsPoints;
  const roles = t.raw('vacancies.roles') as VacancyRole[];
  const offerItems = t.raw('what_we_offer.items') as OfferItem[];

  const handleRoleToggle = (roleId: string) => {
    setExpandedRole(expandedRole === roleId ? null : roleId);
  };

  return (
    <>
      {/* =========================================================================
          HERO SECTION - Emotional hook
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
            <p className="text-2xl md:text-3xl font-display text-bpc-teal-400 mb-8">
              {t('hero.subtitle')}
            </p>
            
            {/* Emotional hook - frustration recognition */}
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p className="italic">
                {t('hero.intro')}
              </p>
              <p className="text-white font-medium">
                {t('hero.promise')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          HOW WE WORK SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24" aria-labelledby="how-we-work-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('how_we_work.section_label')}
              </div>
              <h2 id="how-we-work-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('how_we_work.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('how_we_work.intro')}
              </p>
            </div>

            {/* Work points grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {workPoints.map((point, i) => (
                <WorkPointCard key={`work-${i}`} {...point} index={i} />
              ))}
            </div>

            {/* Reality check */}
            <div className="p-6 rounded-2xl bg-bpc-navy-900 text-white">
              <h3 className="font-display font-bold text-lg mb-2">
                {t('how_we_work.reality_check.title')}
              </h3>
              <p className="text-gray-300">
                {t('how_we_work.reality_check.text')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHO FITS SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="who-fits-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-4">
                {t('who_fits.section_label')}
              </div>
              <h2 id="who-fits-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('who_fits.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('who_fits.intro')}
              </p>
            </div>

            {/* Positive and negative points */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              {/* Positive */}
              <div className="p-6 rounded-2xl bg-white border border-bpc-teal/20">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-bpc-teal/10 flex items-center justify-center">
                    <svg className="w-4 h-4 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-bpc-navy-900">
                    {positivePoints.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {positivePoints.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-bpc-navy-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-bpc-teal" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Negative */}
              <div className="p-6 rounded-2xl bg-white border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-bpc-navy-900">
                    {negativePoints.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {negativePoints.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-bpc-navy-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-gray-400" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Closing statement */}
            <p className="text-center text-lg text-bpc-navy-800 font-medium italic">
              {t('who_fits.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          VACANCIES SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24" aria-labelledby="vacancies-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('vacancies.section_label')}
              </div>
              <h2 id="vacancies-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('vacancies.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('vacancies.intro')}
              </p>
            </div>

            {/* Vacancy cards */}
            <div className="space-y-4">
              {roles.map((role) => (
                <VacancyCard
                  key={role.id}
                  role={role}
                  isExpanded={expandedRole === role.id}
                  onToggle={() => handleRoleToggle(role.id)}
                />
              ))}
            </div>

            {/* Open Application */}
            <div className="mt-8 p-6 rounded-2xl border-2 border-dashed border-gray-300 bg-gray-50/50 text-center">
              <h3 className="text-lg font-display font-bold text-bpc-navy-900 mb-2">
                {t('open_application.title')}
              </h3>
              <p className="text-bpc-navy-600 mb-4 max-w-lg mx-auto">
                {t('open_application.description')}
              </p>
              <a
                href={`mailto:${t('cta.email')}?subject=Open%20sollicitatie`}
                className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl border-2 border-bpc-teal text-bpc-teal font-semibold hover:bg-bpc-teal hover:text-white transition-all"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                </svg>
                {t('open_application.button')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          WHAT WE OFFER SECTION
          ========================================================================= */}
      <section 
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="offer-title"
      >
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('what_we_offer.section_label')}
              </div>
              <h2 id="offer-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900">
                {t('what_we_offer.title')}
              </h2>
            </div>

            {/* Offer items */}
            <div className="grid sm:grid-cols-2 gap-4">
              {offerItems.map((item, i) => (
                <OfferCard key={`offer-${i}`} {...item} index={i} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          QUOTE SECTION - Human element
          ========================================================================= */}
      <section 
        className="py-16 lg:py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0891b2 0%, #0284c7 25%, #0369a1 50%, #0891b2 75%, #14b8a6 100%)'
        }}
        aria-label="Team quote"
      >
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-10 left-10 w-72 h-72 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-white/5 blur-3xl" />
        </div>

        <div className="container-content relative">
          <div className="max-w-3xl mx-auto text-center">
            <svg className="w-12 h-12 mx-auto mb-6 text-white/30" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z" />
            </svg>
            <blockquote className="text-2xl md:text-3xl font-display font-medium text-white mb-6 leading-relaxed">
              {t('team_quote.quote')}
            </blockquote>
            <footer className="space-y-3">
              <cite className="not-italic">
                <span className="block text-white font-semibold">{t('team_quote.author')}</span>
                <span className="block text-white/70 text-sm">{t('team_quote.role')} • {t('team_quote.context')}</span>
              </cite>
              <Link
                href="/over-ons#founders"
                className="inline-flex items-center gap-2 text-white/80 hover:text-white text-sm font-medium transition-colors"
              >
                {t('team_quote.meet_team')}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </footer>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FOR CLIENTS NOTE - Connection to client perspective
          ========================================================================= */}
      <section className="py-12 lg:py-16" aria-labelledby="for-clients-title">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-bpc-navy-900 to-bpc-navy-800 text-white">
              <div className="flex flex-col md:flex-row md:items-center gap-6">
                <div className="flex-1">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white/80 text-xs font-medium mb-3">
                    {t('for_clients.section_label')}
                  </div>
                  <h3 id="for-clients-title" className="text-xl font-display font-bold mb-3">
                    {t('for_clients.title')}
                  </h3>
                  <p className="text-gray-300">
                    {t('for_clients.text')}
                  </p>
                </div>
                <div className="flex-shrink-0">
                  <Link
                    href="/diensten"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-bpc-navy-900 font-semibold hover:bg-gray-100 transition-colors"
                  >
                    {t('for_clients.cta')}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CTA SECTION
          ========================================================================= */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="cta-title">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <h2 id="cta-title" className="text-2xl md:text-3xl font-display font-bold text-bpc-navy-900 mb-4">
              {t('cta.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-8">
              {t('cta.description')}
            </p>
            
            {/* Primary CTA - Email */}
            <a
              href={`mailto:${t('cta.email')}`}
              className="btn-primary text-lg px-10 py-4 inline-flex items-center gap-2 group"
            >
              <svg 
                className="w-5 h-5" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{t('cta.button')}</span>
            </a>

            {/* LinkedIn alternative */}
            <div className="mt-4">
              <a
                href={t('cta.linkedin')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-bpc-navy-600 hover:text-bpc-teal transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="font-medium">{t('cta.linkedin_text')}</span>
              </a>
            </div>
            
            <p className="mt-6 text-bpc-navy-500">
              {t('cta.alternative')}
            </p>

            {/* Secondary options */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <Link
                href="/over-ons#founders"
                className="inline-flex items-center gap-2 text-bpc-teal hover:text-bpc-teal-600 font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                {t('cta.meet_team')}
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-bpc-navy-600 hover:text-bpc-navy-800 font-medium"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
