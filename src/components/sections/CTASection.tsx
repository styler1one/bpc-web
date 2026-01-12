'use client';

import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { siteConfig, getPhoneHref, getEmailHref } from '@/lib/config';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section 
      className="section relative overflow-hidden"
      aria-labelledby="cta-title"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bpc-teal-50 via-white to-bpc-navy-50" aria-hidden="true" />
      
      {/* Floating orbs */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-bpc-teal/10 blur-[100px] animate-pulse-soft motion-reduce:animate-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-bpc-navy/10 blur-[80px] animate-pulse-soft motion-reduce:animate-none animation-delay-500" aria-hidden="true" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden="true" />
      
      {/* Decorative arrows */}
      <div className="absolute top-20 right-[15%] w-12 h-18 opacity-10 animate-float motion-reduce:animate-none" aria-hidden="true">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="url(#ctaArrow1)" />
          <defs>
            <linearGradient id="ctaArrow1" x1="20" y1="0" x2="20" y2="60" gradientUnits="userSpaceOnUse">
              <stop stopColor="#2d9cca" />
              <stop offset="1" stopColor="#1a3a5c" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="absolute bottom-32 left-[10%] w-8 h-12 opacity-10 animate-float-slow motion-reduce:animate-none" aria-hidden="true">
        <svg viewBox="0 0 40 60" fill="none" className="w-full h-full rotate-[-10deg]">
          <path d="M20 0L40 45L20 35L0 45L20 0Z" fill="#5fbcd3" />
        </svg>
      </div>

      <div className="container-content relative">
        <div className="max-w-4xl mx-auto">
          {/* Main card */}
          <div className="relative p-10 md:p-16 rounded-[2.5rem] bg-white/70 backdrop-blur-xl border border-white/50 shadow-2xl shadow-bpc-teal/10">
            {/* Inner glow */}
            <div className="absolute inset-0 rounded-[2.5rem] bg-gradient-to-br from-bpc-teal/5 via-transparent to-bpc-navy/5" aria-hidden="true" />
            
            <div className="relative text-center">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-semibold mb-6">
                <span className="relative flex h-2 w-2" aria-hidden="true">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-bpc-teal opacity-75 motion-reduce:animate-none"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-bpc-teal"></span>
                </span>
                {t('section_label')}
              </div>

              {/* Headline */}
              <h2 
                id="cta-title"
                className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-bpc-navy-900 mb-6"
              >
                {t('title')}
              </h2>
              
              {/* Description */}
              <p className="text-xl text-bpc-navy-600 mb-4 max-w-2xl mx-auto">
                {t('description')}
              </p>

              {/* Note - builds trust */}
              <p className="text-bpc-navy-500 mb-10 max-w-xl mx-auto italic">
                {t('note')}
              </p>

              {/* CTA Button */}
              <Link 
                href="/contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-bpc-teal to-bpc-teal-600 text-white text-xl font-semibold px-10 py-5 rounded-2xl shadow-xl shadow-bpc-teal/30 hover:shadow-2xl hover:shadow-bpc-teal/40 hover:-translate-y-1 transition-all duration-300 focus-ring"
              >
                <span>{t('button')}</span>
                <span 
                  className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors"
                  aria-hidden="true"
                >
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>

              {/* Divider */}
              <div className="flex items-center gap-4 my-10" aria-hidden="true">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-bpc-navy/10 to-transparent" />
                <span className="text-bpc-navy-400 text-sm">{t('or')}</span>
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-bpc-navy/10 to-transparent" />
              </div>

              {/* Contact alternatives */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                <a 
                  href={getPhoneHref(siteConfig.contact.phone)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-bpc-navy/5 hover:bg-bpc-navy/10 transition-colors focus-ring"
                >
                  <div 
                    className="w-10 h-10 rounded-lg bg-bpc-navy/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 text-bpc-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-bpc-navy-500">{t('phone')}</div>
                    <div className="font-semibold text-bpc-navy-800">{siteConfig.contact.phone}</div>
                  </div>
                </a>
                
                <a 
                  href={getEmailHref(siteConfig.contact.email)}
                  className="group flex items-center gap-3 px-6 py-3 rounded-xl bg-bpc-teal/5 hover:bg-bpc-teal/10 transition-colors focus-ring"
                >
                  <div 
                    className="w-10 h-10 rounded-lg bg-bpc-teal/10 flex items-center justify-center group-hover:scale-110 transition-transform"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-bpc-navy-500">{t('email')}</div>
                    <div className="font-semibold text-bpc-teal-700">{siteConfig.contact.email}</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
