'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { LanguageSwitcher } from './LanguageSwitcher';

export function Header() {
  const t = useTranslations('navigation');
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '/', label: t('home') },
    { href: '/diensten', label: t('services') },
    { href: '/aanpak', label: t('approach') },
    { href: '/over-ons', label: t('about') },
    { href: '/contact', label: t('contact') },
  ];

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        scrolled 
          ? 'bg-white/90 backdrop-blur-xl shadow-lg shadow-bpc-navy/5 py-3' 
          : 'bg-transparent py-5'
      )}
    >
      <nav className="container-content">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 focus-ring rounded-lg group">
            <Image
              src="/logo.png"
              alt="Best Practice Company"
              width={200}
              height={50}
              className={cn(
                'h-9 w-auto transition-all duration-300',
                scrolled ? 'h-8' : 'h-9',
                'group-hover:scale-105'
              )}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 focus-ring',
                  pathname === item.href
                    ? 'text-bpc-teal'
                    : 'text-bpc-navy-700 hover:text-bpc-teal'
                )}
              >
                {item.label}
                {pathname === item.href && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-bpc-teal" />
                )}
              </Link>
            ))}
          </div>

          {/* Right side: Language + CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <LanguageSwitcher />
            <Link 
              href="/contact" 
              className={cn(
                'group inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold transition-all duration-300',
                'bg-gradient-to-r from-bpc-teal to-bpc-teal-600 text-white',
                'shadow-lg shadow-bpc-teal/20 hover:shadow-xl hover:shadow-bpc-teal/30',
                'hover:-translate-y-0.5'
              )}
            >
              <span>{t('cta')}</span>
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className={cn(
              'lg:hidden p-2.5 rounded-xl transition-colors focus-ring',
              scrolled ? 'bg-bpc-navy/5 hover:bg-bpc-navy/10' : 'bg-white/50 hover:bg-white/80'
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6 text-bpc-navy-700"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-xl animate-fade-in">
            <div className="container-content py-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      'px-4 py-3 rounded-xl text-base font-medium transition-all duration-300',
                      pathname === item.href
                        ? 'text-bpc-teal bg-bpc-teal/10'
                        : 'text-bpc-navy-700 hover:text-bpc-teal hover:bg-gray-50'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <div className="pt-4 mt-2 border-t border-gray-100 flex items-center justify-between">
                  <LanguageSwitcher />
                  <Link
                    href="/contact"
                    className="btn-primary text-sm"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {t('cta')}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
