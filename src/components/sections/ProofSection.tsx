'use client';

import { useTranslations } from 'next-intl';

function AnimatedCounter({ value, suffix = '' }: { value: string; suffix?: string }) {
  return (
    <span className="tabular-nums">
      {value}{suffix}
    </span>
  );
}

export function ProofSection() {
  const t = useTranslations('proof');
  const tResults = useTranslations('results');

  const stats = [
    {
      value: t('stats.solutions'),
      label: t('stats.solutions_label'),
      icon: '🚀',
    },
    {
      value: t('stats.users'),
      label: t('stats.users_label'),
      icon: '👥',
    },
    {
      value: t('stats.time_saved'),
      label: t('stats.time_saved_label'),
      icon: '⚡',
    },
  ];

  const results = [
    {
      category: tResults('efficiency.category'),
      metric: tResults('efficiency.metric'),
      impact: tResults('efficiency.impact'),
      color: 'from-bpc-teal to-bpc-teal-600',
    },
    {
      category: tResults('quality.category'),
      metric: tResults('quality.metric'),
      impact: tResults('quality.impact'),
      color: 'from-bpc-sky to-bpc-teal',
    },
    {
      category: tResults('adoption.category'),
      metric: tResults('adoption.metric'),
      impact: tResults('adoption.impact'),
      color: 'from-bpc-teal-400 to-bpc-navy',
    },
    {
      category: tResults('governance.category'),
      metric: tResults('governance.metric'),
      impact: tResults('governance.impact'),
      color: 'from-bpc-navy to-bpc-navy-700',
    },
  ];

  const examples = t.raw('examples') as string[];

  return (
    <section className="section bg-bpc-navy-950 text-white relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-[100px] animate-pulse-soft" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full bg-bpc-navy-700/50 blur-[80px] animate-pulse-soft animation-delay-500" />
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(45, 156, 202, 0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }} />
        
        {/* Floating elements */}
        <div className="absolute top-20 right-[10%] w-2 h-2 rounded-full bg-bpc-teal animate-float opacity-40" />
        <div className="absolute top-40 right-[30%] w-1 h-1 rounded-full bg-bpc-sky animate-float-slow opacity-60" />
        <div className="absolute bottom-40 left-[15%] w-3 h-3 rounded-full bg-bpc-teal/30 animate-float-slower opacity-40" />
      </div>

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm text-bpc-teal-400 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse" />
            Bewezen resultaten
          </div>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-3xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bpc-teal/30 hover:bg-white/10 transition-all duration-500 hover:-translate-y-1"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-4 right-4 text-3xl opacity-20 group-hover:opacity-40 transition-opacity">
                {stat.icon}
              </div>
              <div className="text-5xl md:text-6xl font-display font-bold bg-gradient-to-r from-bpc-teal-400 to-bpc-sky bg-clip-text text-transparent mb-2">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Examples grid */}
        <div className="grid md:grid-cols-2 gap-4 mb-16">
          {examples.map((example, index) => (
            <div
              key={index}
              className="group flex items-start gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-bpc-teal/20 hover:bg-white/[0.07] transition-all duration-300"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-bpc-teal/20 to-bpc-teal/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <svg className="w-6 h-6 text-bpc-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300 leading-relaxed">{example}</p>
            </div>
          ))}
        </div>

        {/* Results table */}
        <div className="bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
          <div className="p-6 md:p-8 border-b border-white/10">
            <h3 className="text-2xl font-display font-bold text-white">
              {tResults('title')}
            </h3>
          </div>
          <div className="divide-y divide-white/10">
            {results.map((result, index) => (
              <div
                key={index}
                className="group grid grid-cols-1 md:grid-cols-3 gap-4 p-6 md:p-8 hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${result.color}`} />
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
