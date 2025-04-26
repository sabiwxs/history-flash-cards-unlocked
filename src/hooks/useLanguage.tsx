
import React, { createContext, useContext, useState } from 'react';

type Language = 'ru' | 'en' | 'es';

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (lang: Language) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [currentLanguage, setCurrentLanguage] = useState<Language>('ru');

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage: setCurrentLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
