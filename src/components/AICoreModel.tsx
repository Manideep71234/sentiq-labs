import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Float, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const ParticleRing = () => {
  const ref = useRef<THREE.Points>(null);
  
  // Generate random particles in a spherical field
  const particles = useMemo(() => {
    const positions = new Float32Array(1500 * 3);
    for (let i = 0; i < 1500; i++) {
      const theta = THREE.MathUtils.randFloatSpread(360); 
      const phi = THREE.MathUtils.randFloatSpread(360); 
      
      const distance = THREE.MathUtils.randFloat(2.5, 4.5);
      
      positions[i * 3] = distance * Math.sin(theta) * Math.cos(phi);
      positions[i * 3 + 1] = distance * Math.sin(theta) * Math.sin(phi);
      positions[i * 3 + 2] = distance * Math.cos(theta);
    }
    return positions;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.y -= delta * 0.1;
      ref.current.rotation.x -= delta * 0.05;
    }
  });

  return (
    <Points ref={ref} positions={particles} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#d8b4fe" size={0.03} sizeAttenuation={true} depthWrite={false} blending={THREE.AdditiveBlending} opacity={0.6} />
    </Points>
  );
};

const NeuralTorus = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const wireframeRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.15;
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x -= delta * 0.1;
      wireframeRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group>
      {/* Solid Inner Torus Knot */}
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1, 0.35, 128, 16]} />
        <meshPhysicalMaterial 
          color="#3b0764" 
          emissive="#6d28d9"
          emissiveIntensity={0.6}
          roughness={0.1}
          metalness={0.8}
          clearcoat={1}
          clearcoatRoughness={0.1}
        />
      </mesh>

      {/* Wireframe Outer Torus Knot */}
      <mesh ref={wireframeRef}>
        <torusKnotGeometry args={[1.3, 0.45, 64, 12]} />
        <meshBasicMaterial 
          color="#c084fc" 
          wireframe={true} 
          transparent 
          opacity={0.25}
          blending={THREE.AdditiveBlending}
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
        <pointLight position={[-10, -10, -10]} intensity={2} color="#a855f7" />
        
        {/* Core glowing light */}
        <pointLight position={[0, 0, 0]} intensity={3} color="#e9d5ff" distance={6} />

        <Float
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={2}
          floatingRange={[-0.1, 0.1]}
        >
          <NeuralTorus />
          <ParticleRing />
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
