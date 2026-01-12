import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-bpc-teal-50/30 to-white">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-bpc-teal-100/40 to-transparent blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-bpc-navy-100/30 to-transparent blur-3xl" />
      </div>

      <div className="container-content relative">
        <div className="py-20 md:py-28 lg:py-36 max-w-4xl">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal-100/80 text-bpc-teal-700 text-sm font-medium mb-6 animate-fade-in">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse" />
            {t('tagline')}
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bpc-navy-900 mb-2 animate-fade-in-up">
            {t('title')}
          </h1>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-bpc-teal mb-8 animate-fade-in-up animation-delay-100">
            {t('subtitle')}
          </h2>

          {/* Description */}
          <p className="text-lg md:text-xl text-bpc-navy-700 leading-relaxed mb-10 max-w-2xl animate-fade-in-up animation-delay-200">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="btn-primary text-base px-8 py-4">
              {t('cta_primary')}
            </Link>
            <Link href="/aanpak" className="btn-secondary text-base px-8 py-4">
              {t('cta_secondary')}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-8 border-t border-gray-200 animate-fade-in animation-delay-500">
            <p className="text-sm text-bpc-navy-600 mb-4">
              Vertrouwd door organisaties in heel Europa
            </p>
            <div className="flex flex-wrap items-center gap-8 text-bpc-navy-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bpc-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">EU AI Act ready</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bpc-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">100% Europese hosting</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-bpc-teal" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium">AVG-compliant</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
