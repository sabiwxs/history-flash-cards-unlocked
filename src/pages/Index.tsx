
import React from 'react';
import FlashCardDeck from '@/components/FlashCardDeck';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
            История Мира
          </h1>
          <p className="text-gray-600">
            Изучайте ключевые исторические события с помощью интерактивных карточек
          </p>
        </header>

        <FlashCardDeck />
      </div>
    </div>
  );
};

export default Index;
