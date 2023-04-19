import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Insta } from './Insta';


const WebDesign = () => {
  return (
    <Canvas>
       <Stage int enivornment="city">
        <Insta />
        <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
  )
}

export default WebDesign;
