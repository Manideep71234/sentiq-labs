import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float } from '@react-three/drei';
import * as THREE from 'three';

const PrismCore = () => {
  const innerRef = useRef<THREE.Mesh>(null);
  const outerRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (innerRef.current) {
      innerRef.current.rotation.y += delta * 0.15;
      innerRef.current.rotation.x += delta * 0.1;
    }
    if (outerRef.current) {
      outerRef.current.rotation.y -= delta * 0.1;
      outerRef.current.rotation.z += delta * 0.05;
    }
  });

  return (
    <group>
      {/* Solid Inner Prism (Octahedron) */}
      <mesh ref={innerRef}>
        <octahedronGeometry args={[1.5, 0]} />
        <meshPhysicalMaterial 
          color="#3b0764" 
          emissive="#6d28d9"
          emissiveIntensity={0.8}
          roughness={0.1}
          metalness={0.9}
          clearcoat={1}
          clearcoatRoughness={0}
        />
      </mesh>

      {/* Sharp Outer Wireframe */}
      <mesh ref={outerRef}>
        <octahedronGeometry args={[2, 0]} />
        <meshBasicMaterial 
          color="#d8b4fe" 
          wireframe={true} 
          transparent 
          opacity={0.4}
        />
      </mesh>
    </group>
  );
};

const AICoreModel: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '350px', pointerEvents: 'auto' }}>
      <Canvas camera={{ position: [0, 0, 7.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />
        
        {/* Core glowing light */}
        <pointLight position={[0, 0, 0]} intensity={3} color="#e9d5ff" distance={6} />

        <Float
          speed={1.5}
          rotationIntensity={0.5}
          floatIntensity={1.5}
          floatingRange={[-0.1, 0.1]}
        >
          <PrismCore />
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
