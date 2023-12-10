"use client";

import Header from "./components/Header";
import Banner from "./components/Banner";
import CarList from "./components/CarList";
import Footer from "./components/Footer";
import { useEffect, useRef } from "react";
import { initThreeScene } from "./components/ThreeSceneHeader";
import { initThreeSceneTwo } from "./components/ThreeSceneTwo";

export default function Home() {
  const headerSceneRef = useRef<HTMLDivElement | null>(null);
  const firstCarSceneRef = useRef<HTMLDivElement | null>(null);
  const secondCarSceneRef = useRef<HTMLDivElement | null>(null);
  const thirdCarSceneRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    initThreeScene(headerSceneRef);
    initThreeSceneTwo(firstCarSceneRef);
    initThreeSceneTwo(secondCarSceneRef);
    initThreeSceneTwo(thirdCarSceneRef);
  }, []);

  return (
    <main>
      <div ref={headerSceneRef} className="z-20 absolute" />
      <Banner />
      <Header />
      <CarList />
      <Footer />
    </main>
  );
}
