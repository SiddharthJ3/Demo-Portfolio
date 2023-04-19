import React, { useRef } from "react";
import { PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const textRef = useRef();
  useFrame(
    (state) =>
      (textRef.current.position.x = Math.sin(state.clock.elapsedTime) * 2)
  );
  return (
    <mesh>
      <boxGeometry />
      <meshStandardMaterial>
        <RenderTexture attach="map">
          <PerspectiveCamera makeDefault position={[0, 0, 5]} />
          <color attach="background" args={["#dc9dcd"]} />
          <Text ref={textRef} fontSize={3} color="#555">
            hello
          </Text>
        </RenderTexture>
      </meshStandardMaterial>
    </mesh>
  );
};

export default Cube;





// import React, { useRef, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from "@react-three/drei";
// import styled from "styled-components";

// const Container = styled.div`
//   height: 100vh;
//   width: 100%;
//  scroll-snap-align: center;
//  `
// function Box(props) {
//   const mesh = useRef();
//   useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
//   return (
//     <mesh {...props} ref={mesh}>
//       <mesh>
//         <boxGeometry />
//         <meshStandardMaterial>
//           <OrbitControls enableZoom={false} autoRotate={'true'} />
//           <RenderTexture attach="map">
//             <PerspectiveCamera makeDefault position={[0, 0, 5]} />
//             <color attach="background" args={["#dc9dcd"]} />
//             <Text ref={mesh} fontSize={3} color="#555">
//               {'hey'}
//             </Text>
//           </RenderTexture>
//         </meshStandardMaterial>
//       </mesh>
//     </mesh>
//   );
// }


// export default function Test() {
//   return (
//     <Container>
//       <Canvas>
//         <ambientLight />
//         <Box position={[0, 0, 0]} />
//       </Canvas>
//     </Container>
//   );
// }



