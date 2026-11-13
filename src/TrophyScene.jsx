import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Sparkles } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function TrophyModel() {
  const ref = useRef();
  const cupProfile = useMemo(() => [
    new THREE.Vector2(0.18, -0.18),
    new THREE.Vector2(0.48, -0.14),
    new THREE.Vector2(0.68, 0.1),
    new THREE.Vector2(0.78, 0.48),
    new THREE.Vector2(0.82, 0.82),
    new THREE.Vector2(0.68, 1.1),
    new THREE.Vector2(0.45, 1.28),
    new THREE.Vector2(0.22, 1.34)
  ], []);

  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * 0.24;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.035;
  });

  const gold = { color: '#dcb766', metalness: 0.9, roughness: 0.16, clearcoat: 1 };
  const goldLight = { color: '#ffe7a4', metalness: 0.78, roughness: 0.14, clearcoat: 1 };
  const crystal = { color: '#8f7bff', metalness: 0.35, roughness: 0.1, transmission: 0.1, emissive: '#302a88', emissiveIntensity: 0.4 };
  const cyan = { color: '#32d8e8', metalness: 0.62, roughness: 0.18, emissive: '#073b53', emissiveIntensity: 0.6 };

  return <group ref={ref} position={[0, -0.12, 0]} rotation={[0, -0.25, 0]}>
    <mesh><latheGeometry args={[cupProfile, 64]} /><meshPhysicalMaterial {...gold} /></mesh>
    <mesh position={[0, 1.31, 0]}><torusGeometry args={[0.23, 0.045, 16, 48]} /><meshPhysicalMaterial {...goldLight} /></mesh>
    <mesh position={[0, 0.7, 0.78]} rotation={[Math.PI / 2, 0, 0]}><icosahedronGeometry args={[0.28, 1]} /><meshPhysicalMaterial {...crystal} /></mesh>
    <Float speed={1.7} rotationIntensity={0.14} floatIntensity={0.08}>
      <mesh position={[-0.76, 0.7, 0]} rotation={[0, 0, Math.PI / 2]}><torusGeometry args={[0.66, 0.075, 18, 64, Math.PI * 1.32]} /><meshPhysicalMaterial {...cyan} /></mesh>
      <mesh position={[0.76, 0.7, 0]} rotation={[0, 0, -Math.PI / 2]}><torusGeometry args={[0.66, 0.075, 18, 64, Math.PI * 1.32]} /><meshPhysicalMaterial {...cyan} /></mesh>
    </Float>
    <mesh position={[0, -0.54, 0]}><cylinderGeometry args={[0.13, 0.2, 0.66, 32]} /><meshPhysicalMaterial {...goldLight} /></mesh>
    <mesh position={[0, -0.91, 0]}><cylinderGeometry args={[0.62, 0.76, 0.3, 6]} /><meshPhysicalMaterial color="#101b31" metalness={0.88} roughness={0.25} /></mesh>
    <mesh position={[0, -0.74, 0]}><cylinderGeometry args={[0.62, 0.62, 0.045, 6]} /><meshPhysicalMaterial {...gold} /></mesh>
    <mesh position={[0, -0.98, 0]}><torusGeometry args={[0.57, 0.035, 12, 48]} /><meshPhysicalMaterial {...cyan} /></mesh>
  </group>;
}

export default function TrophyScene() {
  return <Canvas dpr={[1, 1.5]} camera={{ position: [0, 0.08, 4.9], fov: 31 }} gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}>
    <ambientLight intensity={1.25} />
    <directionalLight position={[-3, 4, 4]} intensity={3.4} color="#ffe6a6" />
    <pointLight position={[2, 0.7, 2.8]} intensity={14} distance={9} color="#22d3ee" />
    <pointLight position={[-2, -0.3, 1.8]} intensity={10} distance={8} color="#8b5cf6" />
    <spotLight position={[0, 4, 2]} intensity={12} angle={0.38} penumbra={1} color="#fff1c7" />
    <TrophyModel />
    <Sparkles count={45} scale={[3.8, 3.2, 2]} size={1.7} speed={0.16} color="#f5c96a" />
    <ContactShadows position={[0, -1.14, 0]} opacity={0.42} scale={3.1} blur={2.4} />
  </Canvas>;
}
