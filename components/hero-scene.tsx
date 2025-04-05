"use client"

import { useRef, useState, useEffect } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Text3D, OrbitControls, Stars, Environment, MeshDistortMaterial } from "@react-three/drei"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import Link from "next/link"

function Logo(props) {
  const group = useRef()

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2
      group.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1
    }
  })

  return (
    <group ref={group} {...props} dispose={null}>
      {/* Main cube */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.2, 1.2, 1.2]} />
        <MeshDistortMaterial color="#2563eb" speed={2} distort={0.3} metalness={0.8} roughness={0.2} />
      </mesh>

      {/* Orbiting sphere */}
      <mesh position={[1.5, 0, 0]} castShadow>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#f97316"
          metalness={0.7}
          roughness={0.2}
          emissive="#ea580c"
          emissiveIntensity={0.5}
        />
      </mesh>

      {/* Small decorative elements */}
      <mesh position={[-0.8, 0.8, 0.8]} castShadow>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial color="#60a5fa" metalness={0.5} roughness={0.2} />
      </mesh>
    </group>
  )
}

function Scene() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Environment preset="night" />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1.5} castShadow />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />

      <Text3D
        font="/fonts/Geist_Bold.json"
        size={0.8}
        height={0.2}
        curveSegments={12}
        bevelEnabled
        bevelThickness={0.02}
        bevelSize={0.02}
        bevelOffset={0}
        bevelSegments={5}
        position={[-4.5, 1, 0]}
      >
        GENCORE IT
        <meshStandardMaterial
          color="#2563eb"
          metalness={0.8}
          roughness={0.2}
          emissive="#60a5fa"
          emissiveIntensity={0.3}
        />
      </Text3D>

      <Text3D font="/fonts/Geist_Regular.json" size={0.3} height={0.05} curveSegments={12} position={[-4.2, 0, 0]}>
        Next Generation IT Solutions
        <meshStandardMaterial
          color="#f97316"
          metalness={0.7}
          roughness={0.2}
          emissive="#fdba74"
          emissiveIntensity={0.3}
        />
      </Text3D>

      <Logo position={[3, 0, 0]} />
    </>
  )
}

export default function HeroScene() {
  return (
    <div className="w-full h-[90vh] relative">
      <Canvas shadows camera={{ position: [0, 0, 5], fov: 60 }}>
        <fog attach="fog" args={["#0f172a", 5, 20]} />
        <Scene />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>

      <div className="absolute bottom-20 left-0 right-0 flex flex-col items-center justify-center gap-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="text-center px-4"
        >
          <h2 className="text-xl md:text-2xl text-gray-300 mb-4">
            Transforming Businesses with Innovative IT Solutions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact" className="btn-primary">
            Get a Free Consultation
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Services
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

