import { useState } from "react";
import { AgentData } from "../types/agent";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import PurchaseConfirmationModal from "./PurchaseConfirmationModal";
import { 
  Star, 
  DollarSign, 
  Package, 
  Building, 
  User, 
  ChevronRight,
  Tag
} from "lucide-react";

interface AgentDetailProps {
  agent: AgentData;
  rotationState: number;
}

// Helper function to get color based on category
const getCategoryColor = (category: string) => {
  switch (category.toLowerCase()) {
    case 'crypto':
      return 'bg-pastel-sky text-foreground';
    case 'medical':
      return 'bg-pastel-mint text-foreground';
    case 'smart contract':
      return 'bg-pastel-lavender text-foreground';
    case 'legal':
      return 'bg-pastel-cream text-foreground';
    case 'voice':
      return 'bg-pastel-pink text-foreground';
    default:
      return 'bg-pastel-lavender/50 text-foreground';
  }
};

const AgentDetail = ({ agent, rotationState }: AgentDetailProps) => {
  const [showPurchaseConfirmation, setShowPurchaseConfirmation] = useState(false);

  const handlePurchase = () => {
    setShowPurchaseConfirmation(true);
  };

  // Show different content based on rotation state
  // 1: Description
  // 2: Pricing
  // 3: Use Cases & Industries
  // 4: Reviews
  
  // Different sections based on rotation state
  return (
    <div className="w-full animate-fade-in slide-in">
      {rotationState === 0 && (
        <div className="space-y-4">
          <div className="flex items-center gap-2 mb-2">
            <Badge className={`${getCategoryColor(agent.category)}`}>
              <Tag size={12} className="mr-1" />
              {agent.category}
            </Badge>
          </div>
          <h2 className="text-2xl font-bold font-montserrat glow-text">{agent.name}</h2>
          <p className="text-foreground/80 font-quicksand">{agent.description}</p>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < Math.floor(agent.ratings) ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                />
              ))}
            </div>
            <span className="text-foreground/70">{agent.ratings.toFixed(1)}</span>
          </div>
          <div className="pt-2">
            <Button variant="outline" className="font-quicksand border-pastel-lavender hover:bg-pastel-lavender/20 spring-transition">
              View More <ChevronRight size={16} className="ml-1" />
            </Button>
          </div>
        </div>
      )}
      
      {rotationState === 1 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-montserrat glow-text">Pricing Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card className="p-4 bg-white border-pastel-sky hover:shadow-md spring-transition">
              <h3 className="text-xl font-semibold mb-2 flex items-center font-montserrat">
                <Package size={20} className="mr-2 text-pastel-sky" />
                Free Tier
              </h3>
              <p className="text-foreground/70 mb-4 font-quicksand">{agent.pricingFree}</p>
              <Button variant="outline" className="w-full border-pastel-sky hover:bg-pastel-sky/20 font-quicksand">
                Download Free
              </Button>
            </Card>
            
            <Card className="p-4 bg-gradient-to-br from-white to-pastel-lavender/10 border-pastel-lavender hover:shadow-md spring-transition">
              <h3 className="text-xl font-semibold mb-2 flex items-center font-montserrat">
                <DollarSign size={20} className="mr-2 text-pastel-lavender" />
                Premium
              </h3>
              <p className="text-foreground/70 mb-4 font-quicksand">{agent.pricingPremium}</p>
              <Button 
                className="w-full bg-pastel-lavender hover:bg-pastel-lavender/80 text-white font-quicksand"
                onClick={handlePurchase}
              >
                Purchase Premium
              </Button>
            </Card>
          </div>
        </div>
      )}
      
      {rotationState === 2 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-montserrat glow-text">Use Cases & Industries</h2>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold font-montserrat">Perfect For:</h3>
            <div className="flex flex-wrap gap-2">
              {agent.useCases.map((useCase, index) => (
                <Badge key={index} variant="outline" className="bg-white border-pastel-sky font-quicksand">
                  {useCase}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-lg font-semibold flex items-center font-montserrat">
              <Building size={18} className="mr-2 text-pastel-mint" />
              Best Fit Industries:
            </h3>
            <div className="flex flex-wrap gap-2">
              {agent.industries.map((industry, index) => (
                <Badge key={index} className="bg-pastel-mint/20 text-foreground font-quicksand">
                  {industry}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="pt-2">
            <h3 className="text-lg font-semibold flex items-center font-montserrat">
              <User size={18} className="mr-2 text-pastel-sky" />
              Developer:
            </h3>
            <p className="text-foreground/80 font-quicksand">{agent.developerName}</p>
            <p className="text-sm text-foreground/60 font-quicksand">{agent.developerProfile}</p>
          </div>
        </div>
      )}
      
      {rotationState === 3 && (
        <div className="space-y-4">
          <h2 className="text-2xl font-bold font-montserrat glow-text">User Reviews</h2>
          
          <div className="space-y-4">
            {agent.reviews.map((review) => (
              <Card key={review.id} className="p-4 bg-white border-pastel-lavender/30 hover:shadow-sm spring-transition">
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-semibold font-montserrat">{review.userName}</p>
                    <div className="flex items-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < review.rating ? "fill-amber-400 text-amber-400" : "text-gray-300"}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-foreground/60">{review.date}</span>
                </div>
                <p className="mt-2 text-foreground/80 font-quicksand">{review.comment}</p>
              </Card>
            ))}
          </div>
          
          <Button variant="outline" className="w-full border-pastel-lavender hover:bg-pastel-lavender/20 font-quicksand">
            View All Reviews
          </Button>
        </div>
      )}

      <PurchaseConfirmationModal 
        isOpen={showPurchaseConfirmation}
        onClose={() => setShowPurchaseConfirmation(false)}
      />
    </div>
  );
};

export default AgentDetail;
