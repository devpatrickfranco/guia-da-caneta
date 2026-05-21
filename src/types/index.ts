export type SectionId =
  | 'hero'
  | 'identification'
  | 'aprender'
  | 'erros'
  | 'recebe'
  | 'prova-social'
  | 'faq'
  | 'garantia'
  | 'cta-final'
  | 'footer';

export interface BenefitItem {
  icon: string;
  title: string;
  description?: string;
}

export interface ChapterItem {
  number: number;
  title: string;
}

export interface ErrorItem {
  title: string;
  description: string;
}

export interface BonusItem {
  title: string;
  description: string;
  highlight?: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  text: string;
  rating: number;
}

export interface FaqItem {
  question: string;
  answer: string;
}
