'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

const valueData = [
  {
    key: 'craftsmanship',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    color: 'from-bpc-teal to-bpc-teal-600',
    bgColor: 'bg-bpc-teal/10',
    borderColor: 'group-hover:border-bpc-teal/30',
  },
  {
    key: 'results',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    color: 'from-bpc-navy to-bpc-navy-600',
    bgColor: 'bg-bpc-navy/10',
    borderColor: 'group-hover:border-bpc-navy/30',
  },
  {
    key: 'commitment',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    color: 'from-bpc-sky to-bpc-teal',
    bgColor: 'bg-bpc-sky/10',
    borderColor: 'group-hover:border-bpc-sky/30',
  },
  {
    key: 'clarity',
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
    color: 'from-bpc-teal-400 to-bpc-navy',
    bgColor: 'bg-bpc-teal-400/10',
    borderColor: 'group-hover:border-bpc-teal-400/30',
  },
];

export function ValuesSection() {
  const t = useTranslations('values');

  return (
    <section className="section bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gray-50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-teal/5 blur-3xl" />
        <div className="absolute top-20 right-20 w-[300px] h-[300px] rounded-full bg-bpc-navy/5 blur-3xl" />
        
        {/* Decorative lines */}
        <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bpc-teal/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-bpc-navy/5 to-transparent" />
      </div>

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/5 text-bpc-teal-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse" />
            {t('section_label')}
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-bpc-navy-900 mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {valueData.map((value, index) => (
            <div
              key={value.key}
              className={cn(
                'group relative p-8 rounded-3xl bg-white border-2 border-gray-100 transition-all duration-500',
                'hover:shadow-2xl hover:-translate-y-2',
                value.borderColor
              )}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Gradient background on hover */}
              <div className={cn(
                'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500',
                `bg-gradient-to-br ${value.color}`,
                'opacity-0 group-hover:opacity-[0.03]'
              )} />
              
              <div className="relative">
                {/* Icon */}
                <div className={cn(
                  'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110',
                  value.bgColor
                )}>
                  <div className={cn('bg-gradient-to-br bg-clip-text text-transparent', value.color)}>
                    {value.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-bpc-navy-900 mb-3">
                  {t(`${value.key}.name`)}
                </h3>
                <p className="text-bpc-navy-600 leading-relaxed">
                  {t(`${value.key}.description`)}
                </p>
              </div>

              {/* Corner decoration */}
              <div className={cn(
                'absolute -bottom-1 -right-1 w-20 h-20 rounded-br-3xl opacity-5 transition-opacity group-hover:opacity-10',
                `bg-gradient-to-br ${value.color}`
              )} />
            </div>
          ))}
        </div>

        {/* Bottom quote */}
        <div className="mt-20 text-center">
          <blockquote className="text-2xl md:text-3xl font-display text-bpc-navy-700 italic max-w-3xl mx-auto">
            &ldquo;{t('quote')}&rdquo;
          </blockquote>
          <div className="mt-4 text-bpc-navy-500 font-medium">
            — {t('quote_author')}
          </div>
        </div>
      </div>
    </section>
  );
}
