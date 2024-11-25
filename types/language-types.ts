export type Locale = "en" | "ku";

export interface Dictionary {
  hero: {
    title: string;
    description: string;
    ctaButton: string;
  };
  features: {
    mainTitle: string;
    mainDescription: string;
    cards: Array<{
      title: string;
      description: string;
    }>;
  };
  techStack: {
    title: string;
    description: string;
  };
  navbar: Array<{
    title: string;
    description: string;
    href: string;
  }>;
}

export interface LanguageContextType {
  lang: Locale;
  dict: Dictionary;
}
