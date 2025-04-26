
import React from 'react';
import { Button } from '@/components/ui/button';
import { Lightbulb } from 'lucide-react';

interface HintButtonProps {
  onToggleHint: () => void;
}

const HintButton: React.FC<HintButtonProps> = ({ onToggleHint }) => {
  return (
    <Button
      variant="ghost"
      className="absolute top-4 left-4 flex items-center gap-1 text-blue-600 hover:text-blue-800"
      onClick={onToggleHint}
    >
      <Lightbulb className="h-4 w-4" />
      Get a hint
    </Button>
  );
};

export default HintButton;
