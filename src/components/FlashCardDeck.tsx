
import React, { useState } from 'react';
import FlashCard from './FlashCard';
import NavigationControls from './NavigationControls';
import ResultModal from './ResultModal';
import { useFlashcards } from '@/hooks/useFlashcards';

const FlashCardDeck: React.FC = () => {
  const {
    currentCard,
    currentIndex,
    totalCards,
    isShowingAnswer,
    showHint,
    completed,
    flipCard,
    goToNextCard,
    goToPrevCard,
    toggleHint,
    shuffleCards,
    resetCards,
    getScore,
  } = useFlashcards();

  const [showResults, setShowResults] = useState(false);

  // Show results when all cards are completed
  React.useEffect(() => {
    if (completed) {
      setShowResults(true);
    }
  }, [completed]);

  const handleCloseResults = () => {
    setShowResults(false);
  };

  const handleResetCards = () => {
    resetCards();
    setShowResults(false);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-lg mx-auto">
      {currentCard && (
        <FlashCard
          card={currentCard}
          isShowingAnswer={isShowingAnswer}
          showHint={showHint}
          onFlip={flipCard}
          onToggleHint={toggleHint}
        />
      )}
      
      <NavigationControls
        currentIndex={currentIndex}
        totalCards={totalCards}
        onPrevious={goToPrevCard}
        onNext={goToNextCard}
        onShuffle={shuffleCards}
      />
      
      <ResultModal
        score={getScore()}
        isOpen={showResults}
        onReset={handleResetCards}
        onClose={handleCloseResults}
      />
    </div>
  );
};

export default FlashCardDeck;
