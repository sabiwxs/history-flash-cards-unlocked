
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface ResultModalProps {
  score: number;
  isOpen: boolean;
  onReset: () => void;
  onClose: () => void;
}

const ResultModal: React.FC<ResultModalProps> = ({
  score,
  isOpen,
  onReset,
  onClose,
}) => {
  const message = score >= 70 ? "Отличная работа!" : "Попробуй еще раз!";

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Результаты</DialogTitle>
          <DialogDescription>
            Вы прошли все карточки!
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center py-6">
          <div className="text-6xl font-bold mb-4">{score}%</div>
          <p className="text-xl font-semibold text-center">{message}</p>
        </div>
        <DialogFooter className="flex justify-between sm:justify-between">
          <Button
            type="button"
            variant="outline"
            onClick={onClose}
          >
            Закрыть
          </Button>
          <Button
            type="button"
            onClick={onReset}
          >
            Начать заново
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ResultModal;
