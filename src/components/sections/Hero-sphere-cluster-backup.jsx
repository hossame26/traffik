import React, { useRef, useState, useEffect, useMemo, Suspense } from 'react';
import { motion as Motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// ─── Shared state for R3F ───
const sharedState = { mouseX: 0, mouseY: 0, scroll: 0 };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    sharedState.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    sharedState.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });
}

// ─── Mobile detection ───
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(true);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);
  return isMobile;
};


// ═══════════════════════════════════════════════════════════
// 3D SPHERE CLUSTER — Musemind/Eduvibe style
// ═══════════════════════════════════════════════════════════

const HeroCanvas = React.lazy(() =>
  Promise.all([
    import('@react-three/fiber'),
    import('@react-three/drei'),
    import('@react-three/postprocessing'),
    import('three'),
  ]).then(([fiber, drei, post, THREE]) => {
    const { Canvas, useFrame, useThree } = fiber;
    const { Environment, Float } = drei;
    const { EffectComposer, Bloom, Vignette, ChromaticAberration } = post;

    const sphereCount = 320;
    const clusterRadius = 2.0;
    const ballRadius = 0.2;

    // Pre-compute sphere positions on surface of a sphere (fibonacci distribution)
    function fibonacciSphere(count, radius) {
      const positions = [];
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));
      for (let i = 0; i < count; i++) {
        const y = 1 - (i / (count - 1)) * 2;
        const r = Math.sqrt(1 - y * y);
        const theta = goldenAngle * i;
        positions.push([
          Math.cos(theta) * r * radius,
          y * radius,
          Math.sin(theta) * r * radius,
        ]);
      }
      return positions;
    }

    // Shared hover intensity (0 = idle, 1 = mouse fully on cluster)
    const hoverIntensity = { value: 0 };

    // ── Sphere Cluster (InstancedMesh) ──
    function SphereCluster() {
      const meshRef = useRef();
      const dummy = useMemo(() => new THREE.Object3D(), []);
      const basePositions = useMemo(() => fibonacciSphere(sphereCount, clusterRadius), []);
      const currentPositions = useRef(basePositions.map(p => [...p]));
      const velocities = useRef(basePositions.map(() => [0, 0, 0]));

      // Proper mouse-to-3D via raycaster on invisible plane
      const mouseWorld = useRef(new THREE.Vector3());
      const raycaster = useMemo(() => new THREE.Raycaster(), []);
      const mouseNDC = useMemo(() => new THREE.Vector2(), []);
      const hitPlane = useMemo(() => new THREE.Plane(new THREE.Vector3(0, 0, 1), 0), []);
      const hitPoint = useRef(new THREE.Vector3());

      useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.elapsedTime;

        // Raycast mouse onto the sphere's Z=0 plane (relative to group, so offset accounted for by parent)
        mouseNDC.set(sharedState.mouseX, sharedState.mouseY);
        raycaster.setFromCamera(mouseNDC, state.camera);
        if (raycaster.ray.intersectPlane(hitPlane, hitPoint.current)) {
          const localMouse = hitPoint.current.clone().sub(new THREE.Vector3(1.2, 0, 0));
          mouseWorld.current.lerp(localMouse, 0.25);

          // Check if mouse is inside/near cluster radius
          const mouseDist = localMouse.length();
          const targetHover = mouseDist < clusterRadius * 1.3 ? 1 : 0;
          hoverIntensity.value += (targetHover - hoverIntensity.value) * 0.08;
        }

        for (let i = 0; i < sphereCount; i++) {
          const base = basePositions[i];
          const curr = currentPositions.current[i];
          const vel = velocities.current[i];

          // Rotate base position slowly (idle animation)
          const cosT = Math.cos(t * 0.12);
          const sinT = Math.sin(t * 0.12);
          const rotX = base[0] * cosT - base[2] * sinT;
          const rotZ = base[0] * sinT + base[2] * cosT;
          const targetX = rotX;
          const targetY = base[1];
          const targetZ = rotZ;

          // Distance from this ball to the mouse
          const dx = curr[0] - mouseWorld.current.x;
          const dy = curr[1] - mouseWorld.current.y;
          const dz = curr[2] - mouseWorld.current.z;
          const distToMouse = Math.sqrt(dx * dx + dy * dy + dz * dz);
          const repulsionRadius = 1.6;

          // Push balls OUTWARD (radially from center) when mouse is near
          let forceX = 0, forceY = 0, forceZ = 0;
          if (distToMouse < repulsionRadius && distToMouse > 0.01) {
            const strength = (1 - distToMouse / repulsionRadius);
            const pushForce = strength * strength * 1.8; // quadratic falloff, strong push
            // Direction = outward from center (normalized current position)
            const len = Math.sqrt(curr[0] * curr[0] + curr[1] * curr[1] + curr[2] * curr[2]);
            if (len > 0.01) {
              forceX = (curr[0] / len) * pushForce;
              forceY = (curr[1] / len) * pushForce;
              forceZ = (curr[2] / len) * pushForce;
            }
          }

          // Spring back to shell position + outward push
          vel[0] += (targetX + forceX - curr[0]) * 0.06;
          vel[1] += (targetY + forceY - curr[1]) * 0.06;
          vel[2] += (targetZ + forceZ - curr[2]) * 0.06;

          // Damping
          vel[0] *= 0.82;
          vel[1] *= 0.82;
          vel[2] *= 0.82;

          curr[0] += vel[0];
          curr[1] += vel[1];
          curr[2] += vel[2];

          dummy.position.set(curr[0], curr[1], curr[2]);
          dummy.scale.setScalar(1);
          dummy.updateMatrix();
          meshRef.current.setMatrixAt(i, dummy.matrix);
        }
        meshRef.current.instanceMatrix.needsUpdate = true;
      });

      return (
        <instancedMesh ref={meshRef} args={[null, null, sphereCount]} castShadow>
          <sphereGeometry args={[ballRadius, 24, 24]} />
          <meshPhysicalMaterial
            color="#3018DD"
            emissive="#1a0066"
            emissiveIntensity={0.2}
            metalness={0.9}
            roughness={0.08}
            clearcoat={1}
            clearcoatRoughness={0.05}
            reflectivity={1}
            envMapIntensity={2.5}
          />
        </instancedMesh>
      );
    }

    // ── Core Glow — hidden by default, revealed on hover ──
    function CoreGlow() {
      const coreRef = useRef();
      const haloRef = useRef();
      const lightRef = useRef();
      const lightRef2 = useRef();
      useFrame((state) => {
        if (!coreRef.current) return;
        const t = state.clock.elapsedTime;
        const h = hoverIntensity.value;
        const pulse = 1 + Math.sin(t * 1.5) * 0.08;

        // Scale and opacity driven by hover
        coreRef.current.scale.setScalar(0.55 * pulse * h);
        coreRef.current.material.opacity = 0.9 * h;

        if (haloRef.current) {
          haloRef.current.scale.setScalar(1.4 * pulse * h);
          haloRef.current.material.opacity = 0.15 * h;
        }
        if (lightRef.current) lightRef.current.intensity = 10 * h;
        if (lightRef2.current) lightRef2.current.intensity = 4 * h;
      });
      return (
        <group>
          <mesh ref={coreRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#6040FF" transparent opacity={0} />
          </mesh>
          <mesh ref={haloRef}>
            <sphereGeometry args={[1, 32, 32]} />
            <meshBasicMaterial color="#0066FF" transparent opacity={0} />
          </mesh>
          <pointLight ref={lightRef} color="#6040FF" intensity={0} distance={6} />
          <pointLight ref={lightRef2} color="#0066FF" intensity={0} distance={10} />
        </group>
      );
    }

    // ── Floating Ring (subtle orbital ring) ──
    function OrbitalRing() {
      const ringRef = useRef();
      useFrame((state) => {
        if (!ringRef.current) return;
        ringRef.current.rotation.x = Math.PI / 2.5 + Math.sin(state.clock.elapsedTime * 0.2) * 0.1;
        ringRef.current.rotation.z = state.clock.elapsedTime * 0.08;
      });
      return (
        <mesh ref={ringRef}>
          <torusGeometry args={[2.8, 0.015, 16, 100]} />
          <meshBasicMaterial color="#0066FF" transparent opacity={0.25} />
        </mesh>
      );
    }

    // ── Ambient Particles ──
    function AmbientParticles({ count = 400 }) {
      const pointsRef = useRef();
      const [positions, colors] = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const col = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
          const i3 = i * 3;
          pos[i3] = (Math.random() - 0.5) * 20;
          pos[i3 + 1] = (Math.random() - 0.5) * 14;
          pos[i3 + 2] = (Math.random() - 0.5) * 16 - 3;
          const bright = 0.3 + Math.random() * 0.7;
          col[i3] = bright * 0.3;
          col[i3 + 1] = bright * 0.2;
          col[i3 + 2] = bright;
        }
        return [pos, col];
      }, [count]);

      useFrame((state) => {
        if (!pointsRef.current) return;
        pointsRef.current.rotation.y = state.clock.elapsedTime * 0.005;
      });

      return (
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.03} vertexColors sizeAttenuation transparent opacity={0.6} depthWrite={false} />
        </points>
      );
    }

    // ── Canvas Wrapper ──
    function HeroCanvasInner() {
      return (
        <Canvas
          camera={{ position: [0, 0, 6.5], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <color attach="background" args={['#050510']} />

          {/* Lighting */}
          <ambientLight intensity={0.15} />
          <directionalLight position={[5, 5, 5]} color="#0066FF" intensity={1.5} />
          <directionalLight position={[-5, -2, 3]} color="#A855F7" intensity={1} />
          <directionalLight position={[0, 5, -5]} color="#06B6D4" intensity={0.8} />

          {/* Main 3D element - offset to the right */}
          <group position={[1.2, 0, 0]}>
            <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.5}>
              <SphereCluster />
              <CoreGlow />
              <OrbitalRing />
            </Float>
          </group>

          <AmbientParticles count={500} />

          {/* Environment for reflections */}
          <Environment preset="night" />

          <EffectComposer>
            <Bloom
              luminanceThreshold={0.2}
              luminanceSmoothing={0.9}
              intensity={2}
              mipmapBlur
            />
            <Vignette eskil={false} offset={0.2} darkness={0.7} />
          </EffectComposer>
        </Canvas>
      );
    }

    return { default: HeroCanvasInner };
  })
);

// ═══════════════════════════════════════════════════════════
// MOBILE FALLBACK
// ═══════════════════════════════════════════════════════════

function MobileFallback() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-1/2 right-[10%] -translate-y-1/2 w-[350px] h-[350px] bg-[#4020FF] opacity-[0.12] blur-[100px] rounded-full" />
      <div className="absolute top-1/3 right-[20%] w-[250px] h-[250px] bg-[#0066FF] opacity-[0.08] blur-[80px] rounded-full" />
      <div className="absolute bottom-1/3 right-[5%] w-[200px] h-[200px] bg-[#A855F7] opacity-[0.06] blur-[80px] rounded-full" />
      <div className="absolute inset-0 bg-noise opacity-[0.04]" />
    </div>
  );
}


// ═══════════════════════════════════════════════════════════
// GSAP WORD-BY-WORD REVEAL
// ═══════════════════════════════════════════════════════════

function RevealTitle() {
  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const words1 = line1Ref.current?.querySelectorAll('.word');
    const words2 = line2Ref.current?.querySelectorAll('.word');
    if (!words1?.length || !words2?.length) return;

    const tl = gsap.timeline({ delay: 0.5 });

    tl.fromTo(words1, {
      y: 100, opacity: 0, rotateX: -90,
    }, {
      y: 0, opacity: 1, rotateX: 0,
      duration: 1, ease: 'power4.out', stagger: 0.12,
    });

    tl.fromTo(words2, {
      y: 80, opacity: 0, rotateX: -70, scale: 0.85,
    }, {
      y: 0, opacity: 1, rotateX: 0, scale: 1,
      duration: 0.9, ease: 'power4.out', stagger: 0.035,
    }, '-=0.4');
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-[0.9] tracking-[-0.03em] mb-6" style={{ perspective: '1000px' }}>
      <div ref={line1Ref} className="overflow-hidden block pb-2">
        {'SITES QUI'.split(' ').map((word, i) => (
          <span key={i} className="word inline-block text-white mr-[0.25em]" style={{ opacity: 0, transformStyle: 'preserve-3d' }}>
            {word}
          </span>
        ))}
      </div>
      <div ref={line2Ref} className="overflow-hidden block">
        {'CONVERTISSENT.'.split('').map((char, i) => (
          <span key={i} className="word inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#0066FF] via-[#A855F7] to-[#0066FF] bg-[length:200%_auto] animate-gradient" style={{ opacity: 0, transformStyle: 'preserve-3d' }}>
            {char}
          </span>
        ))}
      </div>
    </h1>
  );
}

// ═══════════════════════════════════════════════════════════
// MAIN HERO — Split layout: text left, 3D right
// ═══════════════════════════════════════════════════════════

export default function Hero() {
  const targetRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => { sharedState.scroll = v; });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <section ref={targetRef} className="relative min-h-screen flex items-center overflow-hidden bg-[#050510]">

      {/* ── 3D Canvas (full background, sphere naturally sits right) ── */}
      {!isMobile ? (
        <div className="absolute inset-0 z-0">
          <Suspense fallback={<MobileFallback />}>
            <HeroCanvas />
          </Suspense>
        </div>
      ) : (
        <MobileFallback />
      )}

      {/* ── Overlays ── */}
      <div className="absolute inset-0 z-[1] bg-noise opacity-[0.03] pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#050510] to-transparent z-[2] pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#050510] to-transparent z-[2] pointer-events-none" />


      {/* ── Content — Left aligned on desktop, centered on mobile ── */}
      <Motion.div
        style={{ opacity, scale, y: yText }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
      >
        <div className="md:max-w-[55%] lg:max-w-[50%] flex flex-col items-start text-left">
          {/* Badge */}
          <Motion.div
            initial={{ opacity: 0, x: -30, filter: 'blur(10px)' }}
            animate={{ opacity: 1, x: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1, delay: 0.1 }}
            className="inline-flex items-center gap-2 border border-[#0066FF]/30 bg-[#0066FF]/10 backdrop-blur-md px-4 py-2 rounded-full text-[10px] font-bold tracking-[0.2em] mb-8 uppercase text-[#0066FF]"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0066FF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0066FF]" />
            </span>
            Agence Web & Marketing
          </Motion.div>

          {/* Title */}
          <RevealTitle />

          {/* Subtitle */}
          <Motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="text-gray-400 max-w-md text-sm md:text-base font-medium leading-relaxed mb-10"
          >
            On crée des sites web qui génèrent du <span className="text-white font-semibold">chiffre d'affaires</span>.
            Pas juste des pixels.
          </Motion.p>

          {/* CTAs */}
          <Motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="flex flex-col sm:flex-row gap-3"
          >
            <a href="#contact" className="group relative bg-[#0066FF] hover:bg-[#0052CC] text-white px-8 py-4 rounded-full text-xs font-bold tracking-widest transition-all duration-300 flex items-center gap-2 shadow-lg shadow-[#0066FF]/30 hover:shadow-[#0066FF]/50 hover:scale-[1.02]">
              DÉMARRER MON PROJET
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#solutions" className="group bg-white/5 border border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:border-[#0066FF]/50 hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-white">
              VOIR NOS OFFRES
            </a>
          </Motion.div>

          {/* Stats */}
          <Motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 2 }}
            className="flex gap-8 md:gap-10 mt-10 pt-6 border-t border-white/10"
          >
            {[
              { value: '50+', label: 'Projets' },
              { value: '350%', label: 'ROI moyen' },
              { value: '24h', label: 'Réponse' },
            ].map((stat, i) => (
              <Motion.div key={i} className="text-left" whileHover={{ scale: 1.05 }}>
                <div className="text-xl md:text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-[10px] text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
              </Motion.div>
            ))}
          </Motion.div>
        </div>
      </Motion.div>

      {/* ── Scroll Indicator ── */}
      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <Motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
          <span className="text-[9px] uppercase tracking-widest text-gray-500">Scroll</span>
          <div className="w-[1px] h-10 mx-auto mt-2 bg-gradient-to-b from-[#0066FF] to-transparent" />
        </Motion.div>
      </Motion.div>
    </section>
  );
}
