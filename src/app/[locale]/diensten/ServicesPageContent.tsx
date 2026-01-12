'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

/* =============================================================================
   Service Detail Card Component
   ============================================================================= */

interface ServiceDetailCardProps {
  id: string;
  name: string;
  tagline: string;
  question: string;
  duration: string;
  fullDescription: string;
  forWho: string;
  forWhoLabel: string;
  processTitle: string;
  processSteps: string[];
  deliverables: string[];
  examples: string[];
  whatYouGet: string;
  typicalProjects: string;
  variant: 'discovery' | 'delivery' | 'continuity';
  extra?: {
    title: string;
    description: string;
  };
}

function ServiceDetailCard({
  id,
  name,
  tagline,
  question,
  duration,
  fullDescription,
  forWho,
  forWhoLabel,
  processTitle,
  processSteps,
  deliverables,
  examples,
  whatYouGet,
  typicalProjects,
  variant,
  extra,
}: ServiceDetailCardProps) {
  const variants = {
    discovery: {
      gradient: 'from-bpc-teal/5 via-bpc-sky/5 to-transparent',
      border: 'border-bpc-teal/20',
      accent: 'bg-bpc-teal',
      accentLight: 'bg-bpc-teal/10 text-bpc-teal-700',
      iconColor: 'text-bpc-teal',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    delivery: {
      gradient: 'from-bpc-navy/5 via-bpc-teal/5 to-transparent',
      border: 'border-bpc-navy/20',
      accent: 'bg-bpc-navy',
      accentLight: 'bg-bpc-navy/10 text-bpc-navy-700',
      iconColor: 'text-bpc-navy',
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    continuity: {
      gradient: 'from-bpc-sky/5 via-bpc-teal/5 to-transparent',
      border: 'border-bpc-sky/20',
      accent: 'bg-bpc-sky',
      accentLight: 'bg-bpc-sky/20 text-bpc-teal-700',
      iconColor: 'text-bpc-sky',
      iconPath: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
    },
  };

  const v = variants[variant];

  return (
    <article
      id={id}
      className={cn(
        'relative rounded-3xl p-8 lg:p-12 scroll-mt-32',
        'bg-gradient-to-br border-2',
        v.gradient,
        v.border
      )}
    >
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:items-start gap-6 mb-8">
        <div className={cn('p-4 rounded-2xl w-fit', v.accentLight)} aria-hidden="true">
          <svg className={cn('w-10 h-10', v.iconColor)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={v.iconPath} />
          </svg>
        </div>
        <div className="flex-1">
          <span className={cn('text-sm font-bold uppercase tracking-wider', v.iconColor)}>
            {tagline}
          </span>
          <h2 className="text-3xl lg:text-4xl font-display font-bold text-bpc-navy-900 mt-2">
            {name}
          </h2>
          <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mt-4', v.accentLight)}>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {duration}
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="relative mb-8 pl-6 border-l-4 border-bpc-teal/30">
        <p className="text-xl text-bpc-navy-700 italic">
          &ldquo;{question}&rdquo;
        </p>
      </div>

      {/* Description */}
      <p className="text-lg text-bpc-navy-600 mb-8 leading-relaxed">
        {fullDescription}
      </p>

      {/* For who */}
      <div className="mb-8 p-6 rounded-2xl bg-white/50">
        <h3 className="text-sm font-bold text-bpc-navy-800 uppercase tracking-wide mb-2">
          {forWhoLabel}
        </h3>
        <p className="text-bpc-navy-600">
          {forWho}
        </p>
      </div>

      {/* Grid: Process + Deliverables */}
      <div className="grid lg:grid-cols-2 gap-8 mb-8">
        {/* Process */}
        <div className="p-6 rounded-2xl bg-white/50">
          <h3 className="text-sm font-bold text-bpc-navy-800 uppercase tracking-wide mb-4">
            {processTitle}
          </h3>
          <ol className="space-y-3">
            {processSteps.map((step, i) => (
              <li key={`process-${i}`} className="flex items-start gap-3 text-bpc-navy-600">
                <span className={cn('flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold', v.accent)} aria-hidden="true">
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>

        {/* Deliverables */}
        <div className="p-6 rounded-2xl bg-white/50">
          <h3 className="text-sm font-bold text-bpc-navy-800 uppercase tracking-wide mb-4">
            {whatYouGet}
          </h3>
          <ul className="space-y-3">
            {deliverables.map((item, i) => (
              <li key={`deliverable-${i}`} className="flex items-start gap-3 text-bpc-navy-600">
                <span className={cn('flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center text-white text-xs', v.accent)} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Examples */}
      <div className="p-6 rounded-2xl bg-white/50 mb-8">
        <h3 className="text-sm font-bold text-bpc-navy-800 uppercase tracking-wide mb-4">
          {typicalProjects}
        </h3>
        <div className="grid sm:grid-cols-2 gap-3">
          {examples.map((item, i) => (
            <div key={`example-${i}`} className="flex items-start gap-2 text-bpc-navy-500">
              <span className="text-bpc-teal mt-0.5" aria-hidden="true">→</span>
              <span>{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Extra section for continuity */}
      {extra && (
        <div className="p-6 rounded-2xl bg-bpc-navy-900 text-white">
          <h3 className="text-lg font-bold mb-2">
            {extra.title}
          </h3>
          <p className="text-gray-300">
            {extra.description}
          </p>
        </div>
      )}
    </article>
  );
}

/* =============================================================================
   Capability Card Component (Consulting, Creations, Contracting)
   ============================================================================= */

interface CapabilityCardProps {
  name: string;
  tagline: string;
  description: string;
  variant: 'consulting' | 'creations' | 'contracting';
  href: string;
  linkText: string;
}

function CapabilityCard({ name, tagline, description, variant, href, linkText }: CapabilityCardProps) {
  const variants = {
    consulting: {
      gradient: 'from-bpc-teal/10 to-transparent',
      iconColor: 'text-bpc-teal',
      hoverBorder: 'hover:border-bpc-teal/30',
      iconPath: 'M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z',
    },
    creations: {
      gradient: 'from-bpc-navy/10 to-transparent',
      iconColor: 'text-bpc-navy',
      hoverBorder: 'hover:border-bpc-navy/30',
      iconPath: 'M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z',
    },
    contracting: {
      gradient: 'from-bpc-sky/10 to-transparent',
      iconColor: 'text-bpc-sky',
      hoverBorder: 'hover:border-bpc-sky/30',
      iconPath: 'M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z',
    },
  };

  const v = variants[variant];

  return (
    <article className={cn(
      'group relative p-6 rounded-2xl bg-gradient-to-br border border-gray-100',
      'hover:shadow-lg transition-all duration-300',
      v.gradient,
      v.hoverBorder
    )}>
      <div className="flex items-start gap-4 mb-4">
        <div className="p-2 rounded-xl bg-white shadow-sm" aria-hidden="true">
          <svg className={cn('w-6 h-6', v.iconColor)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d={v.iconPath} />
          </svg>
        </div>
        <div>
          <h3 className="text-lg font-display font-bold text-bpc-navy-900">
            {name}
          </h3>
          <p className={cn('text-sm font-medium', v.iconColor)}>
            {tagline}
          </p>
        </div>
      </div>

      <p className="text-bpc-navy-600 leading-relaxed mb-4">
        {description}
      </p>

      <Link 
        href={href}
        className={cn(
          'inline-flex items-center gap-2 text-sm font-medium transition-colors',
          v.iconColor,
          'hover:underline'
        )}
      >
        <span>{linkText}</span>
        <svg 
          className="w-4 h-4 transition-transform group-hover:translate-x-1" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </Link>
    </article>
  );
}

/* =============================================================================
   Which Fits Section
   ============================================================================= */

interface ScenarioProps {
  situation: string;
  service: string;
}

function WhichFitsSection({ title, scenarios }: { title: string; scenarios: ScenarioProps[] }) {
  return (
    <section className="py-16">
      <div className="container-content">
        <h2 className="text-2xl font-display font-bold text-bpc-navy-900 mb-8 text-center">
          {title}
        </h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {scenarios.map((scenario, i) => (
            <div
              key={`scenario-${i}`}
              className="p-6 rounded-2xl bg-white border border-gray-100 hover:border-bpc-teal/30 hover:shadow-lg transition-all duration-300"
            >
              <p className="text-bpc-navy-600 italic mb-4">
                &ldquo;{scenario.situation}&rdquo;
              </p>
              <p className="font-semibold text-bpc-teal">
                → {scenario.service}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* =============================================================================
   Main Page Content
   ============================================================================= */

export function ServicesPageContent() {
  const t = useTranslations('services_page');
  const tServices = useTranslations('services');
  const tCommon = useTranslations('common');

  // AI Services data
  const services: Omit<ServiceDetailCardProps, 'whatYouGet' | 'typicalProjects' | 'forWhoLabel'>[] = [
    {
      id: 'discovery',
      name: tServices('discovery.name'),
      tagline: tServices('discovery.tagline'),
      question: tServices('discovery.question'),
      duration: tServices('discovery.duration'),
      fullDescription: t('discovery.full_description'),
      forWho: t('discovery.for_who'),
      processTitle: t('discovery.process.title'),
      processSteps: t.raw('discovery.process.steps') as string[],
      deliverables: tServices.raw('discovery.deliverables') as string[],
      examples: tServices.raw('discovery.examples') as string[],
      variant: 'discovery',
    },
    {
      id: 'delivery',
      name: tServices('delivery.name'),
      tagline: tServices('delivery.tagline'),
      question: tServices('delivery.question'),
      duration: tServices('delivery.duration'),
      fullDescription: t('delivery.full_description'),
      forWho: t('delivery.for_who'),
      processTitle: t('delivery.process.title'),
      processSteps: t.raw('delivery.process.steps') as string[],
      deliverables: tServices.raw('delivery.deliverables') as string[],
      examples: tServices.raw('delivery.examples') as string[],
      variant: 'delivery',
    },
    {
      id: 'continuity',
      name: tServices('continuity.name'),
      tagline: tServices('continuity.tagline'),
      question: tServices('continuity.question'),
      duration: tServices('continuity.duration'),
      fullDescription: t('continuity.full_description'),
      forWho: t('continuity.for_who'),
      processTitle: t('continuity.process.title'),
      processSteps: t.raw('continuity.process.steps') as string[],
      deliverables: tServices.raw('continuity.deliverables') as string[],
      examples: tServices.raw('continuity.examples') as string[],
      variant: 'continuity',
      extra: {
        title: t('continuity.extra.title'),
        description: t('continuity.extra.description'),
      },
    },
  ];

  // Capabilities data
  const capabilities: CapabilityCardProps[] = [
    {
      name: t('transformation.consulting.name'),
      tagline: t('transformation.consulting.tagline'),
      description: t('transformation.consulting.description'),
      variant: 'consulting',
      href: '/diensten/consulting',
      linkText: t('transformation.learn_more'),
    },
    {
      name: t('transformation.creations.name'),
      tagline: t('transformation.creations.tagline'),
      description: t('transformation.creations.description'),
      variant: 'creations',
      href: '/diensten/creations',
      linkText: t('transformation.learn_more'),
    },
    {
      name: t('transformation.contracting.name'),
      tagline: t('transformation.contracting.tagline'),
      description: t('transformation.contracting.description'),
      variant: 'contracting',
      href: '/diensten/contracting',
      linkText: t('transformation.learn_more'),
    },
  ];

  // Which fits scenarios
  const scenarios = tServices.raw('which_fits.scenarios') as ScenarioProps[];

  return (
    <>
      {/* Hero Section - Dark design consistent with Aanpak/Over Ons */}
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
              {t('hero_label')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl font-display text-bpc-teal-400 mb-6">
              {t('hero_subtitle')}
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Why Us - Transformation Context first */}
      <section 
        className="py-16 lg:py-24 bg-gradient-to-b from-gray-50 to-white"
        aria-labelledby="transformation-title"
      >
        <div className="container-content">
          {/* Section Header */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bpc-navy" aria-hidden="true" />
              {t('transformation.section_label')}
            </div>
            <h2 
              id="transformation-title"
              className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-6"
            >
              {t('transformation.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-4">
              {t('transformation.intro')}
            </p>
            <p className="text-bpc-navy-500">
              {t('transformation.context')}
            </p>
          </div>

          {/* Capabilities - How we deliver */}
          <div className="mb-12">
            <h3 className="text-lg font-display font-semibold text-bpc-navy-800 text-center mb-2">
              {t('transformation.capabilities_title')}
            </h3>
            <p className="text-bpc-navy-600 text-center mb-8 text-sm">
              {t('transformation.capabilities_intro')}
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {capabilities.map((capability) => (
                <CapabilityCard key={capability.variant} {...capability} />
              ))}
            </div>
          </div>

          {/* Closing statement */}
          <div className="max-w-3xl mx-auto text-center p-8 rounded-3xl bg-bpc-navy-900 text-white">
            <p className="text-lg font-medium">
              {t('transformation.closing')}
            </p>
          </div>
        </div>
      </section>

      {/* AI Services Detail Section */}
      <section className="py-16 lg:py-24">
        <div className="container-content">
          {/* Section intro */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {t('ai_propositions_label')}
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-6">
              {t('ai_propositions_title')}
            </h2>
            <p className="text-lg text-bpc-navy-600">
              {t('ai_propositions_intro')}
            </p>
          </div>
          <div className="space-y-12">
            {services.map((service) => (
              <ServiceDetailCard
                key={service.id}
                {...service}
                whatYouGet={tServices('what_you_get')}
                typicalProjects={tServices('typical_projects')}
                forWhoLabel={t('for_who_label')}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Which Fits */}
      <WhichFitsSection title={t('which_fits_title')} scenarios={scenarios} />

      {/* CTA Section */}
      <section className="py-16 lg:py-24" aria-labelledby="services-cta-title">
        <div className="container-content">
          <div className="max-w-2xl mx-auto text-center">
            <h2 
              id="services-cta-title"
              className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-6"
            >
              {t('cta.title')}
            </h2>
            <p className="text-lg text-bpc-navy-600 mb-8">
              {t('cta.description')}
            </p>
            <Link
              href="/contact"
              className="btn-primary text-lg px-10 py-5 inline-flex items-center gap-2 group"
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
