import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

export default function Home() {
  const loader = new GLTFLoader();
  let scene: any;

  loader.load(
    // resource URL
    "3d/free_1972_datsun_240k_gt/scene.gltf",
    // called when the resource is loaded
    function (gltf) {
      scene.add(gltf.scene);

      gltf.animations; // Array<THREE.AnimationClip>
      gltf.scene; // THREE.Group
      gltf.scenes; // Array<THREE.Group>
      gltf.cameras; // Array<THREE.Camera>
      gltf.asset; // Object
    },
    // called while loading is progressing
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
    },
    // called when loading has errors
    function (error) {
      console.log("An error happened: ", error);
    }
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24"></main>
  );
}
