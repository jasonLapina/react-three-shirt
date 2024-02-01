import {
  AccumulativeShadows,
  RandomizedLight,
  useGLTF,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { easing } from "maath";
import { useRef } from "react";

const Shirt = (props) => {
  const { nodes, materials } = useGLTF("/shirt_baked_collapsed.glb");

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
      />
    </group>
  );
};

export function Backdrop() {
  return (
    <AccumulativeShadows
      temporal
      frames={60}
      alphaTest={0.5}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
      position={[0, 0, -0.14]}
    >
      <RandomizedLight
        amount={4}
        radius={9}
        intensity={0.55}
        ambient={0.25}
        position={[5, 5, -10]}
      />
      <RandomizedLight
        amount={4}
        radius={5}
        intensity={0.25}
        ambient={0.55}
        position={[-5, 5, -9]}
      />
    </AccumulativeShadows>
  );
}

export function CameraRig({ children }) {
  const groupRef = useRef();
  useFrame((state, delta) => {
    easing.dampE(groupRef.current.rotation, [
      -state.pointer.y / 10,
      state.pointer.x / 5,
      0,
      0.25,
      delta,
    ]);
  });
  return <group ref={groupRef}>{children}</group>;
}

export default Shirt;

useGLTF.preload("/shirt_baked_collapsed.glb");
