
import { AgentData } from "../types/agent";

export const agentsData: AgentData[] = [
  {
    id: "1",
    name: "Pionex",
    description: "Advanced crypto trading bot that automates trading strategies across multiple exchanges. Features include grid trading, DCA bots, and arbitrage opportunities with real-time market analysis.",
    pricingFree: "Basic tier: 3 active bots, standard strategies",
    pricingPremium: "$49/month for unlimited bots and advanced trading strategies",
    developerName: "Pionex Technologies",
    developerProfile: "Leading crypto automation platform with over $5B in trading volume monthly",
    category: "Crypto",
    useCases: ["Automated trading", "Portfolio management", "Market analysis"],
    industries: ["Cryptocurrency", "Finance", "Investment"],
    ratings: 4.8,
    reviews: [
      {
        id: "r1",
        userName: "CryptoTrader88",
        rating: 5,
        comment: "Been using Pionex for 6 months and my portfolio is up 32% despite the bear market. The grid bot is fantastic!",
        date: "2024-01-15"
      },
      {
        id: "r2",
        userName: "BlockchainBaron",
        rating: 4,
        comment: "Great for passive income. The interface could be more intuitive for beginners, but the performance is solid.",
        date: "2024-02-22"
      }
    ]
  },
  {
    id: "2",
    name: "Buoy Health",
    description: "AI-powered symptom checker and healthcare assistant that provides personalized health recommendations, connects patients with appropriate care options, and helps navigate insurance coverage.",
    pricingFree: "Symptom assessment and basic health guidance",
    pricingPremium: "$19/month for priority doctor appointments and specialized health insights",
    developerName: "Buoy Health Inc.",
    developerProfile: "Healthcare AI company founded by Harvard Medical School physicians",
    category: "Medical",
    useCases: ["Symptom assessment", "Care navigation", "Health tracking"],
    industries: ["Healthcare", "Telemedicine", "Insurance"],
    ratings: 4.7,
    reviews: [
      {
        id: "r3",
        userName: "HealthConscious",
        rating: 5,
        comment: "Buoy helped me identify a serious condition early. The recommendations were spot-on and potentially life-saving.",
        date: "2024-02-03"
      },
      {
        id: "r4",
        userName: "DocReviewer",
        rating: 4,
        comment: "As a medical professional, I'm impressed with the accuracy. It's a great triage tool for patients before they come in.",
        date: "2024-01-17"
      }
    ]
  },
  {
    id: "3",
    name: "CertiK",
    description: "AI-driven security platform specialized in auditing smart contracts and blockchain protocols. Identifies vulnerabilities, ensures code safety, and provides comprehensive security assessments.",
    pricingFree: "Basic vulnerability scanner for small projects",
    pricingPremium: "$999 for full security audit and continuous monitoring",
    developerName: "CertiK Foundation",
    developerProfile: "Blockchain security leader founded by Yale and Columbia University professors",
    category: "Smart Contract",
    useCases: ["Smart contract audits", "Security analysis", "Vulnerability detection"],
    industries: ["Blockchain", "DeFi", "Web3"],
    ratings: 4.9,
    reviews: [
      {
        id: "r5",
        userName: "DeFiDeveloper",
        rating: 5,
        comment: "CertiK's audit saved our protocol from a critical exploit that could have cost millions. Worth every penny.",
        date: "2024-02-15"
      },
      {
        id: "r6",
        userName: "BlockchainCTO",
        rating: 5,
        comment: "The thoroughness of their analysis is unmatched. We now use CertiK for all our smart contract deployments.",
        date: "2024-01-30"
      }
    ]
  },
  {
    id: "4",
    name: "Grantable",
    description: "AI-powered grant discovery and application assistant that matches organizations with relevant funding opportunities, automates proposal writing, and tracks grant application statuses.",
    pricingFree: "10 grant matches per month, basic templates",
    pricingPremium: "$79/month for unlimited matches and AI-assisted proposal writing",
    developerName: "Grantable AI",
    developerProfile: "Grant technology startup with $50M+ in secured funding for clients",
    category: "Legal",
    useCases: ["Grant discovery", "Proposal writing", "Funding management"],
    industries: ["Nonprofits", "Education", "Research"],
    ratings: 4.6,
    reviews: [
      {
        id: "r7",
        userName: "NonprofitDirector",
        rating: 5,
        comment: "Grantable helped us secure three major grants in our first month. The AI proposal suggestions are remarkably good.",
        date: "2024-02-10"
      },
      {
        id: "r8",
        userName: "ResearchLead",
        rating: 4,
        comment: "Great for finding obscure funding opportunities we would have missed. The application tracking feature is invaluable.",
        date: "2024-01-05"
      }
    ]
  },
  {
    id: "5",
    name: "ElevenLabs",
    description: "State-of-the-art voice cloning and text-to-speech platform that creates natural, emotion-rich voice content from text. Features multiple languages and custom voice creation.",
    pricingFree: "10,000 characters per month, 3 custom voices",
    pricingPremium: "$22/month for 100,000 characters and 30 custom voices",
    developerName: "ElevenLabs Inc.",
    developerProfile: "AI voice technology pioneer with multi-million user base",
    category: "Voice",
    useCases: ["Content creation", "Audiobook production", "Accessibility features"],
    industries: ["Media", "Publishing", "Accessibility"],
    ratings: 4.8,
    reviews: [
      {
        id: "r9",
        userName: "ContentCreator",
        rating: 5,
        comment: "The voice quality is uncanny. I use it for all my YouTube videos now and viewers can't tell it's AI.",
        date: "2024-02-20"
      },
      {
        id: "r10",
        userName: "PodcastProducer",
        rating: 5,
        comment: "Game-changing technology. We've cut our production time in half while maintaining professional quality.",
        date: "2024-01-25"
      }
    ]
  }
];
