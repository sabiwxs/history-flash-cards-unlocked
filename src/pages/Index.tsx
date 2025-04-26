
import React from 'react';
import FlashCardDeck from '@/components/FlashCardDeck';
import { LanguageSelector } from '@/components/LanguageSelector';
import { useLanguage } from '@/hooks/useLanguage';

const titleTranslations = {
  ru: {
    title: "История Мира",
    subtitle: "Изучайте ключевые исторические события с помощью интерактивных карточек"
  },
  en: {
    title: "World History",
    subtitle: "Learn key historical events with interactive flashcards"
  },
  es: {
    title: "Historia Mundial",
    subtitle: "Aprende eventos históricos clave con tarjetas interactivas"
  }
};

const Index = () => {
  const { currentLanguage } = useLanguage();
  const texts = titleTranslations[currentLanguage];

  return (
    <div className="min-h-screen bg-[#FDE1D3] bg-opacity-30 py-12 px-4 font-playfair">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-8">
          <LanguageSelector />
        </div>
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-playfair">
            {texts.title}
          </h1>
          <p className="text-xl text-gray-600">
            {texts.subtitle}
          </p>
        </header>

        <FlashCardDeck />
      </div>
    </div>
  );
};

export default Index;
