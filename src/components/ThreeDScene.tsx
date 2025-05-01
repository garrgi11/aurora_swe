import { Canvas } from "@react-three/fiber";
import { useRef, useState, useEffect } from "react";
import { Suspense } from "react";
import { OrbitControls, PerspectiveCamera, Environment, Text } from "@react-three/drei";
import AgentCan from "../models/AgentCan";
import { AgentData } from "../types/agent";

interface ThreeDSceneProps {
  agents: AgentData[];
  activeAgentIndex: number;
  setActiveAgentIndex: React.Dispatch<React.SetStateAction<number>>;
  rotationState: number;
  setRotationState: React.Dispatch<React.SetStateAction<number>>;
}

const ThreeDScene = ({
  agents,
  activeAgentIndex,
  setActiveAgentIndex,
  rotationState,
  setRotationState
}: ThreeDSceneProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  const handleCanClick = (index: number) => {
    if (index === activeAgentIndex) {
      // If clicking the active agent, cycle through rotation states
      setRotationState((prev) => (prev + 1) % 4);
    } else {
      // If clicking a new agent, make it active and reset rotation
      setActiveAgentIndex(index);
      setRotationState(0);
    }
  };
  
  return (
    <div className="h-full w-full">
      <Canvas 
        ref={canvasRef} 
        shadows 
        dpr={[1, 2]}
        className="bg-gradient-to-b from-pastel-lavender/20 to-pastel-sky/20 rounded-xl"
      >
        <fog attach="fog" args={["#F1EBFD", 5, 15]} />
        <ambientLight intensity={0.7} />
        <directionalLight
          castShadow
          position={[2, 2, 2]}
          intensity={1.5}
          shadow-mapSize-width={1024}
          shadow-mapSize-height={1024}
        />
        <pointLight position={[-1, 1, -1]} intensity={0.8} color="#B794F4" />
        <pointLight position={[1, 1, -1]} intensity={0.8} color="#76E4F7" />
        
        <PerspectiveCamera makeDefault position={[0, 1, 5]} fov={50} />
        <OrbitControls 
          enableZoom={true} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 2}
          minDistance={3}
          maxDistance={8}
        />
        
        <Suspense fallback={null}>
          {/* Display our agent cans */}
          {agents.map((agent, index) => {
            // Calculate position based on index and active state
            let position: [number, number, number];
            
            if (index === activeAgentIndex) {
              position = [0, 0, 0]; // Active agent in center
            } else if (index < activeAgentIndex) {
              // Position to the left and back in a subtle arc
              const offset = activeAgentIndex - index;
              position = [-1.5 * offset, -0.5 * offset, -1 * offset];
            } else {
              // Position to the right and back in a subtle arc
              const offset = index - activeAgentIndex;
              position = [1.5 * offset, -0.5 * offset, -1 * offset];
            }
            
            return (
              <AgentCan
                key={agent.id}
                position={position}
                agent={agent}
                isActive={index === activeAgentIndex}
                onClick={() => handleCanClick(index)}
                rotationState={index === activeAgentIndex ? rotationState : 0}
              />
            );
          })}
          
          {/* Add 3D text for the active agent name */}
          <Text
            position={[0, -1.5, 0]}
            fontSize={0.3}
            color="#444"
            anchorX="center"
            anchorY="middle"
            font="/fonts/Inter-Bold.woff"
            material-toneMapped={false}
          >
            {agents[activeAgentIndex].name}
          </Text>
          
          <Environment preset="park" />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default ThreeDScene;
