"use client";

import React, { createContext, ReactNode } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Locale, Dictionary } from "../types/language-types";

interface LanguageContextType {
  lang: Locale;
  dict: Dictionary;
  switchLanguage: (newLang: Locale) => void;
}

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<{
  lang: Locale;
  dict: Dictionary;
  children: ReactNode;
}> = ({ lang, dict, children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLang: Locale) => {
    const currentPath = pathname;
    const newPath = currentPath.replace(/^\/[^\/]+/, `/${newLang}`);
    router.push(newPath);
  };

  return (
    <LanguageContext.Provider value={{ lang, dict, switchLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
