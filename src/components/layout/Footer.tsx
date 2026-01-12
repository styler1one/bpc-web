'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getCurrentYear } from '@/lib/utils';
import { siteConfig, getPhoneHref, getEmailHref } from '@/lib/config';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const tServices = useTranslations('services');
  const year = getCurrentYear();

  const services = [
    { name: tServices('discovery.name'), href: '/diensten#discovery' },
    { name: tServices('delivery.name'), href: '/diensten#delivery' },
    { name: tServices('continuity.name'), href: '/diensten#continuity' },
  ];

  return (
    <footer className="bg-bpc-navy-950 text-white" role="contentinfo">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo.png"
              alt="Best Practice Company"
              width={180}
              height={45}
              className="h-10 w-auto brightness-0 invert mb-4"
            />
            <p className="text-bpc-teal-400 font-medium text-lg mb-2">
              {t('tagline')}
            </p>
            <p className="text-gray-400 max-w-md mb-6">
              {t('description')}
            </p>
            
            {/* Contact info */}
            <div className="space-y-2">
              <a 
                href={getPhoneHref(siteConfig.contact.phone)}
                className="flex items-center gap-2 text-gray-400 hover:text-bpc-teal-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.contact.phone}</span>
              </a>
              <a 
                href={getEmailHref(siteConfig.contact.email)}
                className="flex items-center gap-2 text-gray-400 hover:text-bpc-teal-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.contact.email}</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('services_title')}</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('company_title')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/over-ons"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  {t('about')}
                </Link>
              </li>
              <li>
                <Link
                  href="/aanpak"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  {tNav('approach')}
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            {t('copyright', { year })}
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
            >
              {t('privacy')}
            </Link>
            <Link
              href="/voorwaarden"
              className="text-gray-500 hover:text-gray-400 text-sm transition-colors"
            >
              {t('terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
