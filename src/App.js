import { Canvas } from "@react-three/fiber";
import "./App.css";
import { Center, Environment, OrbitControls } from "@react-three/drei";
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
    >
      <ambientLight />
      <Environment preset='city' />
      {/* <OrbitControls /> */}
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
