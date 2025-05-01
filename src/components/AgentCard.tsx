interface AgentCardProps {
  agent: {
    name: string;
    description: string;
    image: string;
    price: number;
  };
  index: number;
}

const AgentCard = ({ agent, index }: AgentCardProps) => {
  return (
    <div 
      id={`agent-${index}`}
      className="bg-white rounded-lg shadow-md overflow-hidden border border-pastel-lavender/20 transition-all duration-300 hover:shadow-lg hover:border-pastel-lavender/40"
    >
      // ... rest of the existing code ...
    </div>
  );
};

export default AgentCard; 