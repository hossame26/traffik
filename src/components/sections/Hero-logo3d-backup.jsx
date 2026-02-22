import React, { useRef, useState, useEffect, useMemo, Suspense } from 'react';
import { motion as Motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import gsap from 'gsap';

// ─── Shared state for R3F ───
const sharedState = { mouseX: 0, mouseY: 0, scroll: 0, globalScroll: 0, isDark: true };
if (typeof window !== 'undefined') {
  window.addEventListener('mousemove', (e) => {
    sharedState.mouseX = (e.clientX / window.innerWidth) * 2 - 1;
    sharedState.mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
  });
  window.addEventListener('scroll', () => {
    sharedState.globalScroll = window.scrollY / window.innerHeight;
  }, { passive: true });
}

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
// HERO CANVAS — Logo + particles + postprocessing
// ═══════════════════════════════════════════════════════════

const HeroCanvas = React.lazy(() =>
  Promise.all([
    import('@react-three/fiber'),
    import('@react-three/drei'),
    import('@react-three/postprocessing'),
    import('three'),
  ]).then(([fiber, drei, post, THREE]) => {
    const { Canvas, useFrame } = fiber;
    const { Environment } = drei;
    const { EffectComposer, Bloom, Vignette } = post;

    const chromeMat = {
      color: '#0066FF',
      emissive: '#001855',
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      reflectivity: 1,
      envMapIntensity: 2.5,
    };

    function computeEdge(from, to) {
      const a = new THREE.Vector3(...from);
      const b = new THREE.Vector3(...to);
      const mid = a.clone().add(b).multiplyScalar(0.5);
      const dir = b.clone().sub(a);
      const len = dir.length();
      const quat = new THREE.Quaternion();
      if (len > 0.001) quat.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
      return { pos: [mid.x, mid.y, mid.z], quat, len };
    }

    function SceneBG() {
      const darkColor = useMemo(() => new THREE.Color('#050510'), []);
      const lightColor = useMemo(() => new THREE.Color('#f5f5fa'), []);
      useFrame((state) => {
        const target = sharedState.isDark ? darkColor : lightColor;
        if (state.scene.background) {
          state.scene.background.lerp(target, 0.08);
        } else {
          state.scene.background = target.clone();
        }
      });
      return null;
    }

    function TrafikLogo3D() {
      const groupRef = useRef();
      const autoY = useRef(0);
      const nodesRef = useRef([]);
      const s = 0.7;

      const V = useMemo(() => [
        [-s, -s, -s], [s, -s, -s], [s, s, -s], [-s, s, -s],
        [-s, -s, s], [s, -s, s], [s, s, s], [-s, s, s],
      ], []);

      const edges = useMemo(() => [
        [0, 1], [1, 2], [2, 3], [3, 0],
        [4, 5], [5, 6], [6, 7], [7, 4],
        [0, 4], [1, 5], [2, 6], [3, 7],
      ].map(([a, b]) => computeEdge(V[a], V[b])), [V]);

      const arrow = useMemo(() => {
        const start = new THREE.Vector3(...V[6]);
        const dir = new THREE.Vector3(1, 1, 0.3).normalize();
        const shaftLen = 0.55;
        const mid = start.clone().add(dir.clone().multiplyScalar(shaftLen / 2));
        const tip = start.clone().add(dir.clone().multiplyScalar(shaftLen + 0.09));
        const quat = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
        return { midPos: [mid.x, mid.y, mid.z], tipPos: [tip.x, tip.y, tip.z], len: shaftLen, quat };
      }, [V]);

      useFrame((state, delta) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        autoY.current += delta * 0.2;
        groupRef.current.rotation.y = autoY.current + sharedState.mouseX * 0.4;
        groupRef.current.rotation.x = Math.sin(t * 0.15) * 0.1 + sharedState.mouseY * 0.2;
        groupRef.current.scale.setScalar(1 + Math.sin(t * 0.8) * 0.015);
        const pulse = 0.4 + Math.sin(t * 2) * 0.3;
        nodesRef.current.forEach((m) => { if (m?.material) m.material.emissiveIntensity = pulse; });
      });

      return (
        <group ref={groupRef}>
          {edges.map((e, i) => (
            <mesh key={`e${i}`} position={e.pos} quaternion={e.quat}>
              <cylinderGeometry args={[0.035, 0.035, e.len, 8]} />
              <meshPhysicalMaterial {...chromeMat} />
            </mesh>
          ))}
          {V.map((v, i) => (
            <mesh key={`n${i}`} position={v} ref={(el) => { nodesRef.current[i] = el; }}>
              <sphereGeometry args={[0.075, 16, 16]} />
              <meshPhysicalMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={0.6} metalness={0.9} roughness={0.1} clearcoat={1} envMapIntensity={2} />
            </mesh>
          ))}
          <mesh position={[0, 0.22, 0]}>
            <boxGeometry args={[0.65, 0.12, 0.12]} />
            <meshPhysicalMaterial {...chromeMat} />
          </mesh>
          <mesh position={[0, -0.15, 0]}>
            <boxGeometry args={[0.12, 0.62, 0.12]} />
            <meshPhysicalMaterial {...chromeMat} />
          </mesh>
          <mesh position={arrow.midPos} quaternion={arrow.quat}>
            <cylinderGeometry args={[0.03, 0.03, arrow.len, 8]} />
            <meshPhysicalMaterial {...chromeMat} />
          </mesh>
          <mesh position={arrow.tipPos} quaternion={arrow.quat}>
            <coneGeometry args={[0.065, 0.18, 6]} />
            <meshPhysicalMaterial {...chromeMat} />
          </mesh>
        </group>
      );
    }

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
        if (pointsRef.current) pointsRef.current.rotation.y = state.clock.elapsedTime * 0.003;
      });
      return (
        <points ref={pointsRef}>
          <bufferGeometry>
            <bufferAttribute attach="attributes-position" args={[positions, 3]} />
            <bufferAttribute attach="attributes-color" args={[colors, 3]} />
          </bufferGeometry>
          <pointsMaterial size={0.03} vertexColors sizeAttenuation transparent opacity={0.5} depthWrite={false} />
        </points>
      );
    }

    function DynamicLights() {
      const ambientRef = useRef();
      const d1 = useRef(), d2 = useRef(), d3 = useRef();
      useFrame(() => {
        const dk = sharedState.isDark;
        if (ambientRef.current) ambientRef.current.intensity += ((dk ? 0.15 : 0.6) - ambientRef.current.intensity) * 0.05;
        if (d1.current) d1.current.intensity += ((dk ? 1.5 : 2) - d1.current.intensity) * 0.05;
        if (d2.current) d2.current.intensity += ((dk ? 1 : 1.5) - d2.current.intensity) * 0.05;
        if (d3.current) d3.current.intensity += ((dk ? 0.8 : 1.2) - d3.current.intensity) * 0.05;
      });
      return (
        <>
          <ambientLight ref={ambientRef} intensity={0.15} />
          <directionalLight ref={d1} position={[5, 5, 5]} color="#0066FF" intensity={1.5} />
          <directionalLight ref={d2} position={[-5, -2, 3]} color="#A855F7" intensity={1} />
          <directionalLight ref={d3} position={[0, 5, -5]} color="#06B6D4" intensity={0.8} />
        </>
      );
    }

    function HeroCanvasInner() {
      return (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 2]}
          gl={{ antialias: true, powerPreference: 'high-performance', alpha: true }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <SceneBG />
          <DynamicLights />
          <group position={[1.2, 0, 0]}>
            <TrafikLogo3D />
          </group>
          <AmbientParticles count={500} />
          <Environment preset="night" />
          <EffectComposer>
            <Bloom luminanceThreshold={0.2} luminanceSmoothing={0.9} intensity={1.8} mipmapBlur />
            <Vignette eskil={false} offset={0.2} darkness={0.7} />
          </EffectComposer>
        </Canvas>
      );
    }

    return { default: HeroCanvasInner };
  })
);


// ═══════════════════════════════════════════════════════════
// FLOATING SHAPES OVERLAY — fixed, transparent, crosses sections
// ═══════════════════════════════════════════════════════════

const FloatingOverlay = React.lazy(() =>
  Promise.all([
    import('@react-three/fiber'),
    import('@react-three/drei'),
    import('three'),
  ]).then(([fiber, drei, THREE]) => {
    const { Canvas, useFrame } = fiber;
    const { Float, Environment } = drei;

    function FloatingShapes() {
      const groupRef = useRef();
      const matsRef = useRef([]);

      useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.elapsedTime;
        const gs = sharedState.globalScroll;

        // Parallax: shapes drift down as user scrolls (stay on screen longer)
        groupRef.current.position.y = gs * -3;

        // Mouse parallax (inverted for depth)
        groupRef.current.rotation.y = sharedState.mouseX * -0.06;
        groupRef.current.rotation.x = sharedState.mouseY * -0.04;

        // Fade out gradually (visible across most of the page)
        const fade = Math.max(0, Math.min(1, 1 - (gs - 3) * 0.15));
        matsRef.current.forEach((mat) => {
          if (mat) mat.opacity = fade;
        });
      });

      const shapeMat = (color, emissive, refIdx) => ({
        color,
        emissive,
        emissiveIntensity: 0.3,
        metalness: 0.95,
        roughness: 0.05,
        clearcoat: 1,
        envMapIntensity: 2.5,
        transparent: true,
        opacity: 1,
        ref: (el) => { matsRef.current[refIdx] = el; },
      });

      return (
        <group ref={groupRef}>
          {/* Torus ring — top left */}
          <Float speed={1.8} rotationIntensity={2} floatIntensity={1.2}>
            <mesh position={[-3.5, 1.2, -1.5]} rotation={[0.8, 0.3, 0.2]}>
              <torusGeometry args={[0.4, 0.12, 16, 32]} />
              <meshPhysicalMaterial {...shapeMat('#0066FF', '#001855', 0)} />
            </mesh>
          </Float>

          {/* Small cube — bottom right */}
          <Float speed={1.4} rotationIntensity={3} floatIntensity={1}>
            <mesh position={[3.2, -1.5, 0.5]} rotation={[0.5, 0.8, 0.3]}>
              <boxGeometry args={[0.35, 0.35, 0.35]} />
              <meshPhysicalMaterial {...shapeMat('#A855F7', '#3B0080', 1)} />
            </mesh>
          </Float>

          {/* Pyramid — top right */}
          <Float speed={2} rotationIntensity={2.5} floatIntensity={1.5}>
            <mesh position={[3, 2, -2]} rotation={[0.2, 0.6, 0.1]}>
              <coneGeometry args={[0.3, 0.55, 4]} />
              <meshPhysicalMaterial {...shapeMat('#0066FF', '#001855', 2)} />
            </mesh>
          </Float>

          {/* Chrome sphere — bottom left */}
          <Float speed={2.2} rotationIntensity={0.5} floatIntensity={1.8}>
            <mesh position={[-2.8, -1.8, 1]}>
              <sphereGeometry args={[0.22, 24, 24]} />
              <meshPhysicalMaterial {...shapeMat('#06B6D4', '#003344', 3)} />
            </mesh>
          </Float>

          {/* Diamond — mid right */}
          <Float speed={1.6} rotationIntensity={3.5} floatIntensity={1}>
            <mesh position={[2.8, 0.8, 1.8]} rotation={[0.3, 0.4, 0.7]}>
              <octahedronGeometry args={[0.28]} />
              <meshPhysicalMaterial {...shapeMat('#A855F7', '#3B0080', 4)} />
            </mesh>
          </Float>

          {/* Small torus — top left secondary */}
          <Float speed={1.3} rotationIntensity={2} floatIntensity={0.8}>
            <mesh position={[-2, 2.2, -0.5]} rotation={[1.2, 0.5, 0]}>
              <torusGeometry args={[0.2, 0.07, 12, 24]} />
              <meshPhysicalMaterial {...shapeMat('#06B6D4', '#003344', 5)} />
            </mesh>
          </Float>
        </group>
      );
    }

    function FloatingOverlayInner() {
      return (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 4 }}
        >
          {/* Transparent — no background */}
          <ambientLight intensity={0.3} />
          <directionalLight position={[5, 5, 5]} color="#0066FF" intensity={1.5} />
          <directionalLight position={[-5, -2, 3]} color="#A855F7" intensity={0.8} />
          <directionalLight position={[0, 5, -5]} color="#06B6D4" intensity={0.6} />
          <Environment preset="night" />
          <FloatingShapes />
        </Canvas>
      );
    }

    return { default: FloatingOverlayInner };
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
    tl.fromTo(words1, { y: 100, opacity: 0, rotateX: -90 }, {
      y: 0, opacity: 1, rotateX: 0, duration: 1, ease: 'power4.out', stagger: 0.12,
    });
    tl.fromTo(words2, { y: 80, opacity: 0, rotateX: -70, scale: 0.85 }, {
      y: 0, opacity: 1, rotateX: 0, scale: 1, duration: 0.9, ease: 'power4.out', stagger: 0.035,
    }, '-=0.4');
  }, []);

  return (
    <h1 className="text-4xl sm:text-5xl md:text-[3.5rem] lg:text-[4.2rem] xl:text-[5rem] font-black leading-[0.9] tracking-[-0.04em] mb-6" style={{ perspective: '1000px' }}>
      <div ref={line1Ref} className="overflow-hidden block pb-2">
        {'SITES QUI'.split(' ').map((word, i) => (
          <span key={i} className="word inline-block text-gray-900 dark:text-white mr-[0.25em]" style={{ opacity: 0, transformStyle: 'preserve-3d' }}>
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
// MAIN HERO
// ═══════════════════════════════════════════════════════════

export default function Hero() {
  const targetRef = useRef(null);
  const isMobile = useIsMobile();
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });

  useMotionValueEvent(scrollYProgress, "change", (v) => { sharedState.scroll = v; });

  useEffect(() => {
    const root = document.documentElement;
    const update = () => { sharedState.isDark = root.classList.contains('dark'); };
    update();
    const obs = new MutationObserver(update);
    obs.observe(root, { attributes: true, attributeFilter: ['class'] });
    return () => obs.disconnect();
  }, []);

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const yText = useTransform(scrollYProgress, [0, 0.5], [0, 80]);

  return (
    <>
      <section ref={targetRef} className="relative min-h-screen flex items-center overflow-hidden bg-gray-50 dark:bg-[#050510] transition-colors duration-500">

        {/* ── Hero 3D Canvas (logo + particles) ── */}
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
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-gray-50 dark:from-[#050510] to-transparent z-[2] pointer-events-none transition-colors duration-500" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50 dark:from-[#050510] to-transparent z-[2] pointer-events-none transition-colors duration-500" />

        {/* ── Content ── */}
        <Motion.div
          style={{ opacity, scale, y: yText }}
          className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-20"
        >
          <div className="md:max-w-[65%] lg:max-w-[60%] flex flex-col items-start text-left">
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

            <RevealTitle />

            <Motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="text-gray-500 dark:text-gray-400 max-w-md text-sm md:text-base font-medium leading-relaxed mb-10"
            >
              On crée des sites web qui génèrent du <span className="text-gray-900 dark:text-white font-semibold">chiffre d'affaires</span>.
              Pas juste des pixels.
            </Motion.p>

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
              <a href="#solutions" className="group bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 backdrop-blur-md px-8 py-4 rounded-full text-xs font-bold tracking-widest hover:border-[#0066FF]/50 hover:bg-gray-200 dark:hover:bg-white/10 transition-all duration-300 flex items-center gap-2 text-gray-900 dark:text-white">
                VOIR NOS OFFRES
              </a>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 2 }}
              className="flex gap-8 md:gap-10 mt-10 pt-6 border-t border-gray-200 dark:border-white/10"
            >
              {[
                { value: '50+', label: 'Projets' },
                { value: '350%', label: 'ROI moyen' },
                { value: '24h', label: 'Réponse' },
              ].map((stat, i) => (
                <Motion.div key={i} className="text-left" whileHover={{ scale: 1.05 }}>
                  <div className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-[10px] text-gray-400 dark:text-gray-500 uppercase tracking-wider mt-1">{stat.label}</div>
                </Motion.div>
              ))}
            </Motion.div>
          </div>
        </Motion.div>

        <Motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        >
          <Motion.div animate={{ y: [0, 10, 0] }} transition={{ repeat: Infinity, duration: 2 }}>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 dark:text-gray-500">Scroll</span>
            <div className="w-[1px] h-10 mx-auto mt-2 bg-gradient-to-b from-[#0066FF] to-transparent" />
          </Motion.div>
        </Motion.div>
      </section>

      {/* ── Floating shapes overlay — crosses ALL sections ── */}
      {!isMobile && (
        <Suspense fallback={null}>
          <FloatingOverlay />
        </Suspense>
      )}
    </>
  );
}
