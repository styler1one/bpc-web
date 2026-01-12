import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';
import { getCurrentYear } from '@/lib/utils';

export function Footer() {
  const t = useTranslations('footer');
  const tNav = useTranslations('navigation');
  const year = getCurrentYear();

  return (
    <footer className="bg-bpc-navy-950 text-white">
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
            <p className="text-gray-400 max-w-md">
              {t('description')}
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('services')}</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/diensten#discovery"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  AI Value Discovery
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten#delivery"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  AI Delivery Sprint
                </Link>
              </li>
              <li>
                <Link
                  href="/diensten#continuity"
                  className="text-gray-400 hover:text-bpc-teal-400 transition-colors"
                >
                  AI Continuity
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">{t('company')}</h3>
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
