import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

export function CTASection() {
  const t = useTranslations('cta');

  return (
    <section className="section bg-bpc-gradient-light">
      <div className="container-content">
        <div className="max-w-3xl mx-auto text-center">
          {/* Headline */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-bpc-navy-900 mb-4">
            {t('title')}
          </h2>
          
          {/* Description */}
          <p className="text-lg text-bpc-navy-700 mb-8">
            {t('description')}
          </p>

          {/* CTA Button */}
          <Link href="/contact" className="btn-primary text-lg px-10 py-4">
            {t('button')}
          </Link>

          {/* Contact alternatives */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-bpc-navy-600">
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{t('phone')}: <a href="tel:+31850000000" className="font-medium text-bpc-navy-800 hover:text-bpc-teal">+31 85 000 0000</a></span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-5 h-5 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{t('email')}: <a href="mailto:info@bestpractice.company" className="font-medium text-bpc-navy-800 hover:text-bpc-teal">info@bestpractice.company</a></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
