import { useTranslations } from 'next-intl';

export function ProofSection() {
  const t = useTranslations('proof');
  const tResults = useTranslations('results');

  const stats = [
    {
      value: t('stats.solutions'),
      label: t('stats.solutions_label'),
    },
    {
      value: t('stats.users'),
      label: t('stats.users_label'),
    },
    {
      value: t('stats.time_saved'),
      label: t('stats.time_saved_label'),
    },
  ];

  const results = [
    {
      category: tResults('efficiency.category'),
      metric: tResults('efficiency.metric'),
      impact: tResults('efficiency.impact'),
    },
    {
      category: tResults('quality.category'),
      metric: tResults('quality.metric'),
      impact: tResults('quality.impact'),
    },
    {
      category: tResults('adoption.category'),
      metric: tResults('adoption.metric'),
      impact: tResults('adoption.impact'),
    },
    {
      category: tResults('governance.category'),
      metric: tResults('governance.metric'),
      impact: tResults('governance.impact'),
    },
  ];

  const examples = t.raw('examples') as string[];

  return (
    <section className="section bg-bpc-navy-950 text-white">
      <div className="container-content">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            {t('title')}
          </h2>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-bpc-teal-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Examples list */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {examples.map((example, index) => (
            <div
              key={index}
              className="flex items-start gap-4 p-6 rounded-xl bg-white/5 border border-white/10"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-bpc-teal/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-bpc-teal-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <p className="text-gray-300">{example}</p>
            </div>
          ))}
        </div>

        {/* Results table */}
        <div className="bg-white/5 rounded-2xl border border-white/10 overflow-hidden">
          <div className="p-6 border-b border-white/10">
            <h3 className="text-xl font-semibold text-white">
              {tResults('title')}
            </h3>
          </div>
          <div className="divide-y divide-white/10">
            {results.map((result, index) => (
              <div
                key={index}
                className="grid grid-cols-3 p-4 md:p-6 gap-4"
              >
                <div className="font-medium text-bpc-teal-400">
                  {result.category}
                </div>
                <div className="text-gray-400">
                  {result.metric}
                </div>
                <div className="text-white font-semibold text-right">
                  {result.impact}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
