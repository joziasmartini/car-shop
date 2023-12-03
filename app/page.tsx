"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { initThreeScene } from "./components/ThreeScene";

export default function Home() {
  const sceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initThreeScene(sceneRef);
  }, []);

  return (
    <main>
      {/* Include absolute in className below */}
      <div ref={sceneRef} className="z-20 absolute" />
      <Banner />
      <Header />
      <CarList />
      <Footer />
    </main>
  );
}
