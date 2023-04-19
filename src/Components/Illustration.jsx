import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Ill } from './Ill';


const WebDesign = () => {
  return (
    <Canvas>
       <Stage int enivornment="city">
        <Ill />
        <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
  )
}

export default WebDesign;
