import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Center, Environment } from "@react-three/drei";
import Shirt, { Backdrop, CameraRig } from "./Shirt";

const App = ({ position = [-1, 0, 2.5], fov = 25 }) => {
  return (
    <Canvas
      camera={{
        position,
        fov,
      }}
      eventSource={document.getElementById("root")}
      eventPrefix='client'
      shadows
      gl={{
        preserveDrawingBuffer: true,
      }}
    >
      <ambientLight />
      <Environment preset='city' />

      <CameraRig>
        <Center>
          <Shirt />
          <Backdrop />
        </Center>
      </CameraRig>
    </Canvas>
  );
};

export default App;
