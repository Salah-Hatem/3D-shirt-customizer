import { AccumulativeShadows, RandomizedLight } from "@react-three/drei";
import { useRef } from "react";
const Backdrop = () => {
  const shadows = useRef();
  return (
    <AccumulativeShadows
      position={[0, 0, -0.14]}
      ref={shadows}
      frames={60}
      alphaTest={0.85}
      scale={10}
      rotation={[Math.PI / 2, 0, 0]}
    >
      <RandomizedLight
        intensity={2}
        amount={4}
        radius={9}
        ambient={0.25}
        position={[5, 5, -10]}
      />
    </AccumulativeShadows>
  );
};
export default Backdrop;
