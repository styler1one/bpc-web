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

  const tServicesPage = useTranslations('services_page');
  
  const aiServices = [
    { name: tServices('discovery.name'), href: '/diensten#discovery' },
    { name: tServices('delivery.name'), href: '/diensten#delivery' },
    { name: tServices('continuity.name'), href: '/diensten#continuity' },
  ];

  const otherServices = [
    { name: tServicesPage('transformation.consulting.name'), href: '/diensten/consulting' },
    { name: tServicesPage('transformation.creations.name'), href: '/diensten/creations' },
    { name: tServicesPage('transformation.contracting.name'), href: '/diensten/contracting' },
  ];

  return (
    <footer className="bg-bpc-navy-950 text-white" role="contentinfo">
      <div className="container-content py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Image
              src="/logo-dark.png"
              alt="Best Practice Company"
              width={220}
              height={55}
              className="h-14 w-auto mb-4"
            />
            <p className="text-bpc-teal-400 font-medium text-lg mb-2">
              {t('tagline')}
            </p>
            <p className="text-gray-400 max-w-md mb-6">
              {t('description')}
            </p>
            
            {/* Contact info */}
            <div className="space-y-3">
              {/* Address */}
              <div className="flex items-start gap-2 text-gray-400">
                <svg className="w-4 h-4 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <address className="not-italic text-sm">
                  {siteConfig.address.street}<br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}<br />
                  {siteConfig.address.country}
                </address>
              </div>
              
              {/* Phone */}
              <a 
                href={getPhoneHref(siteConfig.contact.phone)}
                className="flex items-center gap-2 text-gray-400 hover:text-bpc-teal-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{siteConfig.contact.phone}</span>
              </a>
              
              {/* Email */}
              <a 
                href={getEmailHref(siteConfig.contact.email)}
                className="flex items-center gap-2 text-gray-400 hover:text-bpc-teal-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{siteConfig.contact.email}</span>
              </a>

              {/* LinkedIn */}
              <a 
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-gray-400 hover:text-bpc-teal-400 transition-colors mt-2"
                aria-label="Volg ons op LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('services_title')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/diensten"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors text-sm font-medium"
                >
                  {tNav('services')}
                </Link>
              </li>
              {aiServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-bpc-teal-400 transition-colors text-sm"
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="my-3 border-t border-gray-800" />
            <ul className="space-y-2">
              {otherServices.map((service) => (
                <li key={service.href}>
                  <Link
                    href={service.href}
                    className="text-gray-400 hover:text-bpc-teal-400 transition-colors text-sm"
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
                  href="/werken-bij"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  {t('careers')}
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
