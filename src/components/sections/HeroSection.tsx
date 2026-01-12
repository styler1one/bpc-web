'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

function FloatingArrows() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Large floating arrow shapes inspired by BPC logo */}
      <div className="absolute top-20 right-[10%] w-16 h-24 opacity-10 animate-float">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad1)" />
          <defs>
            <linearGradient id="arrowGrad1" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2d9cca" />
              <stop offset="1" stopColor="#1a3a5c" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-40 right-[25%] w-10 h-16 opacity-20 animate-float-slow animation-delay-500">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad2)" />
          <defs>
            <linearGradient id="arrowGrad2" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5fbcd3" />
              <stop offset="1" stopColor="#2d9cca" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-32 right-[15%] w-8 h-12 opacity-15 animate-float-slower animation-delay-300">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="#7dd3e8" />
        </svg>
      </div>

      <div className="absolute top-60 left-[5%] w-12 h-18 opacity-10 animate-float animation-delay-700">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full rotate-[-15deg]">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad3)" />
          <defs>
            <linearGradient id="arrowGrad3" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#1a3a5c" />
              <stop offset="1" stopColor="#2d9cca" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Geometric circles */}
      <div className="absolute top-1/3 right-[5%] w-64 h-64 rounded-full border border-bpc-teal/10 animate-spin-slow" />
      <div className="absolute top-1/3 right-[5%] w-48 h-48 rounded-full border border-bpc-navy/5 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      
      {/* Gradient lines */}
      <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-bpc-teal/20 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-bpc-navy/10 to-transparent" />
    </div>
  );
}

function BackgroundEffects() {
  return (
    <>
      {/* Animated gradient orbs */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-bpc-teal/20 via-bpc-sky/10 to-transparent blur-3xl animate-pulse-soft" />
      <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-bpc-navy/10 via-bpc-teal/5 to-transparent blur-3xl animate-pulse-soft animation-delay-1000" />
      <div className="absolute -bottom-20 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-t from-bpc-teal/10 to-transparent blur-3xl animate-pulse-soft animation-delay-500" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-50" />
      
      {/* Subtle radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-bpc-teal/5 via-transparent to-transparent" />
    </>
  );
}

export function HeroSection() {
  const t = useTranslations('hero');

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-white via-gray-50/50 to-white">
      <BackgroundEffects />
      <FloatingArrows />

      <div className="container-content py-20">
        <div className="max-w-4xl">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-bpc-teal/20 shadow-lg shadow-bpc-teal/5 mb-8 animate-fade-in">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bpc-teal opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-bpc-teal"></span>
            </span>
            <span className="text-bpc-navy-800 font-semibold tracking-wide">{t('tagline')}</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-bpc-navy-900 mb-3 animate-fade-in-up">
            {t('title')}
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-8 animate-fade-in-up animation-delay-100">
            <span className="text-gradient-animated">{t('subtitle')}</span>
          </h2>

          {/* Description */}
          <p className="text-xl md:text-2xl text-bpc-navy-600 leading-relaxed mb-12 max-w-2xl animate-fade-in-up animation-delay-200">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up animation-delay-300">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 group">
              <span>{t('cta_primary')}</span>
              <svg className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link href="/aanpak" className="btn-secondary text-lg px-10 py-5">
              {t('cta_secondary')}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in animation-delay-500">
            <p className="text-sm font-medium text-bpc-navy-500 mb-4 uppercase tracking-wider">
              Vertrouwd door organisaties in heel Europa
            </p>
            <div className="flex flex-wrap items-center gap-6">
              {[
                { icon: '🛡️', text: 'EU AI Act ready' },
                { icon: '🇪🇺', text: '100% Europese hosting' },
                { icon: '✓', text: 'AVG-compliant' },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/60 backdrop-blur-sm border border-gray-200/50 shadow-sm hover:shadow-md hover:border-bpc-teal/30 transition-all duration-300"
                >
                  <span className="text-lg">{item.icon}</span>
                  <span className="text-sm font-medium text-bpc-navy-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
