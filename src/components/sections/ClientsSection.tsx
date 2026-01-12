'use client';

import { useTranslations } from 'next-intl';
import { cn } from '@/lib/utils';

interface ClientLogo {
  name: string;
  logo: string;
  width: number;
  height: number;
}

// Client logos - vervang door echte logo's wanneer beschikbaar
const clientLogos: ClientLogo[] = [
  { name: 'CZ', logo: '/clients/cz.svg', width: 120, height: 48 },
  { name: 'Action', logo: '/clients/action.svg', width: 140, height: 48 },
  { name: 'ABN AMRO', logo: '/clients/abn-amro.svg', width: 140, height: 48 },
];

export function ClientsSection() {
  const t = useTranslations('clients');
  
  const quotes = t.raw('quotes') as Array<{
    text: string;
    author: string;
    company: string;
    result: string;
  }>;

  return (
    <section 
      className="section bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden"
      aria-labelledby="clients-title"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-bpc-teal/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-bpc-navy/5 blur-3xl" />
      </div>

      <div className="container-content relative">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-bpc-navy/5 text-bpc-navy-700 text-sm font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-bpc-navy animate-pulse motion-reduce:animate-none" aria-hidden="true" />
            {t('section_label')}
          </div>
          <h2 
            id="clients-title"
            className="text-4xl md:text-5xl font-display font-bold text-bpc-navy-900 mb-4"
          >
            {t('title')}
          </h2>
          <p className="text-xl text-bpc-navy-600">
            {t('subtitle')}
          </p>
        </div>

        {/* Client logos */}
        <div className="mb-16">
          <p className="text-sm font-medium text-bpc-navy-500 text-center mb-8 uppercase tracking-wider">
            {t('clients_label')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 lg:gap-16">
            {clientLogos.map((client) => (
              <div 
                key={client.name}
                className="group relative grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-500"
              >
                {/* Placeholder voor logo - vervang door echte Image component wanneer logo's beschikbaar zijn */}
                <div 
                  className="flex items-center justify-center h-12 px-6 text-2xl font-bold text-bpc-navy-400 group-hover:text-bpc-navy-700 transition-colors"
                  style={{ minWidth: client.width }}
                >
                  {client.name}
                </div>
              </div>
            ))}
          </div>
          <p className="text-sm text-bpc-navy-400 text-center mt-8 italic">
            {t('confidential_note')}
          </p>
        </div>

        {/* Quotes */}
        <div className="mb-8">
          <p className="text-sm font-medium text-bpc-navy-500 text-center mb-8 uppercase tracking-wider">
            {t('quote_label')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {quotes.map((quote, index) => (
              <figure
                key={`quote-${index}`}
                className={cn(
                  'group relative p-8 rounded-3xl bg-white border-2 border-gray-100',
                  'hover:shadow-2xl hover:-translate-y-1 transition-all duration-500',
                  'hover:border-bpc-teal/20'
                )}
              >
                {/* Quote icon */}
                <div 
                  className="absolute -top-4 left-8 w-8 h-8 rounded-full bg-bpc-teal flex items-center justify-center"
                  aria-hidden="true"
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Quote text */}
                <blockquote className="text-lg text-bpc-navy-700 leading-relaxed mb-6 pt-4">
                  &ldquo;{quote.text}&rdquo;
                </blockquote>

                {/* Result badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-bpc-teal/10 text-bpc-teal-700 text-sm font-medium mb-4">
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                  {quote.result}
                </div>

                {/* Attribution */}
                <figcaption className="flex items-center gap-3">
                  <div 
                    className="w-10 h-10 rounded-full bg-gradient-to-br from-bpc-navy/10 to-bpc-teal/10 flex items-center justify-center"
                    aria-hidden="true"
                  >
                    <svg className="w-5 h-5 text-bpc-navy-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-bpc-navy-800">{quote.author}</div>
                    <div className="text-sm text-bpc-navy-500">{quote.company}</div>
                  </div>
                </figcaption>

                {/* Corner decoration */}
                <div 
                  className="absolute -bottom-1 -right-1 w-20 h-20 rounded-br-3xl bg-gradient-to-br from-bpc-teal/5 to-bpc-navy/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  aria-hidden="true"
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
