"use client";

import { LanguageContextType } from "@/types/language-types";
import React, { createContext, useContext, ReactNode } from "react";

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export const LanguageProvider: React.FC<
  LanguageContextType & { children: ReactNode }
> = ({ lang, dict, children }) => {
  return (
    <LanguageContext.Provider value={{ lang, dict }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
