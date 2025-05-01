
export interface AgentData {
  id: string;
  name: string;
  description: string;
  pricingFree: string;
  pricingPremium: string;
  developerName: string;
  developerProfile: string;
  useCases: string[];
  industries: string[];
  category: string;
  ratings: number;
  reviews: Review[];
}

export interface Review {
  id: string;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}
