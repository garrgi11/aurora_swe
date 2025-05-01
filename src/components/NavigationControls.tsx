import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationControlsProps {
  rotationState: number;
  setRotationState: (state: number) => void;
  totalStates: number;
}

const NavigationControls = ({
  rotationState,
  setRotationState,
  totalStates
}: NavigationControlsProps) => {
  const handlePrevious = () => {
    setRotationState(Math.max(0, rotationState - 1));
  };

  const handleNext = () => {
    setRotationState(Math.min(totalStates - 1, rotationState + 1));
  };

  return (
    <div className="flex justify-between items-center w-full max-w-md mx-auto mt-4">
      <Button
        variant="outline"
        size="icon"
        onClick={handlePrevious}
        disabled={rotationState === 0}
        className={`rounded-full border-neon-blue ${
          rotationState > 0 ? "hover:bg-neon-blue/20" : ""
        }`}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <div className="flex space-x-2">
        {[...Array(4)].map((_, i) => (
          <Button
            key={i}
            variant="outline"
            size="icon"
            className={`w-3 h-3 p-0 rounded-full ${
              i === rotationState
                ? "bg-neon-purple border-neon-purple"
                : "bg-transparent border-gray-500"
            }`}
            onClick={() => setRotationState(i)}
          />
        ))}
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={handleNext}
        disabled={rotationState === totalStates - 1}
        className={`rounded-full border-neon-blue ${
          rotationState < totalStates - 1 ? "hover:bg-neon-blue/20" : ""
        }`}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default NavigationControls;
