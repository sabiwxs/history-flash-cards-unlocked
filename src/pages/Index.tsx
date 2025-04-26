
import React from 'react';
import FlashCardDeck from '@/components/FlashCardDeck';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#FDE1D3] bg-opacity-30 py-12 px-4 font-playfair">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4 font-playfair">
            История Мира
          </h1>
          <p className="text-xl text-gray-600">
            Изучайте ключевые исторические события с помощью интерактивных карточек
          </p>
        </header>

        <FlashCardDeck />
      </div>
    </div>
  );
};

export default Index;
