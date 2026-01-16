'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

function FloatingArrows() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      {/* Large floating arrow shapes inspired by BPC logo */}
      <div className="absolute top-20 right-[10%] w-16 h-24 opacity-20 animate-float motion-reduce:animate-none">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad1)" />
          <defs>
            <linearGradient id="arrowGrad1" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#5fbcd3" />
              <stop offset="1" stopColor="#14b8a6" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      
      <div className="absolute top-40 right-[25%] w-10 h-16 opacity-30 animate-float-slow motion-reduce:animate-none animation-delay-500">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad2)" />
          <defs>
            <linearGradient id="arrowGrad2" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#7dd3e8" />
              <stop offset="1" stopColor="#5fbcd3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="absolute bottom-32 right-[15%] w-8 h-12 opacity-25 animate-float-slower motion-reduce:animate-none animation-delay-300">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="#7dd3e8" />
        </svg>
      </div>

      <div className="absolute top-60 left-[5%] w-12 h-18 opacity-15 animate-float motion-reduce:animate-none animation-delay-700">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full rotate-[-15deg]">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#arrowGrad3)" />
          <defs>
            <linearGradient id="arrowGrad3" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#14b8a6" />
              <stop offset="1" stopColor="#5fbcd3" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Geometric circles - adjusted for dark background */}
      <div className="absolute top-1/3 right-[5%] w-64 h-64 rounded-full border border-bpc-teal/20 animate-spin-slow motion-reduce:animate-none" />
      <div className="absolute top-1/3 right-[5%] w-48 h-48 rounded-full border border-white/10 animate-spin-slow motion-reduce:animate-none" style={{ animationDirection: 'reverse', animationDuration: '30s' }} />
      
      {/* Gradient lines - adjusted for dark background */}
      <div className="absolute top-0 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-bpc-teal/30 to-transparent" />
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-white/10 to-transparent" />
    </div>
  );
}

interface TrustBadge {
  id: string;
  icon: string;
  text: string;
}

export function HeroSection() {
  const t = useTranslations('hero');

  const trustBadges: TrustBadge[] = [
    { id: 'eu-ai-act', icon: '🛡️', text: t('trust_badges.eu_ai_act') },
    { id: 'eu-hosting', icon: '🇪🇺', text: t('trust_badges.eu_hosting') },
    { id: 'gdpr', icon: '✓', text: t('trust_badges.gdpr') },
  ];

  return (
    <section 
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-navy-900"
      aria-labelledby="hero-title"
    >
      {/* Background blur effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-sky/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] rounded-full bg-bpc-teal/5 blur-3xl" />
      </div>

      {/* Floating arrows and geometric elements */}
      <FloatingArrows />

      <div className="container-content relative py-20">
        <div className="max-w-3xl">
          {/* Tagline badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6 animate-fade-in motion-reduce:animate-none">
            <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('tagline')}
          </div>

          {/* Main headline */}
          <h1 
            id="hero-title"
            className="animate-fade-in-up motion-reduce:animate-none"
          >
            <span className="block text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {t('title')}
            </span>
            <span className="block text-xl md:text-2xl lg:text-3xl font-display font-medium text-bpc-teal-400 mb-6">
              {t('subtitle')}
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl text-white/80 leading-relaxed mb-10 max-w-2xl animate-fade-in-up motion-reduce:animate-none animation-delay-200">
            {t('description')}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up motion-reduce:animate-none animation-delay-300">
            <Link href="/contact" className="btn-primary text-lg px-10 py-5 group">
              <span>{t('cta_primary')}</span>
              <svg 
                className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="/diensten" 
              className="inline-flex items-center justify-center px-10 py-5 text-lg font-semibold text-white border-2 border-white/20 rounded-xl hover:bg-white/10 hover:border-white/30 transition-all duration-300"
            >
              {t('cta_secondary')}
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in motion-reduce:animate-none animation-delay-500">
            <p className="text-sm font-medium text-white/50 mb-4 uppercase tracking-wider">
              {t('trust_line')}
            </p>
            <ul className="flex flex-wrap items-center gap-4" role="list">
              {trustBadges.map((badge) => (
                <li 
                  key={badge.id}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300"
                >
                  <span className="text-lg" aria-hidden="true">{badge.icon}</span>
                  <span className="text-sm font-medium text-white/80">{badge.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
