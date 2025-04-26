
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, Shuffle } from 'lucide-react';

interface NavigationControlsProps {
  currentIndex: number;
  totalCards: number;
  onPrevious: () => void;
  onNext: () => void;
  onShuffle: () => void;
}

const NavigationControls: React.FC<NavigationControlsProps> = ({
  currentIndex,
  totalCards,
  onPrevious,
  onNext,
  onShuffle,
}) => {
  return (
    <div className="flex items-center justify-between w-full max-w-lg mt-8">
      <Button 
        variant="outline"
        onClick={onPrevious}
        disabled={currentIndex === 0}
        className="border-2 border-gray-300 hover:border-gray-400"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Назад
      </Button>
      
      <div className="text-center">
        <span className="font-medium text-lg font-playfair">
          {currentIndex + 1} / {totalCards}
        </span>
      </div>
      
      <div className="flex gap-2">
        <Button 
          variant="outline"
          onClick={onShuffle}
          className="border-2 border-gray-300 hover:border-gray-400"
        >
          <Shuffle className="h-4 w-4" />
        </Button>
        
        <Button 
          onClick={onNext}
          className="bg-blue-600 hover:bg-blue-700"
        >
          Вперед
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

export default NavigationControls;
