import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

const CoreShape = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
      meshRef.current.rotation.x += delta * 0.1;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.y -= delta * 0.15;
      wireframeRef.current.rotation.z += delta * 0.1;
    }
  });

  return (
    <group>
      {/* Inner glowing core */}
      <Sphere ref={meshRef} args={[1.5, 32, 32]}>
        <MeshDistortMaterial
          color="#a855f7" // Purple
          emissive="#6d28d9"
          emissiveIntensity={1}
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>

      {/* Outer wireframe shell */}
      <mesh ref={wireframeRef}>
        <icosahedronGeometry args={[2.2, 1]} />
        <meshStandardMaterial
          color="#ffffff" // Brighter color
          wireframe
          transparent
          opacity={0.9} // Higher opacity so lines are clearly visible
          emissive="#a855f7"
          emissiveIntensity={1.5} // Make the lines glow brightly
        />
      </mesh>
    </group>
  );
};

const AICoreModel: React.FC = () => {
  return (
    <div style={{ width: '100%', height: '300px', pointerEvents: 'auto' }}>
      {/* Zoomed camera out from z=5 to z=6.5 to fit the 300px height without clipping the outer boundaries */}
      <Canvas camera={{ position: [1, 0, 6.5], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <pointLight position={[-10, -10, -5]} intensity={2} color="#a855f7" />

        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[-0.2, 0.2]}
        >
          <CoreShape />
        </Float>

        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate={false}
        />
      </Canvas>
    </div>
  );
};

export default AICoreModel;
