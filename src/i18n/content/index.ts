import type { TaalContent } from './types';
import { en } from './en';
import { fr } from './fr';
import { ar } from './ar';

/**
 * Contentregister voor de vertaalde talen.
 *
 * Nederlands staat hier bewust niet in: die pagina's zijn losse .astro-bestanden
 * met rijkere, oudere SEO-content die niet in dit model past.
 */
export const content: Record<'en' | 'fr' | 'ar', TaalContent> = { en, fr, ar };

export type VertaalTaal = keyof typeof content;
