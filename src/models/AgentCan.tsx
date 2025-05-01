
import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial } from "@react-three/drei";
import { Mesh } from "three";
import * as THREE from "three";
import { AgentData } from "../types/agent";

interface AgentCanProps {
  position: [number, number, number];
  agent: AgentData;
  isActive: boolean;
  onClick: () => void;
  rotationState: number;
}

const AgentCan = ({ position, agent, isActive, onClick, rotationState }: AgentCanProps) => {
  const meshRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState(false);
  
  // Calculate target rotation based on the rotationState (0-3)
  const targetRotationY = rotationState * Math.PI / 2;
  
  useFrame((state, delta) => {
    if (!meshRef.current) return;
    
    // Animate to the target rotation with a spring-like effect
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      targetRotationY,
      delta * 2.5
    );
    
    // If active, add a subtle floating animation
    if (isActive) {
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;
    } else {
      meshRef.current.position.y = position[1];
    }
  });

  // Generate a color based on the agent category
  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'crypto':
        return "#76E4F7"; // sky blue
      case 'medical':
        return "#9AE6B4"; // mint green
      case 'smart contract':
        return "#B794F4"; // lavender
      case 'legal':
        return "#FEEBC8"; // cream
      case 'voice':
        return "#FBB6CE"; // pink
      default:
        return "#B794F4"; // default lavender
    }
  };

  const color = getCategoryColor(agent.category);

  return (
    <mesh
      ref={meshRef}
      position={[position[0], position[1], position[2]]}
      onClick={onClick}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
      scale={isActive ? 1.05 : 1}
      className="spring-transition"
    >
      <cylinderGeometry args={[0.7, 0.7, 1.5, 32]} />
      <MeshDistortMaterial
        color={color}
        distort={isActive ? 0.2 : 0.1}
        speed={isActive ? 1.5 : 1}
        metalness={0.1}
        roughness={0.4}
        transparent
        opacity={0.9}
      />
      
      {/* Top and bottom caps */}
      <mesh position={[0, 0.76, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
        <meshStandardMaterial color="#f8f8f8" metalness={0.4} roughness={0.3} />
      </mesh>
      
      <mesh position={[0, -0.76, 0]}>
        <cylinderGeometry args={[0.7, 0.7, 0.05, 32]} />
        <meshStandardMaterial color="#f8f8f8" metalness={0.4} roughness={0.3} />
      </mesh>
    </mesh>
  );
};

export default AgentCan;
