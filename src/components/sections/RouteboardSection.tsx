'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { cn } from '@/lib/utils';

interface RouteCardProps {
  name: string;
  tagline: string;
  description: string;
  cta: string;
  href: string;
  variant: 'consulting' | 'contracting' | 'creations';
}

function RouteCard({ name, tagline, description, cta, href, variant }: RouteCardProps) {
  const variants = {
    consulting: {
      gradient: 'from-bpc-navy/5 to-transparent',
      border: 'hover:border-bpc-navy/30',
      iconBg: 'bg-bpc-navy/10',
      iconColor: 'text-bpc-navy',
      accentBar: 'bg-bpc-navy',
      // Compass icon
      iconPath: 'M12 2.25A9.75 9.75 0 1 0 21.75 12 9.76 9.76 0 0 0 12 2.25Zm0 18A8.25 8.25 0 1 1 20.25 12 8.26 8.26 0 0 1 12 20.25Zm4.243-13.494-5.486 2.743a.75.75 0 0 0-.336.336l-2.742 5.486a.75.75 0 0 0 .976.976l5.486-2.743a.75.75 0 0 0 .336-.336l2.742-5.486a.75.75 0 0 0-.976-.976Zm-1.282 2.283-1.902 3.802-3.802 1.902 1.901-3.802 3.803-1.902Z',
    },
    contracting: {
      gradient: 'from-bpc-teal/5 to-transparent',
      border: 'hover:border-bpc-teal/30',
      iconBg: 'bg-bpc-teal/10',
      iconColor: 'text-bpc-teal',
      accentBar: 'bg-bpc-teal',
      // People/users icon
      iconPath: 'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z',
    },
    creations: {
      gradient: 'from-bpc-sky/5 to-transparent',
      border: 'hover:border-bpc-sky/30',
      iconBg: 'bg-bpc-sky/10',
      iconColor: 'text-bpc-sky',
      accentBar: 'bg-bpc-sky',
      // Cube/build icon
      iconPath: 'm21 7.5-9-5.25L3 7.5m18 0-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9',
    },
  };

  const v = variants[variant];

  return (
    <article
      className={cn(
        'group relative rounded-2xl p-6 lg:p-8 transition-all duration-300',
        'bg-white border-2 border-slate-100',
        'hover:shadow-xl hover:-translate-y-1',
        v.border
      )}
    >
      {/* Background gradient on hover */}
      <div
        className={cn(
          'absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          v.gradient
        )}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className={cn('w-14 h-14 rounded-xl flex items-center justify-center mb-5', v.iconBg)}>
          <svg
            className={cn('w-7 h-7', v.iconColor)}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d={v.iconPath} />
          </svg>
        </div>

        {/* Tagline */}
        <p className={cn('text-xs font-bold uppercase tracking-wider mb-1', v.iconColor)}>
          {tagline}
        </p>

        {/* Name */}
        <h3 className="text-xl lg:text-2xl font-display font-bold text-bpc-navy-900 mb-3">
          {name}
        </h3>

        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6">
          {description}
        </p>

        {/* CTA */}
        <Link
          href={href}
          className={cn(
            'inline-flex items-center gap-2 font-semibold transition-all duration-300',
            'text-bpc-navy-700 hover:text-bpc-teal group/link focus-ring rounded-lg'
          )}
        >
          <span>{cta}</span>
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

      {/* Bottom accent bar */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300',
          v.accentBar
        )}
        aria-hidden="true"
      />
    </article>
  );
}

export function RouteboardSection() {
  const t = useTranslations('routeboard');
  const tTrust = useTranslations('trust_bullets');

  const routes: Omit<RouteCardProps, 'name' | 'tagline' | 'description' | 'cta'>[] = [
    { variant: 'consulting', href: '/diensten/consulting' },
    { variant: 'contracting', href: '/diensten/contracting' },
    { variant: 'creations', href: '/diensten/creations' },
  ];

  const trustItems = tTrust.raw('items') as string[];

  return (
    <section className="relative py-16 lg:py-20 bg-gradient-to-b from-slate-50/50 to-white" aria-labelledby="routeboard-title">
      {/* Subtle background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-px h-32 bg-gradient-to-b from-bpc-teal/10 to-transparent" />
        <div className="absolute top-10 right-1/3 w-px h-40 bg-gradient-to-b from-bpc-navy/5 to-transparent" />
      </div>

      <div className="container-content relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/5 text-bpc-teal-700 text-sm font-medium mb-4">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2
            id="routeboard-title"
            className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900"
          >
            {t('title')}
          </h2>
        </div>

        {/* Route cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {routes.map((route) => (
            <RouteCard
              key={route.variant}
              {...route}
              name={t(`${route.variant}.name`)}
              tagline={t(`${route.variant}.tagline`)}
              description={t(`${route.variant}.description`)}
              cta={t(`${route.variant}.cta`)}
            />
          ))}
        </div>

        {/* Trust bullets */}
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12">
            {trustItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-sm text-slate-600"
              >
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-bpc-teal/10 flex items-center justify-center" aria-hidden="true">
                  <svg className="w-3 h-3 text-bpc-teal" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
