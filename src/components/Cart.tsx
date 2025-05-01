import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShoppingCart, X } from "lucide-react";
import PurchaseConfirmationModal from "./PurchaseConfirmationModal";

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart = ({ isOpen, onClose }: CartProps) => {
  const [showPurchaseConfirmation, setShowPurchaseConfirmation] = useState(false);

  // Dummy cart data
  const cartItems = [
    {
      id: 1,
      name: "Pionex Trading Bot",
      price: 49.99,
      description: "Advanced crypto trading automation"
    },
    {
      id: 2,
      name: "Buoy Health Assistant",
      price: 19.99,
      description: "AI-powered health recommendations"
    }
  ];

  const handleCheckout = () => {
    setShowPurchaseConfirmation(true);
    // Close the cart sheet after a short delay
    setTimeout(() => {
      onClose();
    }, 500);
  };

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Sheet open={isOpen} onOpenChange={onClose}>
        <SheetContent className="bg-white">
          <SheetHeader>
            <div className="flex items-center justify-between">
              <SheetTitle className="font-montserrat flex items-center">
                <ShoppingCart className="mr-2 h-5 w-5" />
                Your Cart
              </SheetTitle>
              <Button
                variant="ghost"
                size="icon"
                className="hover:bg-pastel-lavender/10"
                onClick={onClose}
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </SheetHeader>

          <div className="mt-8 space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-start border-b border-pastel-lavender/20 pb-4"
              >
                <div>
                  <h3 className="font-semibold font-montserrat">{item.name}</h3>
                  <p className="text-sm text-foreground/70 font-quicksand">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="font-semibold">${item.price}</span>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-red-500 hover:text-red-600 hover:bg-red-50"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-pastel-lavender/20">
            <div className="flex justify-between items-center mb-4">
              <span className="font-semibold font-montserrat">Total</span>
              <span className="font-bold text-lg">${total.toFixed(2)}</span>
            </div>
            <Button
              className="w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand"
              onClick={handleCheckout}
            >
              Checkout
            </Button>
          </div>
        </SheetContent>
      </Sheet>

      <PurchaseConfirmationModal
        isOpen={showPurchaseConfirmation}
        onClose={() => setShowPurchaseConfirmation(false)}
      />
    </>
  );
};

export default Cart; 