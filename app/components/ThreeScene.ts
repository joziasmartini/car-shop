import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export const initThreeScene = (
  sceneRef: React.MutableRefObject<HTMLDivElement | null>
) => {
  if (sceneRef.current) {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(-5, -2.5, 4);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // Add a directional light
    const directionalLight = new THREE.DirectionalLight(0xffffff, 30);
    directionalLight.position.set(0, 0, 5); // Adjust the light position
    scene.add(directionalLight);

    // Background color to transparent
    renderer.setClearColor(0x000000, 0);

    const loader = new GLTFLoader();

    let model: any;

    loader.load(
      "3d/free_1972_datsun_240k_gt/scene.gltf",
      (gltf) => {
        model = gltf.scene;
        model.scale.set(0.3, 0.3, 0.2);
        model.rotation.y = 0.2;
        scene.add(model);
      },
      undefined,
      (error) => {
        console.error(error);
      }
    );

    sceneRef.current?.appendChild(renderer.domElement);

    const animate = () => {
      requestAnimationFrame(animate);

      // Rotate the model
      if (model) {
        model.rotation.y += 0.01; // Adjust the rotation speed
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      renderer.dispose();
    };
  }
};
