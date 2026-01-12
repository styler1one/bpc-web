import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface ServiceCardProps {
  name: string;
  tagline: string;
  question: string;
  duration: string;
  description: string;
  deliverables: string[];
  accentColor: 'teal' | 'navy' | 'sky';
  href: string;
}

function ServiceCard({
  name,
  tagline,
  question,
  duration,
  description,
  deliverables,
  accentColor,
  href,
}: ServiceCardProps) {
  const t = useTranslations('common');

  const accentStyles = {
    teal: 'border-t-bpc-teal bg-gradient-to-b from-bpc-teal-50/50 to-white',
    navy: 'border-t-bpc-navy bg-gradient-to-b from-bpc-navy-50/50 to-white',
    sky: 'border-t-bpc-sky bg-gradient-to-b from-bpc-teal-50/30 to-white',
  };

  return (
    <div
      className={`card-hover p-8 border-t-4 ${accentStyles[accentColor]} flex flex-col h-full`}
    >
      {/* Header */}
      <div className="mb-6">
        <span className="text-sm font-medium text-bpc-teal uppercase tracking-wide">
          {tagline}
        </span>
        <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mt-1">
          {name}
        </h3>
      </div>

      {/* Question */}
      <p className="text-lg text-bpc-navy-700 font-medium italic mb-4">
        &ldquo;{question}&rdquo;
      </p>

      {/* Duration badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 bg-bpc-navy-100 rounded-full text-sm text-bpc-navy-700 font-medium mb-4 self-start">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {duration}
      </div>

      {/* Description */}
      <p className="text-bpc-navy-600 mb-6 flex-grow">
        {description}
      </p>

      {/* Deliverables */}
      <div className="space-y-2 mb-6">
        <p className="text-sm font-semibold text-bpc-navy-800">Wat je krijgt:</p>
        <ul className="space-y-2">
          {deliverables.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-bpc-navy-600">
              <svg className="w-4 h-4 text-bpc-teal mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        href={href}
        className="btn-outline text-sm mt-auto"
      >
        {t('learn_more')}
      </Link>
    </div>
  );
}

export function ServicesSection() {
  const t = useTranslations('services');

  const services: ServiceCardProps[] = [
    {
      name: t('discovery.name'),
      tagline: t('discovery.tagline'),
      question: t('discovery.question'),
      duration: t('discovery.duration'),
      description: t('discovery.description'),
      deliverables: t.raw('discovery.deliverables') as string[],
      accentColor: 'teal',
      href: '/diensten#discovery',
    },
    {
      name: t('delivery.name'),
      tagline: t('delivery.tagline'),
      question: t('delivery.question'),
      duration: t('delivery.duration'),
      description: t('delivery.description'),
      deliverables: t.raw('delivery.deliverables') as string[],
      accentColor: 'navy',
      href: '/diensten#delivery',
    },
    {
      name: t('continuity.name'),
      tagline: t('continuity.tagline'),
      question: t('continuity.question'),
      duration: t('continuity.duration'),
      description: t('continuity.description'),
      deliverables: t.raw('continuity.deliverables') as string[],
      accentColor: 'sky',
      href: '/diensten#continuity',
    },
  ];

  return (
    <section className="section bg-white" id="diensten">
      <div className="container-content">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-bpc-navy-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Service cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.name}
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
