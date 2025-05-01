import { useState, useEffect, useRef } from "react";
import ThreeDScene from "../components/ThreeDScene";
import AgentDetail from "../components/AgentDetail";
import NavigationControls from "../components/NavigationControls";
import Header from "../components/Header";
import { agentsData } from "../data/agents";

const Index = () => {
  const [activeAgentIndex, setActiveAgentIndex] = useState(0);
  const [rotationState, setRotationState] = useState(0);
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Handle scroll to navigate between agents
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const newScrollPosition = window.scrollY;
      const direction = newScrollPosition > scrollPosition ? "down" : "up";
      setScrollPosition(newScrollPosition);
      
      // Use scroll to move between agents
      const scrollThreshold = window.innerHeight;
      const normalizedScroll = Math.floor(newScrollPosition / scrollThreshold);
      
      if (normalizedScroll !== activeAgentIndex && normalizedScroll < agentsData.length) {
        setActiveAgentIndex(normalizedScroll);
        setRotationState(0); // Reset rotation state when changing agents
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollPosition, activeAgentIndex]);
  
  return (
    <div 
      ref={containerRef} 
      className="min-h-screen gradient-background text-foreground font-poppins"
    >
      <Header />
      
      {/* Main content */}
      <div className="pt-24">
        {/* Create scrollable sections for each agent */}
        {agentsData.map((_, index) => (
          <div 
            key={index} 
            className="h-screen flex flex-col items-center justify-center px-4"
            id={`agent-${index}`}
          >
            <div className="w-full max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* 3D Scene Container */}
                <div className="h-[500px] relative">
                  <ThreeDScene 
                    agents={agentsData}
                    activeAgentIndex={activeAgentIndex}
                    setActiveAgentIndex={setActiveAgentIndex}
                    rotationState={rotationState}
                    setRotationState={setRotationState}
                  />
                </div>
                
                {/* Agent Details Container */}
                <div className="flex flex-col justify-center p-2">
                  <AgentDetail 
                    agent={agentsData[index]} 
                    rotationState={rotationState} 
                  />
                </div>
              </div>
              
              {/* Navigation Controls */}
              <NavigationControls 
                rotationState={rotationState} 
                setRotationState={setRotationState} 
                totalStates={4} 
              />
              
              {/* Scroll Indicator */}
              {index < agentsData.length - 1 && (
                <div className="flex justify-center mt-4 animate-bounce">
                  <div className="border-2 border-pastel-lavender rounded-full p-2">
                    <svg className="w-4 h-4 text-pastel-lavender" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
