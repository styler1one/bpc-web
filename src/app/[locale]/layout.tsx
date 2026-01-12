import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { siteConfig } from '@/lib/config';
import '@/app/globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: Locale };
}) {
  const t = await getTranslations({ locale, namespace: 'metadata' });

  return {
    title: {
      default: t('title'),
      template: `%s | Best Practice Company`,
    },
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'Best Practice Company' }],
    creator: 'Best Practice Company',
    publisher: 'Best Practice Company',
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: '/',
      languages: {
        nl: '/nl',
        en: '/en',
      },
    },
    openGraph: {
      type: 'website',
      locale: locale === 'nl' ? 'nl_NL' : 'en_GB',
      url: siteConfig.url,
      siteName: 'Best Practice Company',
      title: t('title'),
      description: t('description'),
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}

async function StructuredData({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: 'structured_data' });
  const tServices = await getTranslations({ locale, namespace: 'services' });

  const organizationData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Best Practice Company',
    description: t('organization_description'),
    url: siteConfig.url,
    logo: `${siteConfig.url}/logo.png`,
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      telephone: siteConfig.contact.phone,
      email: siteConfig.contact.email,
      availableLanguage: ['Dutch', 'English'],
    },
    areaServed: {
      '@type': 'Place',
      name: 'Europe',
    },
    knowsAbout: [
      'Artificial Intelligence',
      'AI Implementation',
      'Digital Transformation',
      'Enterprise AI',
      'AI Governance',
      'Cloud Modernization',
    ],
    slogan: t('slogan'),
    foundingDate: '2024',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'NL',
    },
  };

  const serviceData = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: t('service_type'),
    provider: {
      '@type': 'Organization',
      name: 'Best Practice Company',
    },
    areaServed: 'Europe',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: locale === 'nl' ? 'AI Diensten' : 'AI Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tServices('discovery.name'),
            description: t('discovery_description'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tServices('delivery.name'),
            description: t('delivery_description'),
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: tServices('continuity.name'),
            description: t('continuity_description'),
          },
        },
      ],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceData),
        }}
      />
    </>
  );
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: Locale };
}) {
  // Validate locale
  if (!locales.includes(locale)) {
    notFound();
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Get messages for the locale
  const messages = await getMessages();

  return (
    <html lang={locale} className={`${inter.variable} ${plusJakarta.variable}`}>
      <head>
        <StructuredData locale={locale} />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <SkipToContent />
          <Header />
          <main id="main-content" className="flex-grow pt-28" tabIndex={-1}>
            {children}
          </main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
