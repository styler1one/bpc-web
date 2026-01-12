'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ExperienceConfig {
  key: number;
  iconPath: string;
  color: string;
  bgColor: string;
  borderColor: string;
  iconColor: string;
}

const experienceConfigs: ExperienceConfig[] = [
  {
    key: 0,
    // Calm/peace icon - Rust
    iconPath: 'M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z',
    color: 'from-bpc-teal to-bpc-teal-600',
    bgColor: 'bg-bpc-teal/10',
    borderColor: 'group-hover:border-bpc-teal/30',
    iconColor: 'text-bpc-teal',
  },
  {
    key: 1,
    // Checkmark/certainty icon - Zekerheid
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-bpc-navy to-bpc-navy-600',
    bgColor: 'bg-bpc-navy/10',
    borderColor: 'group-hover:border-bpc-navy/30',
    iconColor: 'text-bpc-navy',
  },
  {
    key: 2,
    // Speed/rocket icon - Snelheid
    iconPath: 'M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z',
    color: 'from-bpc-sky to-bpc-teal',
    bgColor: 'bg-bpc-sky/10',
    borderColor: 'group-hover:border-bpc-sky/30',
    iconColor: 'text-bpc-sky',
  },
  {
    key: 3,
    // Key/ownership icon - Eigenaarschap
    iconPath: 'M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z',
    color: 'from-bpc-teal-400 to-bpc-navy',
    bgColor: 'bg-bpc-teal-400/10',
    borderColor: 'group-hover:border-bpc-teal-400/30',
    iconColor: 'text-bpc-teal-600',
  },
];

export function ExperienceSection() {
  const t = useTranslations('experience');

  return (
    <section 
      className="section bg-white relative overflow-hidden"
      aria-labelledby="experience-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
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
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2 
            id="experience-title"
            className="text-4xl md:text-5xl font-display font-bold text-bpc-navy-900 mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-xl text-bpc-navy-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Experience grid */}
        <ul className="grid md:grid-cols-2 lg:grid-cols-4 gap-6" role="list">
          {experienceConfigs.map((experience) => (
            <li
              key={experience.key}
              className={cn(
                'group relative p-8 rounded-3xl bg-white border-2 border-gray-100 transition-all duration-500',
                'hover:shadow-2xl hover:-translate-y-2',
                experience.borderColor
              )}
            >
              {/* Gradient background on hover */}
              <div 
                className={cn(
                  'absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500',
                  `bg-gradient-to-br ${experience.color}`
                )} 
                aria-hidden="true"
              />
              
              <div className="relative">
                {/* Icon */}
                <div 
                  className={cn(
                    'w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110',
                    experience.bgColor
                  )}
                  aria-hidden="true"
                >
                  <svg 
                    className={cn('w-8 h-8', experience.iconColor)} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={experience.iconPath} />
                  </svg>
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-bpc-navy-900 mb-3">
                  {t(`items.${experience.key}.title`)}
                </h3>
                <p className="text-bpc-navy-600 leading-relaxed">
                  {t(`items.${experience.key}.description`)}
                </p>
              </div>

              {/* Corner decoration */}
              <div 
                className={cn(
                  'absolute -bottom-1 -right-1 w-20 h-20 rounded-br-3xl opacity-5 transition-opacity group-hover:opacity-10',
                  `bg-gradient-to-br ${experience.color}`
                )} 
                aria-hidden="true"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
