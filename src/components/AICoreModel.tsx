import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, RoundedBox, Sphere } from '@react-three/drei';
import * as THREE from 'three';

const ChatBubble = ({ position, delay, scale = 1, flipped = false }: { position: [number, number, number], delay: number, scale?: number, flipped?: boolean }) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + delay) * 0.1;
    }
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <RoundedBox args={[1.2, 0.8, 0.2]} radius={0.15} smoothness={4}>
        <meshPhysicalMaterial 
          color="#082f49" 
          emissive="#0284c7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>
      {/* Tail */}
      <mesh position={[flipped ? 0.4 : -0.4, -0.35, 0]} rotation={[0, 0, Math.PI / 4]}>
        <boxGeometry args={[0.3, 0.3, 0.15]} />
        <meshPhysicalMaterial 
          color="#082f49" 
          emissive="#0284c7"
          emissiveIntensity={0.5}
          transparent
          opacity={0.85}
        />
      </mesh>
      
      {/* 3 little dots inside */}
      <group position={[0, 0, 0.11]}>
        <Sphere args={[0.08, 16, 16]} position={[-0.3, 0, 0]}>
          <meshBasicMaterial color="#38bdf8" />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[0, 0, 0]}>
          <meshBasicMaterial color="#38bdf8" />
        </Sphere>
        <Sphere args={[0.08, 16, 16]} position={[0.3, 0, 0]}>
          <meshBasicMaterial color="#38bdf8" />
        </Sphere>
      </group>
    </group>
  );
};

const SmartPhone = () => {
  const phoneRef = useRef<THREE.Group>(null);
  const waveRef = useRef<THREE.Group>(null);
  
  const waveHeights = [0.3, 0.7, 0.4, 0.8, 0.5, 0.9, 0.4, 0.6, 0.3];

  useFrame((state, delta) => {
    if (phoneRef.current) {
      phoneRef.current.rotation.y += delta * 0.2;
      phoneRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
      phoneRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
    
    // Animate waveform
    if (waveRef.current) {
      waveRef.current.children.forEach((child, i) => {
        const mesh = child as THREE.Mesh;
        const targetScale = waveHeights[i] + Math.sin(state.clock.elapsedTime * 5 + i) * 0.2;
        mesh.scale.y = Math.max(0.1, targetScale);
      });
    }
  });

  return (
    <group ref={phoneRef}>
      {/* Phone Body */}
      <RoundedBox args={[1.8, 3.6, 0.2]} radius={0.25} smoothness={4}>
        <meshPhysicalMaterial 
          color="#111827" 
          roughness={0.4}
          metalness={0.8}
          clearcoat={0.5}
        />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox args={[1.65, 3.45, 0.1]} radius={0.15} smoothness={4} position={[0, 0, 0.06]}>
        <meshPhysicalMaterial 
          color="#000000" 
          emissive="#082f49"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.9}
        />
      </RoundedBox>

      {/* AI Voice Ring on Screen */}
      <group position={[0, 0.6, 0.12]}>
        <mesh>
          <torusGeometry args={[0.35, 0.03, 16, 32]} />
          <meshBasicMaterial color="#38bdf8" />
        </mesh>
        <Sphere args={[0.15, 16, 16]}>
          <meshBasicMaterial color="#bae6fd" />
        </Sphere>
      </group>
      
      {/* Voice Waveform on screen */}
      <group ref={waveRef} position={[0, -0.6, 0.12]}>
        {waveHeights.map((_, i) => (
          <mesh key={i} position={[(i - 4) * 0.15, 0, 0]}>
            <boxGeometry args={[0.08, 1, 0.02]} />
            <meshBasicMaterial color="#38bdf8" />
          </mesh>
        ))}
      </group>
      
      {/* Floating Chat Bubbles */}
      <ChatBubble position={[-1.5, 1, 0.5]} delay={0} scale={0.7} />
      <ChatBubble position={[1.5, 0, 0.2]} delay={1.5} scale={0.6} flipped={true} />
      <ChatBubble position={[-1.2, -1.2, 0.8]} delay={3} scale={0.5} />
    </group>
  );
};

const AICoreModel: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '350px', pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        
        {/* Glowing lights for the scene */}
        <pointLight position={[0, 0, 0]} intensity={3} color="#bae6fd" distance={6} />
        <pointLight position={[-3, 2, 2]} intensity={2} color="#0ea5e9" distance={8} />
        <pointLight position={[3, -2, 2]} intensity={2} color="#38bdf8" distance={8} />

        <Float
          speed={1.5}
          rotationIntensity={0.3}
          floatIntensity={1.5}
          floatingRange={[-0.1, 0.1]}
        >
          <SmartPhone />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={true}
          autoRotateSpeed={0.5}
        />
      </Canvas>
    </div>
  );
};

export default AICoreModel;
