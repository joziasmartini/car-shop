"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { initThreeScene } from "./components/ThreeSceneHeader";

export default function Home() {
  const headerSceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initThreeScene(headerSceneRef);
  }, []);

  return (
    <main>
      <div ref={headerSceneRef} className="z-20 absolute mt-12" />
      {/* <Banner /> */}
      <Header />
      <CarList />
      <Footer />
    </main>
  );
}
