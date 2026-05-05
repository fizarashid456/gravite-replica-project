import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Environment, Stars } from "@react-three/drei";
import { useRef, Suspense } from "react";
import * as THREE from "three";

const Orb = () => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.15;
    ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <Sphere ref={ref} args={[1.4, 128, 128]}>
        {/* @ts-ignore */}
        <MeshDistortMaterial
          color="#e08a3a"
          emissive="#3a1a05"
          roughness={0.15}
          metalness={0.95}
          distort={0.45}
          speed={1.6}
        />
      </Sphere>
    </Float>
  );
};

const Rings = () => {
  const g = useRef<THREE.Group>(null);
  useFrame((s) => {
    if (g.current) {
      g.current.rotation.z = s.clock.elapsedTime * 0.1;
      g.current.rotation.x = s.clock.elapsedTime * 0.05;
    }
  });
  return (
    <group ref={g}>
      {[1.9, 2.2, 2.6].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.3, i * 0.4, 0]}>
          <torusGeometry args={[r, 0.005, 16, 200]} />
          <meshBasicMaterial color="#f0c878" transparent opacity={0.35 - i * 0.08} />
        </mesh>
      ))}
    </group>
  );
};

export const GoldOrb = ({ className = "" }: { className?: string }) => {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} dpr={[1, 2]} gl={{ antialias: true, alpha: true }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={2} color="#ffb56b" />
          <pointLight position={[-5, -3, -2]} intensity={1.2} color="#ff7a2a" />
          <directionalLight position={[0, 5, 2]} intensity={0.8} />
          <Stars radius={50} depth={50} count={1500} factor={3} fade speed={0.5} />
          <Orb />
          <Rings />
          <Environment preset="sunset" />
        </Suspense>
      </Canvas>
    </div>
  );
};