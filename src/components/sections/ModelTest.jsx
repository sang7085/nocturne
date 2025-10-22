"use client";
import * as THREE from "three";
import { Suspense, useEffect, useRef } from "react";
import { Canvas, useThree, useFrame } from "@react-three/fiber";
import { useGLTF, Environment } from "@react-three/drei";

// ✅ 카메라 컨트롤러
function CameraController() {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(0, 0, 5);
    camera.lookAt(0, 0, 0);
    camera.fov = 45;
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

// ✅ GLB 모델 컴포넌트 (Canvas 내부에서만 호출!)
function TrophyModel({ isMobile }) {
  const { scene } = useGLTF("/models/last.glb");
  const ref = useRef();

  // 🎨 재질 세팅
  useEffect(() => {
    scene.traverse((o) => {
      if (o.isMesh && o.material) {
        o.material.metalness = 1;
        o.material.roughness = 0.2;
        o.material.envMapIntensity = 0.3;
        o.material.needsUpdate = true;
      }
    });
  }, [scene]);

  // 🎞 회전 애니메이션
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.02;
  });

  return (
    <primitive
      ref={ref}
      object={scene}
      scale={isMobile ? 4 : 7}
      position={[0, 0, 0]}
      rotation={[0, 0, -0.3]}
    />
  );
}

// ✅ 메인 컴포넌트
export default function ModelTrophy({ firstOffset, isMobile }) {
  return (
    <Canvas
      style={{
        position: "absolute",
        top: isMobile ? 0 : firstOffset,
        left: 0,
        width: "100%",
        height: "100vh",
        pointerEvents: "none",
        zIndex: 1,
      }}
    >
      <Suspense fallback={null}>
        <CameraController />
        <directionalLight position={[0, 5, 5]} intensity={1} color="#820505" />
        <ambientLight intensity={1.2} color="#000" />
        <Environment preset="night" background={false} intensity={0.25} />
        <TrophyModel isMobile={isMobile} />
      </Suspense>
    </Canvas>
  );
}
