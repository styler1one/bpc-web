'use client';

import { useState, FormEvent } from 'react';
import { useTranslations } from 'next-intl';
import { siteConfig, getPhoneHref, getEmailHref } from '@/lib/config';
import { cn } from '@/lib/utils';

/* =============================================================================
   Form State Types
   ============================================================================= */

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

interface FormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  message: string;
}

/* =============================================================================
   Expectation Item Component
   ============================================================================= */

function ExpectationItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-bpc-teal/10 flex items-center justify-center mt-0.5" aria-hidden="true">
        <svg className="w-3 h-3 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="text-bpc-navy-600">{text}</span>
    </li>
  );
}

/* =============================================================================
   Contact Form Component
   ============================================================================= */

function ContactForm() {
  const t = useTranslations('contact_page.form');
  const tCommon = useTranslations('common');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // Simulate form submission
    // In production, this would send to an API endpoint
    try {
      // For now, we'll just simulate a delay and success
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Here you would typically send the data to your backend
      // const response = await fetch('/api/contact', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      
      setStatus('success');
      setFormData({ name: '', email: '', company: '', phone: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  if (status === 'success') {
    return (
      <div className="p-8 rounded-3xl bg-bpc-teal/5 border border-bpc-teal/20 text-center">
        <div className="w-16 h-16 rounded-full bg-bpc-teal/10 flex items-center justify-center mx-auto mb-6" aria-hidden="true">
          <svg className="w-8 h-8 text-bpc-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-display font-bold text-bpc-navy-900 mb-2">
          {t('success_title')}
        </h3>
        <p className="text-bpc-navy-600">
          {t('success_message')}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-bpc-teal font-semibold hover:underline"
        >
          ← {tCommon('send_another_message')}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-display font-bold text-bpc-navy-900 mb-6">
        {t('title')}
      </h2>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700">
          <p className="font-semibold">{t('error_title')}</p>
          <p className="text-sm">{t('error_message')}</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-bpc-navy-700 mb-2">
            {t('name')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder={t('name_placeholder')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bpc-teal focus:ring-2 focus:ring-bpc-teal/20 outline-none transition-all"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-bpc-navy-700 mb-2">
            {t('email')} <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder={t('email_placeholder')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bpc-teal focus:ring-2 focus:ring-bpc-teal/20 outline-none transition-all"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-bpc-navy-700 mb-2">
            {t('company')} <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="company"
            name="company"
            required
            value={formData.company}
            onChange={handleChange}
            placeholder={t('company_placeholder')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bpc-teal focus:ring-2 focus:ring-bpc-teal/20 outline-none transition-all"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-bpc-navy-700 mb-2">
            {t('phone')} <span className="text-bpc-navy-400">{t('phone_optional')}</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder={t('phone_placeholder')}
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bpc-teal focus:ring-2 focus:ring-bpc-teal/20 outline-none transition-all"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-bpc-navy-700 mb-2">
          {t('message')} <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          placeholder={t('message_placeholder')}
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-bpc-teal focus:ring-2 focus:ring-bpc-teal/20 outline-none transition-all resize-none"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className={cn(
          'w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300',
          'bg-gradient-to-r from-bpc-teal to-bpc-teal-600 text-white',
          'shadow-lg shadow-bpc-teal/20 hover:shadow-xl hover:shadow-bpc-teal/30',
          'hover:-translate-y-0.5 focus-ring',
          status === 'submitting' && 'opacity-70 cursor-not-allowed'
        )}
      >
        {status === 'submitting' ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24" aria-hidden="true">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            {t('submitting')}
          </span>
        ) : (
          t('submit')
        )}
      </button>
    </form>
  );
}

/* =============================================================================
   Main Page Content
   ============================================================================= */

export function ContactPageContent() {
  const t = useTranslations('contact_page');
  const tContact = useTranslations('contact');
  const tCommon = useTranslations('common');

  // Expectations
  const expectations = t.raw('expectations.items') as string[];

  return (
    <>
      {/* Hero Section - Dark design consistent with Aanpak/Over Ons */}
      <section className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-br from-bpc-navy-900 via-bpc-navy-800 to-bpc-navy-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-bpc-teal/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-bpc-sky/10 blur-3xl" />
        </div>

        <div className="container-content relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-bpc-teal animate-pulse motion-reduce:animate-none" aria-hidden="true" />
              {t('hero_label')}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-2xl md:text-3xl font-display text-bpc-teal-400 mb-6">
              {t('hero_subtitle')}
            </p>
            <p className="text-xl text-white/80 leading-relaxed">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 lg:py-24" aria-labelledby="contact-form-title">
        <div className="container-content">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form - 3 columns */}
            <div className="lg:col-span-3">
              <div className="p-8 lg:p-10 rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/50">
                <h2 id="contact-form-title" className="sr-only">{tCommon('contact_form')}</h2>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar - 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Direct contact */}
              <div className="p-6 lg:p-8 rounded-3xl bg-gradient-to-br from-bpc-navy-900 to-bpc-navy-800 text-white">
                <h2 className="text-xl font-display font-bold mb-2">
                  {t('direct.title')}
                </h2>
                <p className="text-gray-300 mb-6">
                  {t('direct.prefer_call')}
                </p>

                <div className="space-y-4">
                  {/* Phone */}
                  <a
                    href={getPhoneHref(siteConfig.contact.phone)}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-bpc-teal/20 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-6 h-6 text-bpc-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{tContact('phone_label')}</p>
                      <p className="font-semibold group-hover:text-bpc-teal-400 transition-colors">
                        {siteConfig.contact.phone}
                      </p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={getEmailHref(siteConfig.contact.email)}
                    className="flex items-center gap-4 p-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-bpc-teal/20 flex items-center justify-center" aria-hidden="true">
                      <svg className="w-6 h-6 text-bpc-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">{tContact('email_label')}</p>
                      <p className="font-semibold group-hover:text-bpc-teal-400 transition-colors">
                        {siteConfig.contact.email}
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Expectations */}
              <div className="p-6 lg:p-8 rounded-3xl bg-bpc-teal/5 border border-bpc-teal/10">
                <h2 className="text-xl font-display font-bold text-bpc-navy-900 mb-6">
                  {t('expectations.title')}
                </h2>
                <ul className="space-y-4">
                  {expectations.map((item, i) => (
                    <ExpectationItem key={`expectation-${i}`} text={item} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
