'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface StatConfig {
  key: string;
  iconPath: string;
  color: string;
}

const statConfigs: StatConfig[] = [
  {
    key: 'time_saved',
    iconPath: 'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-bpc-teal-400 to-bpc-teal-600',
  },
  {
    key: 'errors_reduced',
    iconPath: 'M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    color: 'from-bpc-sky to-bpc-teal',
  },
  {
    key: 'adoption',
    iconPath: 'M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z',
    color: 'from-bpc-teal to-bpc-navy',
  },
];

export function ResultsSection() {
  const t = useTranslations('results');
  const tTransition = useTranslations('transitions');

  const exampleItems = t.raw('examples.items') as Array<{ context: string; outcome: string }>;
  const guaranteePoints = t.raw('guarantee.points') as string[];

  return (
    <section 
      className="section bg-bpc-navy-950 text-white relative overflow-hidden"
      aria-labelledby="results-title"
    >
      {/* Animated background */}
      <div className="absolute inset-0" aria-hidden="true">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-[100px] animate-pulse-soft motion-reduce:animate-none" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-bpc-navy-700/50 blur-[80px] animate-pulse-soft motion-reduce:animate-none animation-delay-500" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 156, 202, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-bpc-teal-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2 
            id="results-title"
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-xl text-gray-300">
            {t('subtitle')}
          </p>
        </div>

        {/* Stats row */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" role="list">
          {statConfigs.map((stat) => (
            <li
              key={stat.key}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bpc-teal/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Icon */}
              <div className="absolute top-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity" aria-hidden="true">
                <svg className="w-10 h-10 text-bpc-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d={stat.iconPath} />
                </svg>
              </div>
              <div className={cn(
                'text-5xl md:text-6xl font-display font-bold bg-gradient-to-r bg-clip-text text-transparent mb-2',
                stat.color
              )}>
                {t(`stats.${stat.key}`)}
              </div>
              <div className="text-gray-400 font-medium">{t(`stats.${stat.key}_label`)}</div>
            </li>
          ))}
        </ul>

        {/* Examples - wat dit betekent in de praktijk */}
        <div className="mb-16">
          <h3 className="text-2xl font-display font-bold text-white mb-8 text-center">
            {t('examples.title')}
          </h3>
          <ul className="grid md:grid-cols-2 gap-4" role="list">
            {exampleItems.map((item, index) => (
              <li
                key={`example-${index}`}
                className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bpc-teal/20 hover:bg-white/[0.07] transition-all duration-300"
              >
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-bpc-teal/20 to-bpc-teal/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                  aria-hidden="true"
                >
                  <svg className="w-6 h-6 text-bpc-teal-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold mb-1">{item.context}</p>
                  <p className="text-gray-400 leading-relaxed">{item.outcome}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Guarantee section */}
        <div className="bg-gradient-to-r from-bpc-teal/10 to-bpc-navy-800/50 backdrop-blur-sm rounded-3xl border border-bpc-teal/20 p-8 md:p-10 mb-12">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0" aria-hidden="true">
              <div className="w-16 h-16 rounded-2xl bg-bpc-teal/20 flex items-center justify-center">
                <svg className="w-8 h-8 text-bpc-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-bold text-white mb-4">{t('guarantee.title')}</h3>
              <ul className="space-y-2">
                {guaranteePoints.map((point, index) => (
                  <li key={`guarantee-${index}`} className="flex items-start gap-3 text-gray-300">
                    <span className="text-bpc-teal-400 mt-0.5" aria-hidden="true">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Transition to Proof */}
        <div className="text-center pt-8 border-t border-white/10">
          <p className="text-xl font-semibold text-white/90 mb-2">
            {tTransition('results_to_proof.text')}
          </p>
          <div aria-hidden="true">
            <svg className="w-6 h-6 mx-auto text-bpc-teal-400 animate-bounce motion-reduce:animate-none" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
