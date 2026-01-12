'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ChallengeConfig {
  key: number;
  iconPath: string;
  iconColor: string;
  bgColor: string;
}

const challengeConfigs: ChallengeConfig[] = [
  {
    key: 0,
    // Beaker/flask icon - Pilots
    iconPath: 'M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l1.402 5.607A2.25 2.25 0 0119.027 23.25h-14.054a2.25 2.25 0 01-2.175-2.843L4.2 14.8',
    iconColor: 'text-amber-600',
    bgColor: 'bg-amber-50',
  },
  {
    key: 1,
    // Lightning bolt/overload icon - IT overbelast
    iconPath: 'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
    iconColor: 'text-rose-600',
    bgColor: 'bg-rose-50',
  },
  {
    key: 2,
    // Shield with exclamation - Uncontrolled usage
    iconPath: 'M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z',
    iconColor: 'text-orange-600',
    bgColor: 'bg-orange-50',
  },
  {
    key: 3,
    // Chart/question - ROI
    iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z',
    iconColor: 'text-violet-600',
    bgColor: 'bg-violet-50',
  },
];

export function ProblemSection() {
  const t = useTranslations('problem');

  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      {/* Decoratieve achtergrond */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-100/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-rose-100/30 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-amber-100 text-amber-800 rounded-full text-sm font-medium mb-4">
            {t('section_label')}
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        {/* Challenges grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {challengeConfigs.map((challenge) => (
            <div
              key={challenge.key}
              className="group relative bg-white rounded-2xl p-6 shadow-sm border border-slate-100 
                         hover:shadow-lg hover:border-amber-200 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex items-start gap-4">
                <div className={cn(
                  'flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center',
                  'group-hover:scale-110 transition-transform duration-300',
                  challenge.bgColor
                )}>
                  <svg 
                    className={cn('w-6 h-6', challenge.iconColor)} 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor" 
                    strokeWidth={1.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d={challenge.iconPath} />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {t(`challenges.${challenge.key}.title`)}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {t(`challenges.${challenge.key}.description`)}
                  </p>
                </div>
              </div>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-amber-400 to-orange-400 
                            rounded-b-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                   aria-hidden="true" />
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <div className="relative bg-gradient-to-r from-bpc-navy to-slate-800 rounded-2xl p-8 text-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] rounded-2xl" aria-hidden="true" />
          <p className="relative text-lg md:text-xl text-white/90 font-medium max-w-3xl mx-auto">
            {t('conclusion')}
          </p>
          {/* Decorative arrow */}
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2" aria-hidden="true">
            <svg className="w-8 h-8 text-bpc-teal" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 16l-6-6h12l-6 6z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
