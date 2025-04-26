
import { useState, useCallback } from 'react';
import { FlashCard, flashcards as initialFlashcards } from '../data/flashcards';
import { useLanguage } from './useLanguage';

export const useFlashcards = () => {
  const { currentLanguage } = useLanguage();
  const [flashcards, setFlashcards] = useState<FlashCard[]>([...initialFlashcards]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isShowingAnswer, setIsShowingAnswer] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);

  const totalCards = flashcards.length;

  const goToNextCard = useCallback(() => {
    setIsShowingAnswer(false);
    setShowHint(false);
    
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Completed all cards
      setCompleted(true);
    }
  }, [currentIndex, totalCards]);

  const goToPrevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsShowingAnswer(false);
      setShowHint(false);
    }
  }, [currentIndex]);

  const flipCard = useCallback(() => {
    setIsShowingAnswer(!isShowingAnswer);
    
    // Mark as answered when first flipped to answer
    if (!isShowingAnswer && !flashcards[currentIndex].answered) {
      const updatedCards = [...flashcards];
      updatedCards[currentIndex] = {
        ...updatedCards[currentIndex],
        answered: true
      };
      setFlashcards(updatedCards);
    }
  }, [isShowingAnswer, flashcards, currentIndex]);

  const toggleHint = useCallback(() => {
    setShowHint(!showHint);
  }, [showHint]);

  const markAsCorrect = useCallback(() => {
    const updatedCards = [...flashcards];
    if (!updatedCards[currentIndex].correct) {
      updatedCards[currentIndex] = {
        ...updatedCards[currentIndex],
        correct: true,
      };
      setFlashcards(updatedCards);
      setCorrectAnswers(prev => prev + 1);
    }
    goToNextCard();
  }, [flashcards, currentIndex, goToNextCard]);

  const markAsIncorrect = useCallback(() => {
    const updatedCards = [...flashcards];
    updatedCards[currentIndex] = {
      ...updatedCards[currentIndex],
      correct: false,
    };
    setFlashcards(updatedCards);
    goToNextCard();
  }, [flashcards, currentIndex, goToNextCard]);

  const shuffleCards = useCallback(() => {
    const shuffled = [...flashcards];
    // Fisher-Yates shuffle algorithm
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsShowingAnswer(false);
    setShowHint(false);
    setCompleted(false);
  }, [flashcards]);

  const resetCards = useCallback(() => {
    setFlashcards([...initialFlashcards]);
    setCurrentIndex(0);
    setIsShowingAnswer(false);
    setShowHint(false);
    setCompleted(false);
    setCorrectAnswers(0);
  }, []);

  const getScore = useCallback(() => {
    const answeredCards = flashcards.filter(card => card.answered).length;
    if (answeredCards === 0) return 0;
    const percentage = Math.round((correctAnswers / totalCards) * 100);
    return percentage;
  }, [flashcards, correctAnswers, totalCards]);

  // Конвертация объектов карточки с учетом текущего языка
  const getCurrentCard = useCallback(() => {
    const card = flashcards[currentIndex];
    if (!card) return null;

    return {
      ...card,
      question: card.question[currentLanguage],
      answer: card.answer[currentLanguage],
      hint: card.hint[currentLanguage]
    };
  }, [flashcards, currentIndex, currentLanguage]);

  return {
    currentCard: getCurrentCard(),
    currentIndex,
    totalCards,
    isShowingAnswer,
    showHint,
    completed,
    flipCard,
    goToNextCard,
    goToPrevCard,
    toggleHint,
    markAsCorrect,
    markAsIncorrect,
    shuffleCards,
    resetCards,
    getScore,
  };
};
