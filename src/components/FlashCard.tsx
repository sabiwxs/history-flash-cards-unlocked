
import React, { useState } from 'react';
import { FlashCard as FlashCardType } from '../data/flashcards';
import { Lightbulb } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashCardProps {
  card: FlashCardType;
  isShowingAnswer: boolean;
  showHint: boolean;
  onFlip: () => void;
  onToggleHint: () => void;
}

const FlashCard: React.FC<FlashCardProps> = ({
  card,
  isShowingAnswer,
  showHint,
  onFlip,
  onToggleHint,
}) => {
  return (
    <div className="relative w-full max-w-lg h-[400px] perspective-1000 cursor-pointer">
      <div
        className={cn(
          "absolute w-full h-full transition-transform duration-700 transform-style-preserve-3d",
          isShowingAnswer ? "rotate-y-180" : ""
        )}
        onClick={onFlip}
      >
        {/* Front of card */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 backface-hidden">
          <button
            className="absolute top-4 left-4 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            onClick={(e) => {
              e.stopPropagation();
              onToggleHint();
            }}
          >
            <Lightbulb size={16} />
            Get a hint
          </button>

          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">{card.question}</h2>
            
            {showHint && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg text-sm text-gray-700">
                <p>{card.hint}</p>
              </div>
            )}

            <div className="absolute bottom-4 text-center w-full text-sm text-gray-500">
              Нажмите, чтобы увидеть ответ
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="absolute w-full h-full bg-white rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden">
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-medium text-gray-700 mb-4">{card.question}</h3>
            <p className="text-gray-700 text-center">{card.answer}</p>
            
            <div className="absolute bottom-4 text-center w-full text-sm text-gray-500">
              Нажмите, чтобы вернуться к вопросу
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
