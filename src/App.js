import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Center, OrbitControls } from "@react-three/drei";
import Shirt from "./Shirt";

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      camera={{
        position,
        fov,
      }}
      eventSource={document.getElementById("root")}
      eventPrefix='client'
    >
      <OrbitControls />
      <Center>
        <Shirt />
      </Center>
    </Canvas>
  );
};

export default App;
