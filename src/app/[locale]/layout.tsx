import { Inter, Plus_Jakarta_Sans } from 'next/font/google';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale } from 'next-intl/server';
import { locales, type Locale } from '@/i18n/config';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
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
  const messages = await getMessages({ locale });
  const metadata = messages.metadata as Record<string, string>;

  return {
    title: {
      default: metadata.title,
      template: `%s | Best Practice Company`,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    authors: [{ name: 'Best Practice Company' }],
    creator: 'Best Practice Company',
    publisher: 'Best Practice Company',
    metadataBase: new URL('https://bestpractice.company'),
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
      url: 'https://bestpractice.company',
      siteName: 'Best Practice Company',
      title: metadata.title,
      description: metadata.description,
      images: [
        {
          url: '/og-image.png',
          width: 1200,
          height: 630,
          alt: 'Best Practice Company - AI die werkt',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: metadata.title,
      description: metadata.description,
      images: ['/og-image.png'],
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
        {/* Structured Data for SEO and AI/LLM */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Best Practice Company',
              description:
                'Best Practice Company helpt organisaties transformatie realiseren door AI van idee naar productie te brengen.',
              url: 'https://bestpractice.company',
              logo: 'https://bestpractice.company/logo.png',
              sameAs: [],
              contactPoint: {
                '@type': 'ContactPoint',
                contactType: 'sales',
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
              slogan: 'AI die werkt.',
              foundingDate: '2024',
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'NL',
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Service',
              serviceType: 'AI Consulting',
              provider: {
                '@type': 'Organization',
                name: 'Best Practice Company',
              },
              areaServed: 'Europe',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'AI Services',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI Value Discovery',
                      description:
                        'Identificeer waar AI de meeste waarde kan toevoegen in jouw organisatie. 2-4 weken.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI Delivery Sprint',
                      description:
                        'Van besluit naar werkende AI-oplossing in productie. 4-8 weken.',
                    },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: {
                      '@type': 'Service',
                      name: 'AI Continuity',
                      description:
                        'Beheer, monitoring en doorontwikkeling van AI-oplossingen.',
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col font-sans">
        <NextIntlClientProvider messages={messages}>
          <Header />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
