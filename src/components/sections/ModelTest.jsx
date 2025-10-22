"use client";
import * as THREE from "three";
import { Suspense, useEffect, useRef, useState } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

function CameraController() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
  }, [camera]);
  return null;
}

function TrophyModel({ isMobile, isActive }) {
  const { scene } = useGLTF("/models/last.glb");
  const { invalidate } = useThree();
  const ref = useRef();

  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh && o.material) {
        o.material.metalness = 1;
        o.material.roughness = 0.2;
        o.material.envMapIntensity = 0.3;
      }
    });
  }, [scene]);

  useFrame((_, delta) => {
    if (isActive && ref.current) {
      ref.current.rotation.y += delta * 0.5;
      invalidate();
    }
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={isMobile ? 4 : 10}
      position={[0, 0, 0]}
      rotation={[0, 0, -0.3]}
    />
  );
}

export default function ModelTrophy({ firstOffset, isMobile, loopY }) {
  const [isActive, setIsActive] = useState(true);

  useEffect(() => {
    const visualStart = 0;           // 첫 섹션 시작점
    const visualEnd = 2000;          // VisualSec 끝나는 Y
    const footerStart = 6000;        // FooterSec 시작점
    const footerEnd = 7000;          // FooterSec 끝나는 Y

    if ((loopY >= visualStart && loopY < visualEnd) || (loopY > footerStart && loopY < footerEnd)) {
      setIsActive(true); // ✅ Trophy 활성화
    } else {
      setIsActive(false); // ❌ Trophy 비활성화 (렌더 중단)
    }
  }, [loopY]);

  return (
    <Canvas
      frameloop="demand" // 기본적으로 정지 상태
      style={{
        position: "absolute",
        top: isMobile ? 0 : firstOffset,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
      gl={{
        antialias: false,
        powerPreference: "high-performance",
      }}
    >
      <Suspense fallback={null}>
        <CameraController />
        <ambientLight intensity={1.2} color="#000" />
        <Environment preset="night" background={false} intensity={0.25} />
        <TrophyModel isMobile={isMobile} isActive={isActive} />
      </Suspense>
    </Canvas>
  );
}
