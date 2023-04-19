import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Reactlogo } from './Reactlogo';


const WebDesign = () => {
  return (
    <Canvas>
       <Stage int enivornment="city">
        <Reactlogo />
        <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
  )
}

export default WebDesign;
