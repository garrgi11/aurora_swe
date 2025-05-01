import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CheckCircle } from "lucide-react";

interface PurchaseConfirmationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PurchaseConfirmationModal = ({ isOpen, onClose }: PurchaseConfirmationModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 mb-4">
            <CheckCircle className="h-8 w-8 text-green-600" />
          </div>
          <DialogTitle className="text-center text-xl font-semibold text-gray-900">
            Payment Successful!
          </DialogTitle>
          <DialogDescription className="text-center mt-2">
            <p className="text-gray-600">
              Congratulations! Your payment has been processed successfully.
            </p>
            <p className="text-gray-600 mt-2">
              Your API keys will be delivered to your registered email address shortly.
            </p>
            <p className="text-sm text-gray-500 mt-4">
              Please check your inbox and spam folder.
            </p>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default PurchaseConfirmationModal; 