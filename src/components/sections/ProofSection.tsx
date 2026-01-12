'use client';

import { useTranslations } from 'next-intl';

function AnimatedCounter({ value }: { value: string }) {
  return (
    <span className="tabular-nums">
      {value}
    </span>
  );
}

export function ProofSection() {
  const t = useTranslations('proof');
  const tResults = useTranslations('results');

  const stats = [
    {
      id: 'solutions',
      value: t('stats.solutions'),
      label: t('stats.solutions_label'),
      icon: '🚀',
    },
    {
      id: 'users',
      value: t('stats.users'),
      label: t('stats.users_label'),
      icon: '👥',
    },
    {
      id: 'time-saved',
      value: t('stats.time_saved'),
      label: t('stats.time_saved_label'),
      icon: '⚡',
    },
  ];

  const results = [
    {
      id: 'efficiency',
      category: tResults('efficiency.category'),
      metric: tResults('efficiency.metric'),
      impact: tResults('efficiency.impact'),
      color: 'from-bpc-teal to-bpc-teal-600',
    },
    {
      id: 'quality',
      category: tResults('quality.category'),
      metric: tResults('quality.metric'),
      impact: tResults('quality.impact'),
      color: 'from-bpc-sky to-bpc-teal',
    },
    {
      id: 'adoption',
      category: tResults('adoption.category'),
      metric: tResults('adoption.metric'),
      impact: tResults('adoption.impact'),
      color: 'from-bpc-teal-400 to-bpc-navy',
    },
    {
      id: 'governance',
      category: tResults('governance.category'),
      metric: tResults('governance.metric'),
      impact: tResults('governance.impact'),
      color: 'from-bpc-navy to-bpc-navy-700',
    },
  ];

  const examples = t.raw('examples') as string[];

  return (
    <section 
      className="section bg-bpc-navy-950 text-white relative overflow-hidden"
      aria-labelledby="proof-title"
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
        
        {/* Floating elements */}
        <div className="absolute top-20 right-[10%] w-2 h-2 rounded-full bg-bpc-teal animate-float motion-reduce:animate-none opacity-40" />
        <div className="absolute top-40 right-[30%] w-1 h-1 rounded-full bg-bpc-sky animate-float-slow motion-reduce:animate-none opacity-60" />
        <div className="absolute bottom-40 left-[15%] w-3 h-3 rounded-full bg-bpc-teal/30 animate-float-slower motion-reduce:animate-none opacity-40" />
      </div>

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-bpc-teal-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2 
            id="proof-title"
            className="text-4xl md:text-5xl font-display font-bold text-white mb-4"
          >
            {t('title')}
          </h2>
        </div>

        {/* Stats row */}
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16" role="list">
          {stats.map((stat) => (
            <li
              key={stat.id}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bpc-teal/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
            >
              <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity" aria-hidden="true">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-bpc-teal-400 to-bpc-sky bg-clip-text text-transparent mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </li>
          ))}
        </ul>

        {/* Examples grid */}
        <ul className="grid md:grid-cols-2 gap-4 mb-16" role="list">
          {examples.map((example, index) => (
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
              <p className="text-gray-300 leading-relaxed">{example}</p>
            </li>
          ))}
        </ul>

        {/* Results table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-white/10">
            <h3 className="text-2xl font-display font-bold text-white">
              {tResults('title')}
            </h3>
          </div>
          <div className="divide-y divide-white/10" role="list">
            {results.map((result) => (
              <div
                key={result.id}
                className="group grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8 hover:bg-white/5 transition-colors"
                role="listitem"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${result.color}`} aria-hidden="true" />
                  <span className="font-semibold text-white">{result.category}</span>
                </div>
                <div className="text-gray-400">
                  {result.metric}
                </div>
                <div className="md:text-right">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-bold bg-gradient-to-r ${result.color} text-white`}>
                    {result.impact}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
