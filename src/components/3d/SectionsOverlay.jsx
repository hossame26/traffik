import React, { useRef, useMemo, Suspense, useState, useEffect } from 'react';

const useIsMobile = () => {
  const [m, setM] = useState(true);
  useEffect(() => {
    const c = () => setM(window.innerWidth < 768);
    c(); window.addEventListener('resize', c);
    return () => window.removeEventListener('resize', c);
  }, []);
  return m;
};

const OverlayCanvas = React.lazy(() =>
  Promise.all([
    import('@react-three/fiber'),
    import('@react-three/drei'),
    import('@react-three/postprocessing'),
    import('three'),
  ]).then(([fiber, drei, post, THREE]) => {
    const { Canvas, useFrame } = fiber;
    const { Environment, Float } = drei;
    const { EffectComposer, Bloom } = post;

    // Shared mouse
    const mouse = { x: 0, y: 0 };
    if (typeof window !== 'undefined') {
      window.addEventListener('mousemove', (e) => {
        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
      });
    }

    const chrome = {
      color: '#0066FF',
      emissive: '#001855',
      emissiveIntensity: 0.4,
      metalness: 0.95,
      roughness: 0.05,
      clearcoat: 1,
      clearcoatRoughness: 0.02,
      envMapIntensity: 2.5,
    };

    const purple = { ...chrome, color: '#A855F7', emissive: '#3B0080' };
    const cyan = { ...chrome, color: '#06B6D4', emissive: '#003344' };

    // ─── Visibility hook ───
    function useSectionVis(id) {
      const ref = useRef({ vis: false, prog: 0, opacity: 0 });
      useFrame(() => {
        const el = document.getElementById(id);
        if (!el) { ref.current.vis = false; ref.current.opacity *= 0.92; return; }
        const r = el.getBoundingClientRect();
        const vh = window.innerHeight;
        const vis = r.top < vh * 0.9 && r.bottom > vh * 0.1;
        const center = 1 - Math.abs((r.top + r.height / 2 - vh / 2) / (vh * 0.8));
        const targetOp = vis ? Math.max(0, Math.min(1, center * 1.5)) : 0;
        ref.current.vis = vis;
        ref.current.prog = Math.max(0, Math.min(1, 1 - r.top / vh));
        ref.current.opacity += (targetOp - ref.current.opacity) * 0.06;
      });
      return ref;
    }

    // ─── SOLUTIONS: Chrome monitor with glowing screen ───
    function SolutionsObj() {
      const grp = useRef();
      const v = useSectionVis('solutions');

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { vis, opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.4);
        grp.current.position.set(3.2 + mouse.x * 0.3, 0.2 + Math.sin(t * 0.5) * 0.2 + mouse.y * 0.2, -1);
        grp.current.rotation.y = t * 0.15 + mouse.x * 0.15;
        grp.current.rotation.x = Math.sin(t * 0.12) * 0.08;
      });

      return (
        <group ref={grp}>
          {/* Frame */}
          <mesh>
            <boxGeometry args={[2.2, 1.4, 0.07]} />
            <meshPhysicalMaterial color="#0a0a12" metalness={0.95} roughness={0.05} clearcoat={1} envMapIntensity={2} />
          </mesh>
          {/* Screen glow */}
          <mesh position={[0, 0, 0.04]}>
            <planeGeometry args={[2, 1.2]} />
            <meshPhysicalMaterial color="#020818" emissive="#0066FF" emissiveIntensity={0.2} metalness={0.3} roughness={0.4} />
          </mesh>
          {/* Code lines */}
          {[0.35, 0.15, -0.05, -0.25, -0.4].map((y, i) => (
            <mesh key={i} position={[-0.2 + (i % 3) * 0.1, y, 0.05]}>
              <boxGeometry args={[0.5 + (i * 0.18) % 0.8, 0.035, 0.005]} />
              <meshBasicMaterial color={i % 2 === 0 ? '#0066FF' : '#A855F7'} transparent opacity={0.7} />
            </mesh>
          ))}
          {/* Holographic ring */}
          <mesh position={[0, 0, 0.3]} rotation={[Math.PI / 2, 0, 0]}>
            <torusGeometry args={[0.5, 0.008, 6, 32]} />
            <meshPhysicalMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={1.5} transparent opacity={0.4} />
          </mesh>
          {/* Stand */}
          <mesh position={[0, -0.9, 0]}>
            <cylinderGeometry args={[0.04, 0.04, 0.4, 8]} />
            <meshPhysicalMaterial {...chrome} />
          </mesh>
          <mesh position={[0, -1.1, 0]} rotation={[Math.PI / 2, 0, 0]}>
            <cylinderGeometry args={[0.25, 0.25, 0.02, 16]} />
            <meshPhysicalMaterial {...chrome} />
          </mesh>
          <pointLight position={[0, 0, 1.5]} color="#0066FF" intensity={3} distance={5} decay={2} />
        </group>
      );
    }

    // ─── PROCESS: Chrome rocket with animated flames ───
    function ProcessObj() {
      const grp = useRef();
      const flame = useRef();
      const v = useSectionVis('process');

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.2);
        grp.current.position.set(-3.5 + mouse.x * 0.2, 0.3 + Math.sin(t * 0.4) * 0.25 + mouse.y * 0.2, -1);
        grp.current.rotation.y = t * 0.12;
        grp.current.rotation.z = 0.25 + Math.sin(t * 0.2) * 0.05;
        if (flame.current) {
          flame.current.scale.y = 0.8 + Math.sin(t * 10) * 0.3;
          flame.current.material.emissiveIntensity = 1.5 + Math.sin(t * 8) * 0.8;
        }
      });

      return (
        <group ref={grp}>
          {/* Body */}
          <mesh>
            <cylinderGeometry args={[0.18, 0.24, 1.5, 16]} />
            <meshPhysicalMaterial color="#0a0a18" metalness={0.95} roughness={0.05} clearcoat={1} envMapIntensity={2.5} />
          </mesh>
          {/* Blue stripe */}
          <mesh position={[0, 0.1, 0.001]}>
            <cylinderGeometry args={[0.19, 0.21, 0.3, 16]} />
            <meshPhysicalMaterial {...chrome} />
          </mesh>
          {/* Nose */}
          <mesh position={[0, 0.95, 0]}>
            <coneGeometry args={[0.18, 0.5, 16]} />
            <meshPhysicalMaterial {...chrome} />
          </mesh>
          {/* Window */}
          <mesh position={[0, 0.35, 0.2]}>
            <circleGeometry args={[0.07, 16]} />
            <meshPhysicalMaterial color="#0088FF" emissive="#0088FF" emissiveIntensity={1.2} metalness={0.3} roughness={0.1} />
          </mesh>
          {/* Fins */}
          {[0, 2.09, 4.19].map((a, i) => (
            <mesh key={i} position={[Math.sin(a) * 0.24, -0.65, Math.cos(a) * 0.24]} rotation={[0, -a, 0.3]}>
              <boxGeometry args={[0.02, 0.4, 0.22]} />
              <meshPhysicalMaterial {...chrome} />
            </mesh>
          ))}
          {/* Flame outer */}
          <mesh ref={flame} position={[0, -1, 0]}>
            <coneGeometry args={[0.2, 0.7, 8]} />
            <meshPhysicalMaterial color="#FF6600" emissive="#FF4400" emissiveIntensity={2} transparent opacity={0.85} />
          </mesh>
          {/* Flame inner */}
          <mesh position={[0, -0.9, 0]}>
            <coneGeometry args={[0.1, 0.4, 8]} />
            <meshPhysicalMaterial color="#FFCC00" emissive="#FFAA00" emissiveIntensity={3} transparent opacity={0.9} />
          </mesh>
          <pointLight position={[0, -1.2, 0]} color="#FF6600" intensity={5} distance={4} decay={2} />
          <pointLight position={[0, 0.5, 0.5]} color="#0066FF" intensity={2} distance={3} decay={2} />
        </group>
      );
    }

    // ─── GROWTH: Chrome globe with orbiting rings + dots ───
    function GrowthObj() {
      const grp = useRef();
      const ring1 = useRef();
      const ring2 = useRef();
      const v = useSectionVis('growth');

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.3);
        grp.current.position.set(3.5 + mouse.x * 0.3, mouse.y * 0.2, -1.5);
        grp.current.rotation.y = t * 0.1;
        if (ring1.current) ring1.current.rotation.z = t * 0.35;
        if (ring2.current) ring2.current.rotation.z = -t * 0.25;
      });

      return (
        <group ref={grp}>
          {/* Globe */}
          <mesh>
            <sphereGeometry args={[0.9, 32, 32]} />
            <meshPhysicalMaterial color="#050520" emissive="#0044AA" emissiveIntensity={0.12} metalness={0.97} roughness={0.03} clearcoat={1} envMapIntensity={3} />
          </mesh>
          {/* Latitude lines */}
          {[-0.5, -0.25, 0, 0.25, 0.5].map((y, i) => {
            const r = Math.sqrt(0.81 - y * y);
            return (
              <mesh key={i} position={[0, y, 0]} rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[r, 0.006, 4, 40]} />
                <meshBasicMaterial color="#0066FF" transparent opacity={0.35} />
              </mesh>
            );
          })}
          {/* Longitude lines */}
          {[0, 1.05, 2.09].map((a, i) => (
            <mesh key={i} rotation={[0, a, 0]}>
              <torusGeometry args={[0.905, 0.005, 4, 40]} />
              <meshBasicMaterial color="#0066FF" transparent opacity={0.25} />
            </mesh>
          ))}
          {/* Ring 1 */}
          <group ref={ring1} rotation={[0.6, 0, 0]}>
            <mesh>
              <torusGeometry args={[1.4, 0.02, 8, 64]} />
              <meshPhysicalMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={1} metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[1.4, 0, 0]}>
              <sphereGeometry args={[0.06, 12, 12]} />
              <meshPhysicalMaterial color="#0088FF" emissive="#0088FF" emissiveIntensity={2} />
            </mesh>
          </group>
          {/* Ring 2 */}
          <group ref={ring2} rotation={[1.3, 0.5, 0]}>
            <mesh>
              <torusGeometry args={[1.7, 0.015, 8, 64]} />
              <meshPhysicalMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={0.8} metalness={0.9} roughness={0.1} />
            </mesh>
            <mesh position={[1.7, 0, 0]}>
              <sphereGeometry args={[0.05, 12, 12]} />
              <meshPhysicalMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={2} />
            </mesh>
          </group>
          <pointLight color="#0066FF" intensity={4} distance={6} decay={2} />
        </group>
      );
    }

    // ─── ADS: Chrome megaphone with expanding sound waves ───
    function AdsObj() {
      const grp = useRef();
      const waves = useRef([]);
      const v = useSectionVis('ads');

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.3);
        grp.current.position.set(-3 + mouse.x * 0.2, 0.2 + Math.sin(t * 0.4) * 0.15 + mouse.y * 0.15, -1);
        grp.current.rotation.y = t * 0.1;
        waves.current.forEach((w, i) => {
          if (!w) return;
          const phase = (t * 1.2 + i * 0.9) % 3;
          const s = 0.5 + phase * 0.7;
          w.scale.set(s, s, 1);
          w.material.opacity = Math.max(0, (1 - phase / 3) * 0.5);
        });
      });

      return (
        <group ref={grp} rotation={[0, 0, -0.25]}>
          {/* Cone */}
          <mesh rotation={[0, 0, Math.PI / 2]}>
            <cylinderGeometry args={[0.12, 0.55, 1.3, 16, 1, true]} />
            <meshPhysicalMaterial color="#0a0a18" metalness={0.95} roughness={0.05} clearcoat={1} envMapIntensity={2.5} side={THREE.DoubleSide} />
          </mesh>
          {/* Front ring */}
          <mesh position={[0.65, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <torusGeometry args={[0.55, 0.03, 8, 32]} />
            <meshPhysicalMaterial {...chrome} emissiveIntensity={0.8} />
          </mesh>
          {/* Back cap */}
          <mesh position={[-0.65, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
            <circleGeometry args={[0.12, 16]} />
            <meshPhysicalMaterial {...chrome} />
          </mesh>
          {/* Handle */}
          <mesh position={[-0.4, -0.4, 0]} rotation={[0, 0, 0.5]}>
            <cylinderGeometry args={[0.05, 0.05, 0.5, 8]} />
            <meshPhysicalMaterial color="#111" metalness={0.9} roughness={0.1} clearcoat={1} />
          </mesh>
          {/* Sound waves */}
          {[0, 1, 2].map((i) => (
            <mesh key={i} ref={(el) => { waves.current[i] = el; }} position={[1.1, 0, 0]} rotation={[0, Math.PI / 2, 0]}>
              <torusGeometry args={[0.35 + i * 0.1, 0.015, 4, 24, Math.PI * 1.3]} />
              <meshBasicMaterial color="#0066FF" transparent opacity={0.4} side={THREE.DoubleSide} />
            </mesh>
          ))}
          <pointLight position={[1.5, 0, 0]} color="#0066FF" intensity={4} distance={5} decay={2} />
        </group>
      );
    }

    // ─── PROJECTS: Floating chrome gallery frames ───
    function ProjectsObj() {
      const grp = useRef();
      const v = useSectionVis('projets');

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1);
        grp.current.position.set(3 + mouse.x * 0.3, mouse.y * 0.2, -2);
        grp.current.rotation.y = Math.sin(t * 0.12) * 0.15;
      });

      const frames = [
        { pos: [-0.7, 0.3, 0], rot: [0, 0.25, 0.02], w: 1.1, h: 0.75, c: '#0066FF' },
        { pos: [0.6, -0.15, 0.4], rot: [0, -0.2, -0.02], w: 0.95, h: 0.65, c: '#A855F7' },
        { pos: [0, 0.55, -0.6], rot: [0, 0.08, 0], w: 1.25, h: 0.8, c: '#06B6D4' },
      ];

      return (
        <group ref={grp}>
          {frames.map((f, i) => (
            <Float key={i} speed={1.2 + i * 0.3} rotationIntensity={0.1} floatIntensity={0.3}>
              <group position={f.pos} rotation={f.rot}>
                <mesh>
                  <boxGeometry args={[f.w + 0.06, f.h + 0.06, 0.025]} />
                  <meshPhysicalMaterial color="#0a0a12" metalness={0.95} roughness={0.05} clearcoat={1} envMapIntensity={2} />
                </mesh>
                <mesh position={[0, 0, 0.015]}>
                  <planeGeometry args={[f.w, f.h]} />
                  <meshPhysicalMaterial color="#030310" emissive={f.c} emissiveIntensity={0.08} metalness={0.4} roughness={0.3} />
                </mesh>
                <pointLight position={[0, 0, 0.4]} color={f.c} intensity={0.6} distance={1.5} decay={2} />
              </group>
            </Float>
          ))}
        </group>
      );
    }

    // ─── TESTIMONIALS: Golden star cluster ───
    function TestimonialsObj() {
      const grp = useRef();
      const starsRef = useRef([]);
      const v = useSectionVis('temoignages');

      const starShape = useMemo(() => {
        const s = new THREE.Shape();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? 1 : 0.4;
          const a = (i * Math.PI) / 5 - Math.PI / 2;
          if (i === 0) s.moveTo(Math.cos(a) * r, Math.sin(a) * r);
          else s.lineTo(Math.cos(a) * r, Math.sin(a) * r);
        }
        s.closePath();
        return s;
      }, []);

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.1);
        grp.current.position.set(-3.2 + mouse.x * 0.2, mouse.y * 0.2, -1.5);
        grp.current.rotation.y = t * 0.08;
        starsRef.current.forEach((s, i) => {
          if (s) {
            s.rotation.y = t * (0.3 + i * 0.15);
            s.rotation.z = Math.sin(t * 0.4 + i) * 0.1;
          }
        });
      });

      const stars = [
        { pos: [0, 0.4, 0], sc: 0.35, c: '#FFD700', e: '#FFD700' },
        { pos: [-0.8, 0, 0.2], sc: 0.22, c: '#0066FF', e: '#0066FF' },
        { pos: [0.75, -0.1, -0.2], sc: 0.25, c: '#0066FF', e: '#0066FF' },
        { pos: [-0.35, -0.5, 0.3], sc: 0.18, c: '#A855F7', e: '#A855F7' },
        { pos: [0.5, 0.55, 0.15], sc: 0.2, c: '#A855F7', e: '#A855F7' },
      ];

      return (
        <group ref={grp}>
          {stars.map((s, i) => (
            <Float key={i} speed={1.5 + i * 0.2} rotationIntensity={0.4} floatIntensity={0.3}>
              <group ref={(el) => { starsRef.current[i] = el; }} position={s.pos} scale={s.sc}>
                <mesh>
                  <extrudeGeometry args={[starShape, { depth: 0.12, bevelEnabled: true, bevelThickness: 0.03, bevelSize: 0.02, bevelSegments: 2 }]} />
                  <meshPhysicalMaterial color={s.c} emissive={s.e} emissiveIntensity={0.8} metalness={0.9} roughness={0.1} clearcoat={1} envMapIntensity={2} />
                </mesh>
              </group>
            </Float>
          ))}
          <pointLight position={[0, 0.4, 1]} color="#FFD700" intensity={3} distance={5} decay={2} />
        </group>
      );
    }

    // ─── FAQ: Glowing question mark ───
    function FAQObj() {
      const grp = useRef();
      const v = useSectionVis('faq');

      const curve = useMemo(() => {
        const pts = [];
        for (let i = 0; i <= 20; i++) {
          const t = (i / 20) * Math.PI * 1.5;
          pts.push(new THREE.Vector3(Math.cos(t) * 0.35, Math.sin(t) * 0.35 + 0.4, 0));
        }
        pts.push(new THREE.Vector3(0, 0.05, 0));
        return new THREE.CatmullRomCurve3(pts);
      }, []);

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 1.8);
        grp.current.position.set(3.2 + mouse.x * 0.2, 0.2 + Math.sin(t * 0.5) * 0.15 + mouse.y * 0.15, -1.5);
        grp.current.rotation.y = Math.sin(t * 0.25) * 0.3;
      });

      return (
        <group ref={grp}>
          <mesh>
            <tubeGeometry args={[curve, 32, 0.07, 8, false]} />
            <meshPhysicalMaterial {...chrome} emissiveIntensity={0.8} />
          </mesh>
          <mesh position={[0, -0.18, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshPhysicalMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={1.5} metalness={0.9} roughness={0.1} clearcoat={1} />
          </mesh>
          {/* Glow ring */}
          <mesh position={[0, 0.25, 0]}>
            <torusGeometry args={[0.6, 0.01, 6, 32]} />
            <meshPhysicalMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={1} transparent opacity={0.3} />
          </mesh>
          <pointLight position={[0, 0.3, 0.8]} color="#0066FF" intensity={3} distance={4} decay={2} />
        </group>
      );
    }

    // ─── CONTACT: DNA helix with energy ───
    function ContactObj() {
      const grp = useRef();
      const v = useSectionVis('contact');

      const { c1, c2, bridges } = useMemo(() => {
        const p1 = [], p2 = [], br = [];
        const seg = 50;
        for (let i = 0; i <= seg; i++) {
          const t = (i / seg) * Math.PI * 3;
          const x = (i / seg) * 10 - 5;
          const r = 0.55;
          p1.push(new THREE.Vector3(x, Math.sin(t) * r, Math.cos(t) * r));
          p2.push(new THREE.Vector3(x, Math.sin(t + Math.PI) * r, Math.cos(t + Math.PI) * r));
          if (i % 6 === 0 && i > 0 && i < seg) {
            const a = new THREE.Vector3(x, Math.sin(t) * r, Math.cos(t) * r);
            const b = new THREE.Vector3(x, Math.sin(t + Math.PI) * r, Math.cos(t + Math.PI) * r);
            const mid = a.clone().add(b).multiplyScalar(0.5);
            const dir = b.clone().sub(a);
            const len = dir.length();
            const q = new THREE.Quaternion();
            if (len > 0.001) q.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir.normalize());
            br.push({ pos: [mid.x, mid.y, mid.z], quat: q, len });
          }
        }
        return { c1: new THREE.CatmullRomCurve3(p1), c2: new THREE.CatmullRomCurve3(p2), bridges: br };
      }, []);

      useFrame(({ clock }) => {
        if (!grp.current) return;
        const { opacity } = v.current;
        const t = clock.elapsedTime;
        grp.current.visible = opacity > 0.01;
        grp.current.scale.setScalar(opacity * 0.65);
        grp.current.position.set(mouse.x * 0.3, mouse.y * 0.2, -3);
        grp.current.rotation.x = t * 0.06;
        grp.current.rotation.y = Math.sin(t * 0.1) * 0.1;
      });

      return (
        <group ref={grp}>
          <mesh>
            <tubeGeometry args={[c1, 80, 0.04, 8, false]} />
            <meshPhysicalMaterial color="#0066FF" emissive="#0066FF" emissiveIntensity={1.2} metalness={0.8} roughness={0.1} clearcoat={1} transparent opacity={0.9} />
          </mesh>
          <mesh>
            <tubeGeometry args={[c2, 80, 0.04, 8, false]} />
            <meshPhysicalMaterial color="#A855F7" emissive="#A855F7" emissiveIntensity={1} metalness={0.8} roughness={0.1} clearcoat={1} transparent opacity={0.9} />
          </mesh>
          {bridges.map((b, i) => (
            <mesh key={i} position={b.pos} quaternion={b.quat}>
              <cylinderGeometry args={[0.015, 0.015, b.len, 4]} />
              <meshPhysicalMaterial color="#06B6D4" emissive="#06B6D4" emissiveIntensity={1} transparent opacity={0.6} />
            </mesh>
          ))}
          <pointLight position={[-2, 0, 1]} color="#0066FF" intensity={2} distance={5} decay={2} />
          <pointLight position={[2, 0, 1]} color="#A855F7" intensity={2} distance={5} decay={2} />
        </group>
      );
    }

    // ─── Main scene ───
    function OverlayScene() {
      return (
        <Canvas
          camera={{ position: [0, 0, 6], fov: 50 }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
          style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 3 }}
        >
          <ambientLight intensity={0.2} />
          <directionalLight position={[5, 5, 5]} color="#0066FF" intensity={1.5} />
          <directionalLight position={[-5, -2, 3]} color="#A855F7" intensity={0.6} />
          <directionalLight position={[0, 5, -5]} color="#06B6D4" intensity={0.4} />
          <SolutionsObj />
          <ProcessObj />
          <GrowthObj />
          <AdsObj />
          <ProjectsObj />
          <TestimonialsObj />
          <FAQObj />
          <ContactObj />
          <Environment preset="night" />
          <EffectComposer>
            <Bloom luminanceThreshold={0.15} luminanceSmoothing={0.9} intensity={2} mipmapBlur />
          </EffectComposer>
        </Canvas>
      );
    }

    return { default: OverlayScene };
  })
);

export default function SectionsOverlay() {
  const isMobile = useIsMobile();
  if (isMobile) return null;
  return (
    <Suspense fallback={null}>
      <OverlayCanvas />
    </Suspense>
  );
}
