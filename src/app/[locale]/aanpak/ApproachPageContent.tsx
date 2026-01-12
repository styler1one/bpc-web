'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/* =============================================================================
   Principle Card Component
   ============================================================================= */

interface PrincipleCardProps {
  title: string;
  description: string;
  why: string;
  index: number;
}

function PrincipleCard({ title, description, why, index }: PrincipleCardProps) {
  const icons = [
    'M13 10V3L4 14h7v7l9-11h-7z', // Lightning - resultaat eerst
    'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z', // Chart - meten
    'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z', // People - mens in control
    'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z', // Shield - governance
    'M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4', // Arrows - geen afhankelijkheid
  ];

  return (
    <article className="group p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4 mb-4">
        <div className="w-12 h-12 rounded-xl bg-bpc-teal/10 flex items-center justify-center flex-shrink-0 group-hover:bg-bpc-teal/20 transition-colors" aria-hidden="true">
          <svg className="w-6 h-6 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={icons[index]} />
          </svg>
        </div>
        <div>
          <span className="text-sm font-bold text-bpc-teal uppercase tracking-wide">Principe {index + 1}</span>
          <h3 className="text-xl font-display font-bold text-bpc-navy-900">
            {title}
          </h3>
        </div>
      </div>
      <p className="text-bpc-navy-600 mb-3">
        {description}
      </p>
      <p className="text-sm text-bpc-navy-500 italic">
        → {why}
      </p>
    </article>
  );
}

/* =============================================================================
   Context Tab Button
   ============================================================================= */

interface TabButtonProps {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
  variant: 'ai' | 'consulting' | 'contracting';
}

function TabButton({ active, onClick, children, variant }: TabButtonProps) {
  const variants = {
    ai: 'data-[active=true]:bg-bpc-teal data-[active=true]:text-white data-[active=true]:border-bpc-teal',
    consulting: 'data-[active=true]:bg-bpc-navy data-[active=true]:text-white data-[active=true]:border-bpc-navy',
    contracting: 'data-[active=true]:bg-bpc-sky data-[active=true]:text-white data-[active=true]:border-bpc-sky',
  };

  return (
    <button
      onClick={onClick}
      data-active={active}
      className={cn(
        'px-6 py-3 rounded-full font-semibold transition-all duration-300',
        'border-2 border-gray-200 text-bpc-navy-600',
        'hover:border-gray-300',
        variants[variant]
      )}
    >
      {children}
    </button>
  );
}

/* =============================================================================
   Timeline Phase Component (for AI)
   ============================================================================= */

interface TimelinePhaseProps {
  number: string;
  name: string;
  duration: string;
  description: string;
  items: string[];
  isLast?: boolean;
}

function TimelinePhase({ number, name, duration, description, items, isLast }: TimelinePhaseProps) {
  return (
    <div className="relative flex gap-6 lg:gap-10">
      {!isLast && (
        <div 
          className="absolute left-6 top-16 bottom-0 w-0.5 bg-gradient-to-b from-bpc-teal to-bpc-teal/20" 
          aria-hidden="true"
        />
      )}
      
      <div 
        className="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-bpc-teal to-bpc-teal-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-bpc-teal/20"
        aria-hidden="true"
      >
        {number}
      </div>

      <div className="flex-1 pb-10">
        <div className="flex flex-wrap items-center gap-3 mb-3">
          <h4 className="text-xl font-display font-bold text-bpc-navy-900">
            {name}
          </h4>
          <span className="px-3 py-1 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-semibold">
            {duration}
          </span>
        </div>
        <p className="text-bpc-navy-600 mb-4">
          {description}
        </p>
        <ul className="grid sm:grid-cols-2 gap-2">
          {items.map((item, i) => (
            <li key={`item-${i}`} className="flex items-start gap-2 text-bpc-navy-600 text-sm">
              <svg className="flex-shrink-0 w-4 h-4 text-bpc-teal mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* =============================================================================
   Generic Phase Component (for Consulting/Contracting)
   ============================================================================= */

interface GenericPhaseProps {
  number: string;
  name: string;
  description: string;
  items: string[];
  variant: 'consulting' | 'contracting';
}

function GenericPhase({ number, name, description, items, variant }: GenericPhaseProps) {
  const colors = {
    consulting: 'bg-bpc-navy text-white',
    contracting: 'bg-bpc-sky text-white',
  };

  return (
    <div className="p-6 rounded-2xl bg-white border border-gray-100">
      <div className="flex items-start gap-4 mb-4">
        <span className={cn('flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center font-bold', colors[variant])}>
          {number}
        </span>
        <div>
          <h4 className="text-lg font-display font-bold text-bpc-navy-900">{name}</h4>
          <p className="text-bpc-navy-600 text-sm">{description}</p>
        </div>
      </div>
      <ul className="space-y-2 ml-14">
        {items.map((item, i) => (
          <li key={`item-${i}`} className="flex items-start gap-2 text-bpc-navy-600 text-sm">
            <span className="text-bpc-teal" aria-hidden="true">→</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* =============================================================================
   Collaboration Point Component
   ============================================================================= */

interface PointProps {
  title: string;
  description: string;
}

function CollaborationPoint({ title, description }: PointProps) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-bpc-navy/10 flex items-center justify-center" aria-hidden="true">
        <svg className="w-5 h-5 text-bpc-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
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
   Security Item Component
   ============================================================================= */

interface SecurityItemProps {
  title: string;
  description: string;
}

function SecurityItem({ title, description }: SecurityItemProps) {
  return (
    <div className="p-5 rounded-xl bg-white border border-gray-100">
      <div className="flex items-start gap-3">
        <svg className="flex-shrink-0 w-5 h-5 text-bpc-teal mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <div>
          <h4 className="font-bold text-bpc-navy-900 mb-1">{title}</h4>
          <p className="text-bpc-navy-600 text-sm">{description}</p>
        </div>
      </div>
    </div>
  );
}

/* =============================================================================
   Honesty Point Component
   ============================================================================= */

function HonestyPoint({ title, description }: PointProps) {
  return (
    <div className="flex items-start gap-4 p-4 rounded-xl bg-white/50">
      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center" aria-hidden="true">
        <svg className="w-4 h-4 text-amber-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
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

export function ApproachPageContent() {
  const t = useTranslations('approach_page');
  const [activeContext, setActiveContext] = useState<'ai' | 'consulting' | 'contracting'>('ai');

  // Principles
  const principles = t.raw('principles.items') as PrincipleCardProps[];

  // AI Timeline phases
  const aiPhases = t.raw('context_ai.timeline.phases') as TimelinePhaseProps[];
  const aiMeasurement = t.raw('context_ai.measurement.method') as { title: string; description: string }[];
  const aiResults = t.raw('context_ai.measurement.typical_results') as { metric: string; impact: string }[];

  // Consulting phases
  const consultingPhases = t.raw('context_consulting.phases') as { number: string; name: string; description: string; items: string[] }[];
  const consultingCharacteristics = t.raw('context_consulting.characteristics.items') as string[];

  // Contracting phases
  const contractingPhases = t.raw('context_contracting.phases') as { number: string; name: string; description: string; items: string[] }[];
  const contractingCharacteristics = t.raw('context_contracting.characteristics.items') as string[];

  // Collaboration
  const collaborationPoints = t.raw('collaboration.points') as PointProps[];

  // Security
  const securityItems = t.raw('security.items') as SecurityItemProps[];

  // Honesty
  const honestyPoints = t.raw('honesty.points') as PointProps[];

  return (
    <>
      {/* Hero Section - The Manifest */}
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

      {/* Principles Section */}
      <section className="py-16 lg:py-24" aria-labelledby="principles-title">
        <div className="container-content">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
              {t('principles.section_label')}
            </div>
            <h2 id="principles-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
              {t('principles.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 max-w-2xl mx-auto">
              {t('principles.intro')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principles.map((principle, i) => (
              <PrincipleCard key={`principle-${i}`} {...principle} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Context Tabs Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="contexts-title">
        <div className="container-content">
          {/* Section header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-4">
              {t('contexts.section_label')}
            </div>
            <h2 id="contexts-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
              {t('contexts.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 max-w-2xl mx-auto mb-8">
              {t('contexts.intro')}
            </p>

            {/* Tab buttons */}
            <div className="flex flex-wrap justify-center gap-3">
              <TabButton 
                active={activeContext === 'ai'} 
                onClick={() => setActiveContext('ai')}
                variant="ai"
              >
                {t('contexts.tabs.ai')}
              </TabButton>
              <TabButton 
                active={activeContext === 'consulting'} 
                onClick={() => setActiveContext('consulting')}
                variant="consulting"
              >
                {t('contexts.tabs.consulting')}
              </TabButton>
              <TabButton 
                active={activeContext === 'contracting'} 
                onClick={() => setActiveContext('contracting')}
                variant="contracting"
              >
                {t('contexts.tabs.contracting')}
              </TabButton>
            </div>
          </div>

          {/* AI Context */}
          {activeContext === 'ai' && (
            <div className="max-w-3xl mx-auto animate-in fade-in duration-300">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mb-2">
                  {t('context_ai.title')}
                </h3>
                <p className="text-xl text-bpc-teal font-semibold mb-2">
                  {t('context_ai.subtitle')}
                </p>
                <p className="text-bpc-navy-600">
                  {t('context_ai.intro')}
                </p>
              </div>

              {/* Timeline */}
              <div className="mb-10">
                <p className="text-center text-sm font-semibold text-bpc-teal mb-6">
                  {t('context_ai.timeline.total')}
                </p>
                {aiPhases.map((phase, i) => (
                  <TimelinePhase 
                    key={`ai-phase-${i}`} 
                    {...phase} 
                    isLast={i === aiPhases.length - 1}
                  />
                ))}
              </div>

              {/* Measurement */}
              <div className="p-6 rounded-2xl bg-bpc-navy-900 text-white mb-6">
                <h4 className="font-bold mb-4">{t('context_ai.measurement.title')}</h4>
                <p className="text-white/70 text-sm mb-4">{t('context_ai.measurement.intro')}</p>
                <div className="grid sm:grid-cols-3 gap-4 mb-6">
                  {aiMeasurement.map((item, i) => (
                    <div key={`measure-${i}`} className="p-3 rounded-xl bg-white/10">
                      <p className="font-semibold text-sm">{item.title}</p>
                      <p className="text-white/60 text-xs">{item.description}</p>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-4">
                  {aiResults.map((result, i) => (
                    <div key={`result-${i}`} className="flex items-center gap-2">
                      <span className="text-bpc-teal-400 font-bold">{result.impact}</span>
                      <span className="text-white/60 text-sm">{result.metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link href={t('context_ai.link')} className="text-bpc-teal font-semibold hover:underline">
                  {t('context_ai.link_text')} →
                </Link>
              </div>
            </div>
          )}

          {/* Consulting Context */}
          {activeContext === 'consulting' && (
            <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mb-2">
                  {t('context_consulting.title')}
                </h3>
                <p className="text-xl text-bpc-navy font-semibold mb-2">
                  {t('context_consulting.subtitle')}
                </p>
                <p className="text-bpc-navy-600">
                  {t('context_consulting.intro')}
                </p>
              </div>

              {/* Phases grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {consultingPhases.map((phase, i) => (
                  <GenericPhase key={`cons-phase-${i}`} {...phase} variant="consulting" />
                ))}
              </div>

              {/* Characteristics */}
              <div className="p-6 rounded-2xl bg-bpc-navy/5 mb-6">
                <h4 className="font-bold text-bpc-navy-900 mb-4">{t('context_consulting.characteristics.title')}</h4>
                <div className="flex flex-wrap gap-3">
                  {consultingCharacteristics.map((item, i) => (
                    <span key={`char-${i}`} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-bpc-navy-700 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link href={t('context_consulting.link')} className="text-bpc-navy font-semibold hover:underline">
                  {t('context_consulting.link_text')} →
                </Link>
              </div>
            </div>
          )}

          {/* Contracting Context */}
          {activeContext === 'contracting' && (
            <div className="max-w-4xl mx-auto animate-in fade-in duration-300">
              <div className="text-center mb-10">
                <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mb-2">
                  {t('context_contracting.title')}
                </h3>
                <p className="text-xl text-bpc-sky font-semibold mb-2">
                  {t('context_contracting.subtitle')}
                </p>
                <p className="text-bpc-navy-600">
                  {t('context_contracting.intro')}
                </p>
              </div>

              {/* Phases grid */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                {contractingPhases.map((phase, i) => (
                  <GenericPhase key={`cont-phase-${i}`} {...phase} variant="contracting" />
                ))}
              </div>

              {/* Characteristics */}
              <div className="p-6 rounded-2xl bg-bpc-sky/5 mb-6">
                <h4 className="font-bold text-bpc-navy-900 mb-4">{t('context_contracting.characteristics.title')}</h4>
                <div className="flex flex-wrap gap-3">
                  {contractingCharacteristics.map((item, i) => (
                    <span key={`char-${i}`} className="px-4 py-2 rounded-full bg-white border border-gray-200 text-bpc-navy-700 text-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <Link href={t('context_contracting.link')} className="text-bpc-sky font-semibold hover:underline">
                  {t('context_contracting.link_text')} →
                </Link>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="py-16 lg:py-24" aria-labelledby="collaboration-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-4">
                  {t('collaboration.section_label')}
                </div>
                <h2 id="collaboration-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                  {t('collaboration.title')}
                </h2>
                <p className="text-lg text-bpc-navy-600">
                  {t('collaboration.intro')}
                </p>
              </div>

              <div className="space-y-4">
                {collaborationPoints.map((point, i) => (
                  <CollaborationPoint key={`collab-${i}`} {...point} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white" aria-labelledby="security-title">
        <div className="container-content">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                {t('security.section_label')}
              </div>
              <h2 id="security-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('security.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('security.intro')}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {securityItems.map((item, i) => (
                <SecurityItem key={`security-${i}`} {...item} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honesty Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-amber-50/50 to-white" aria-labelledby="honesty-title">
        <div className="container-content">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 text-amber-700 text-sm font-medium mb-4">
                {t('honesty.section_label')}
              </div>
              <h2 id="honesty-title" className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
                {t('honesty.title')}
              </h2>
              <p className="text-lg text-bpc-navy-600">
                {t('honesty.intro')}
              </p>
            </div>

            <div className="space-y-4">
              {honestyPoints.map((point, i) => (
                <HonestyPoint key={`honesty-${i}`} {...point} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24" aria-labelledby="approach-cta-title">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center p-12 rounded-3xl bg-gradient-to-br from-bpc-navy-900 to-bpc-navy-800 text-white">
            <h2 
              id="approach-cta-title"
              className="text-3xl md:text-4xl font-display font-bold mb-4"
            >
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
    </>
  );
}
