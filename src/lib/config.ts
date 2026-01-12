/**
 * Site configuration
 * Centralized configuration for URLs and contact info
 */

export const siteConfig = {
  name: 'Best Practice Company',
  url: process.env.NEXT_PUBLIC_BASE_URL || 'https://bestpractice.company',
  
  // Contact information
  // TODO: Update these with actual contact details before going live
  contact: {
    phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || '+31 85 000 0000',
    email: process.env.NEXT_PUBLIC_EMAIL_ADDRESS || 'info@bestpractice.company',
  },
  
  // Social links (add when available)
  social: {
    linkedin: '',
    twitter: '',
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
