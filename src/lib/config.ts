/**
 * Site configuration
 * Centralized configuration for URLs and contact info
 */

export const siteConfig = {
  name: 'Best Practice Company',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.bestpracticecompany.nl',
  
  // Contact information
  // TODO: Update phone number with actual number before going live
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+31 85 000 0000',
    email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@bestpracticecompany.nl',
  },

  // Address
  address: {
    street: 'Baron de Coubertinlaan 6',
    postalCode: '2719 EL',
    city: 'Zoetermeer',
    country: 'Nederland',
  },
  
  // Social links
  social: {
    linkedin: 'https://www.linkedin.com/company/best-practice-consulting-bv/',
  },

  // Booking
  booking: {
    url: 'https://outlook.office.com/bookwithme/user/e24fb78dcb5249b0ad5bdb243afdf606@bestpractice.consulting/meetingtype/RSrsgKRz4Euy0892PXPZ5A2?anonymous&ep=mlink',
  },
} as const;

/**
 * Format phone number for tel: links
 * Removes spaces and special characters
 */
export function getPhoneHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

/**
 * Format email for mailto: links
 */
export function getEmailHref(email: string): string {
  return `mailto:${email}`;
}
