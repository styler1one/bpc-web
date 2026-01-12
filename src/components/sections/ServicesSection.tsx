'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  name: string;
  tagline: string;
  question: string;
  duration: string;
  description: string;
  deliverables: string[];
  variant: 'discovery' | 'delivery' | 'continuity';
  href: string;
  whatYouGet: string;
}

function ServiceCard({
  name,
  tagline,
  question,
  duration,
  description,
  deliverables,
  variant,
  href,
  whatYouGet,
}: ServiceCardProps) {
  const t = useTranslations('common');

  const variants = {
    discovery: {
      gradient: 'from-bpc-teal/10 via-bpc-sky/5 to-transparent',
      border: 'hover:border-bpc-teal/40',
      accent: 'bg-bpc-teal',
      accentLight: 'bg-bpc-teal/10 text-bpc-teal-700',
      iconColor: 'text-bpc-teal',
      iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
    },
    delivery: {
      gradient: 'from-bpc-navy/10 via-bpc-teal/5 to-transparent',
      border: 'hover:border-bpc-navy/40',
      accent: 'bg-bpc-navy',
      accentLight: 'bg-bpc-navy/10 text-bpc-navy-700',
      iconColor: 'text-bpc-navy',
      iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    },
    continuity: {
      gradient: 'from-bpc-sky/10 via-bpc-teal/5 to-transparent',
      border: 'hover:border-bpc-sky/40',
      accent: 'bg-bpc-sky',
      accentLight: 'bg-bpc-sky/20 text-bpc-teal-700',
      iconColor: 'text-bpc-sky',
      iconPath: 'M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495',
    },
  };

  const v = variants[variant];

  return (
    <article
      className={cn(
        'group relative rounded-3xl p-8 transition-all duration-500',
        'bg-white/70 backdrop-blur-sm border-2 border-gray-100/80',
        'hover:shadow-2xl hover:-translate-y-2',
        v.border
      )}
    >
      {/* Background gradient */}
      <div 
        className={cn('absolute inset-0 rounded-3xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500', v.gradient)} 
        aria-hidden="true"
      />
      
      {/* Content */}
      <div className="relative">
        {/* Icon & Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className={cn('p-3 rounded-2xl', v.accentLight)} aria-hidden="true">
            <svg className={cn('w-8 h-8', v.iconColor)} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d={v.iconPath} />
            </svg>
          </div>
          <div>
            <span className={cn('text-xs font-bold uppercase tracking-wider', v.iconColor)}>
              {tagline}
            </span>
            <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mt-1">
              {name}
            </h3>
          </div>
        </div>

        {/* Question */}
        <div className="relative mb-6 pl-4 border-l-2 border-bpc-teal/30">
          <p className="text-lg text-bpc-navy-700 italic">
            &ldquo;{question}&rdquo;
          </p>
        </div>

        {/* Duration badge */}
        <div className={cn('inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold mb-6', v.accentLight)}>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          {duration}
        </div>

        {/* Description */}
        <p className="text-bpc-navy-600 mb-6 leading-relaxed">
          {description}
        </p>

        {/* Deliverables */}
        <div className="space-y-3 mb-8">
          <p className="text-sm font-bold text-bpc-navy-800 uppercase tracking-wide">{whatYouGet}</p>
          <ul className="space-y-2">
            {deliverables.map((item, i) => (
              <li key={`deliverable-${i}`} className="flex items-start gap-3 text-sm text-bpc-navy-600">
                <span className={cn('flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs', v.accent)} aria-hidden="true">
                  ✓
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA */}
        <Link
          href={href}
          className={cn(
            'inline-flex items-center gap-2 font-semibold transition-all duration-300',
            'text-bpc-navy-700 hover:text-bpc-teal group/link focus-ring rounded-lg'
          )}
        >
          <span>{t('learn_more')}</span>
          <svg 
            className="w-4 h-4 transition-transform group-hover/link:translate-x-1" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>

      {/* Corner accent */}
      <div className={cn('absolute top-0 right-0 w-20 h-20 rounded-tr-3xl rounded-bl-[40px] opacity-5', v.accent)} aria-hidden="true" />
    </article>
  );
}

export function ServicesSection() {
  const t = useTranslations('services');

  const services: Omit<ServiceCardProps, 'whatYouGet'>[] = [
    {
      name: t('discovery.name'),
      tagline: t('discovery.tagline'),
      question: t('discovery.question'),
      duration: t('discovery.duration'),
      description: t('discovery.description'),
      deliverables: t.raw('discovery.deliverables') as string[],
      variant: 'discovery',
      href: '/diensten#discovery',
    },
    {
      name: t('delivery.name'),
      tagline: t('delivery.tagline'),
      question: t('delivery.question'),
      duration: t('delivery.duration'),
      description: t('delivery.description'),
      deliverables: t.raw('delivery.deliverables') as string[],
      variant: 'delivery',
      href: '/diensten#delivery',
    },
    {
      name: t('continuity.name'),
      tagline: t('continuity.tagline'),
      question: t('continuity.question'),
      duration: t('continuity.duration'),
      description: t('continuity.description'),
      deliverables: t.raw('continuity.deliverables') as string[],
      variant: 'continuity',
      href: '/diensten#continuity',
    },
  ];

  return (
    <section 
      className="section bg-gradient-to-b from-white via-gray-50/30 to-white" 
      id="diensten"
      aria-labelledby="services-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-40 bg-gradient-to-b from-bpc-teal/20 to-transparent" />
        <div className="absolute top-20 right-1/3 w-px h-60 bg-gradient-to-b from-bpc-navy/10 to-transparent" />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-bl from-bpc-teal/5 to-transparent blur-3xl" />
      </div>

      <div className="container-content">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-navy animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2 
            id="services-title"
            className="text-4xl md:text-5xl font-display font-bold text-bpc-navy-900 mb-6"
          >
            {t('title')}
          </h2>
          <p className="text-xl text-bpc-navy-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard 
              key={service.variant} 
              {...service} 
              whatYouGet={t('what_you_get')}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
