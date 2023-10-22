"use client";

import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import Header from "./components/Header";
import Banner from "./components/Banner";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";

export default function Home() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sceneRef.current) {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
      const renderer = new THREE.WebGLRenderer({ alpha: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      scene.background = null; // or use 0x00000000

      const loader = new GLTFLoader(); // Use the GLTFLoader from 'three-gltf-loader'

      // Load your 3D model
      loader.load("3d/free_1972_datsun_240k_gt/scene.gltf", (gltf) => {
        const model = gltf.scene;
        scene.add(model);
      });

      sceneRef.current?.appendChild(renderer.domElement);

      const animate = () => {
        requestAnimationFrame(animate);
        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, []);

  return (
    <main>
      {/* Include absolute in className below */}
      <div ref={sceneRef} className="z-20" />
      <Banner />
      <Header />
      <CarList />
      <Footer />
    </main>
  );
}
