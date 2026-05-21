'use client'

import { useRef } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import * as THREE from 'three'
import { useParallax } from '@/hooks/use-parallax'

function MultipowerMachine({ scrollY }: { scrollY: number }) {
  const groupRef = useRef<THREE.Group>(null)
  
  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y = scrollY * 0.002
      groupRef.current.rotation.x = Math.sin(scrollY * 0.001) * 0.15
    }
  })

  const metalMaterial = new THREE.MeshStandardMaterial({
    color: '#1a1a1a',
    metalness: 0.9,
    roughness: 0.3,
  })

  const chromeMaterial = new THREE.MeshStandardMaterial({
    color: '#666666',
    metalness: 1,
    roughness: 0.1,
  })

  const accentMaterial = new THREE.MeshStandardMaterial({
    color: '#00E5FF',
    metalness: 0.8,
    roughness: 0.2,
    emissive: '#00E5FF',
    emissiveIntensity: 0.4,
  })

  return (
    <group ref={groupRef} position={[0, -0.5, 0]} scale={0.9}>
      {/* Main vertical posts */}
      <mesh position={[-2, 2, -1]} material={metalMaterial}>
        <boxGeometry args={[0.15, 5, 0.15]} />
      </mesh>
      <mesh position={[2, 2, -1]} material={metalMaterial}>
        <boxGeometry args={[0.15, 5, 0.15]} />
      </mesh>
      <mesh position={[-2, 2, 1]} material={metalMaterial}>
        <boxGeometry args={[0.15, 5, 0.15]} />
      </mesh>
      <mesh position={[2, 2, 1]} material={metalMaterial}>
        <boxGeometry args={[0.15, 5, 0.15]} />
      </mesh>

      {/* Top horizontal bars */}
      <mesh position={[0, 4.5, -1]} material={metalMaterial}>
        <boxGeometry args={[4.3, 0.15, 0.15]} />
      </mesh>
      <mesh position={[0, 4.5, 1]} material={metalMaterial}>
        <boxGeometry args={[4.3, 0.15, 0.15]} />
      </mesh>
      <mesh position={[-2, 4.5, 0]} material={metalMaterial}>
        <boxGeometry args={[0.15, 0.15, 2.3]} />
      </mesh>
      <mesh position={[2, 4.5, 0]} material={metalMaterial}>
        <boxGeometry args={[0.15, 0.15, 2.3]} />
      </mesh>

      {/* Smith machine bar */}
      <mesh position={[0, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={chromeMaterial}>
        <cylinderGeometry args={[0.04, 0.04, 4.5, 16]} />
      </mesh>
      
      {/* Bar guides */}
      <mesh position={[-2, 2.5, 0]} material={metalMaterial}>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
      </mesh>
      <mesh position={[2, 2.5, 0]} material={metalMaterial}>
        <boxGeometry args={[0.1, 0.4, 0.1]} />
      </mesh>

      {/* Weight plates left */}
      <mesh position={[-2.3, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
      </mesh>
      <mesh position={[-2.45, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
      </mesh>
      <mesh position={[-2.6, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
      </mesh>

      {/* Weight plates right */}
      <mesh position={[2.3, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
      </mesh>
      <mesh position={[2.45, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.35, 0.35, 0.08, 32]} />
      </mesh>
      <mesh position={[2.6, 2.5, 0]} rotation={[0, 0, Math.PI / 2]} material={metalMaterial}>
        <cylinderGeometry args={[0.3, 0.3, 0.06, 32]} />
      </mesh>

      {/* Safety bars with accent color */}
      <mesh position={[0, 1.2, -0.8]} rotation={[0, 0, Math.PI / 2]} material={accentMaterial}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
      </mesh>
      <mesh position={[0, 1.2, 0.8]} rotation={[0, 0, Math.PI / 2]} material={accentMaterial}>
        <cylinderGeometry args={[0.03, 0.03, 4, 16]} />
      </mesh>

      {/* Base platform */}
      <mesh position={[0, -0.5, 0]} material={metalMaterial}>
        <boxGeometry args={[5, 0.1, 3]} />
      </mesh>

      {/* Weight stack */}
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[-3, 0.5 + i * 0.25, 0]} material={metalMaterial}>
          <boxGeometry args={[0.6, 0.2, 0.8]} />
        </mesh>
      ))}

      {/* Pulley */}
      <mesh position={[-3, 4, 0]} rotation={[Math.PI / 2, 0, 0]} material={chromeMaterial}>
        <cylinderGeometry args={[0.1, 0.1, 0.15, 16]} />
      </mesh>
    </group>
  )
}

function Scene({ scrollY }: { scrollY: number }) {
  return (
    <>
      <Environment preset="night" />
      <ambientLight intensity={0.15} />
      <spotLight
        position={[5, 10, 5]}
        angle={0.3}
        penumbra={1}
        intensity={1.2}
        color="#ffffff"
      />
      <spotLight
        position={[-5, 5, -5]}
        angle={0.4}
        penumbra={1}
        intensity={0.6}
        color="#00E5FF"
      />
      <pointLight position={[0, 5, 0]} intensity={0.4} color="#00E5FF" />
      <MultipowerMachine scrollY={scrollY} />
    </>
  )
}

export function ParallaxBackground() {
  const scrollY = useParallax()

  return (
    <div className="fixed inset-0 -z-10">
      <Canvas
        camera={{ position: [6, 3, 6], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'linear-gradient(180deg, #0a0a0a 0%, #0C0C0C 100%)' }}
      >
        <Scene scrollY={scrollY} />
      </Canvas>
      
      {/* Overlay gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(180deg, rgba(10,10,10,0.2) 0%, rgba(10,10,10,0.4) 50%, rgba(10,10,10,0.75) 100%)",
        }}
      />
    </div>
  )
}
