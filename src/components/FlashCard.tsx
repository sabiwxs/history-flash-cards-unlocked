
import React from 'react';
import { Lightbulb, Shield, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLanguage } from '@/hooks/useLanguage';

interface FlashCardType {
  id: number;
  question: string;
  answer: string;
  hint: string;
  answered?: boolean;
  correct?: boolean;
}

interface FlashCardProps {
  card: FlashCardType;
  isShowingAnswer: boolean;
  showHint: boolean;
  onFlip: () => void;
  onToggleHint: () => void;
}

const getCardColor = (question: string) => {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('война') || lowerQuestion.includes('битва') || 
      lowerQuestion.includes('war') || lowerQuestion.includes('battle') ||
      lowerQuestion.includes('guerra') || lowerQuestion.includes('batalla')) {
    return 'bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200';
  } else if (lowerQuestion.includes('революция') || lowerQuestion.includes('revolution') || 
             lowerQuestion.includes('revolución')) {
    return 'bg-gradient-to-br from-red-50 to-red-100 border-red-200';
  } else if (lowerQuestion.includes('открытие') || lowerQuestion.includes('изобретение') || 
             lowerQuestion.includes('discovery') || lowerQuestion.includes('invention') ||
             lowerQuestion.includes('descubrimiento') || lowerQuestion.includes('invención')) {
    return 'bg-gradient-to-br from-green-50 to-green-100 border-green-200';
  }
  return 'bg-gradient-to-br from-amber-50 to-amber-100 border-amber-200';
};

const getCardIcon = (question: string) => {
  const lowerQuestion = question.toLowerCase();
  if (lowerQuestion.includes('война') || lowerQuestion.includes('битва') || 
      lowerQuestion.includes('war') || lowerQuestion.includes('battle') ||
      lowerQuestion.includes('guerra') || lowerQuestion.includes('batalla')) {
    return <Shield className="h-6 w-6 text-blue-600" />;
  } else if (lowerQuestion.includes('открытие') || lowerQuestion.includes('изобретение') || 
             lowerQuestion.includes('discovery') || lowerQuestion.includes('invention') ||
             lowerQuestion.includes('descubrimiento') || lowerQuestion.includes('invención')) {
    return <Star className="h-6 w-6 text-green-600" />;
  }
  return null;
};

const FlashCard: React.FC<FlashCardProps> = ({
  card,
  isShowingAnswer,
  showHint,
  onFlip,
  onToggleHint,
}) => {
  const cardColor = getCardColor(card.question);
  const cardIcon = getCardIcon(card.question);
  const { currentLanguage } = useLanguage();
  
  // Текст для кнопки подсказки и переворота в зависимости от языка
  const hintText = {
    'ru': 'Подсказка',
    'en': 'Get a hint',
    'es': 'Obtener pista'
  };
  
  const flipText = {
    'ru': 'Нажмите, чтобы увидеть ответ',
    'en': 'Click to see answer',
    'es': 'Haga clic para ver la respuesta'
  };
  
  const backText = {
    'ru': 'Нажмите, чтобы вернуться к вопросу',
    'en': 'Click to return to question',
    'es': 'Haga clic para volver a la pregunta'
  };

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
        <div className={cn(
          "absolute w-full h-full rounded-xl shadow-lg p-6 backface-hidden border-2",
          cardColor
        )}>
          <button
            className="absolute top-4 left-4 flex items-center gap-1 text-sm text-blue-600 hover:text-blue-800"
            onClick={(e) => {
              e.stopPropagation();
              onToggleHint();
            }}
          >
            <Lightbulb size={16} />
            {hintText[currentLanguage]}
          </button>

          {cardIcon && (
            <div className="absolute top-4 right-4">
              {cardIcon}
            </div>
          )}

          <div className="flex flex-col items-center justify-center h-full">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-4 font-playfair">{card.question}</h2>
            
            {showHint && (
              <div className="mt-4 p-4 bg-white bg-opacity-50 rounded-lg text-sm text-gray-700">
                <p>{card.hint}</p>
              </div>
            )}

            <div className="absolute bottom-4 text-center w-full text-sm text-gray-500">
              {flipText[currentLanguage]}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className={cn(
          "absolute w-full h-full rounded-xl shadow-lg p-6 rotate-y-180 backface-hidden border-2",
          cardColor
        )}>
          <div className="flex flex-col items-center justify-center h-full">
            <h3 className="text-xl font-medium text-gray-700 mb-4 font-playfair">{card.question}</h3>
            <p className="text-gray-700 text-center font-playfair">{card.answer}</p>
            
            <div className="absolute bottom-4 text-center w-full text-sm text-gray-500">
              {backText[currentLanguage]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;
