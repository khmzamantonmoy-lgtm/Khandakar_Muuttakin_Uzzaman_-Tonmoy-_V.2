import { Canvas, useFrame } from '@react-three/fiber';
import { ContactShadows, Float, Sparkles } from '@react-three/drei';
import { useMemo, useRef } from 'react';
import * as THREE from 'three';

function TrophyModel() {
  const ref = useRef();
  const points = useMemo(() => [
    new THREE.Vector2(.78,1.18), new THREE.Vector2(.84,.98), new THREE.Vector2(.72,.48),
    new THREE.Vector2(.48,.1), new THREE.Vector2(.16,-.08), new THREE.Vector2(.08,-.2)
  ], []);
  useFrame((state, delta) => {
    if (!ref.current) return;
    ref.current.rotation.y += delta * .22;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * .55) * .08;
  });
  const gold={color:'#f5c96a',metalness:.82,roughness:.18,clearcoat:1};
  const blue={color:'#60a5fa',metalness:.65,roughness:.2,emissive:'#102d64',emissiveIntensity:.4};
  const pink={color:'#f472b6',metalness:.5,roughness:.18,emissive:'#4a1239',emissiveIntensity:.35};
  return <group ref={ref} rotation={[0,-.3,0]}>
    <mesh><latheGeometry args={[points,64]}/><meshPhysicalMaterial {...gold}/></mesh>
    <mesh position={[0,1.18,0]}><torusGeometry args={[.8,.07,18,64]}/><meshPhysicalMaterial {...pink}/></mesh>
    <Float speed={2} rotationIntensity={.2} floatIntensity={.12}>
      <mesh position={[-.78,.72,0]} rotation={[0,0,Math.PI/2]}><torusGeometry args={[.66,.09,18,48,Math.PI*1.4]}/><meshPhysicalMaterial {...blue}/></mesh>
      <mesh position={[.78,.72,0]} rotation={[0,0,-Math.PI/2]}><torusGeometry args={[.66,.09,18,48,Math.PI*1.4]}/><meshPhysicalMaterial {...blue}/></mesh>
    </Float>
    <mesh position={[0,-.62,0]}><cylinderGeometry args={[.12,.2,.7,32]}/><meshPhysicalMaterial color="#8b5cf6" metalness=".5" roughness=".2"/></mesh>
    <mesh position={[0,-1.03,0]}><cylinderGeometry args={[.8,.92,.34,6]}/><meshStandardMaterial color="#0b1730" metalness=".85" roughness=".25"/></mesh>
    <mesh position={[0,-.84,0]}><cylinderGeometry args={[.72,.72,.04,6]}/><meshPhysicalMaterial {...gold}/></mesh>
    <mesh position={[0,.56,.82]} rotation={[0,0,Math.PI/4]}><octahedronGeometry args={[.28,0]}/><meshPhysicalMaterial {...pink}/></mesh>
  </group>;
}
export default function TrophyScene(){
  return <Canvas dpr={[1,1.5]} camera={{position:[0,.15,6.5],fov:32}} gl={{antialias:true,alpha:true,powerPreference:'high-performance'}}>
    <ambientLight intensity={1.6}/><directionalLight position={[-3,4,4]} intensity={3.2} color="#ffe6a6"/>
    <pointLight position={[2,.6,2.6]} intensity={18} distance={10} color="#22d3ee"/>
    <pointLight position={[-2,-.4,1.4]} intensity={12} distance={8} color="#f472b6"/>
    <TrophyModel/><Sparkles count={90} scale={[4.5,3.5,2]} size={2.2} speed={.22} color="#f5c96a"/>
    <ContactShadows position={[0,-1.25,0]} opacity={.35} scale={3.5} blur={2.5}/>
  </Canvas>;
}

