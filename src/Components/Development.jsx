import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Develop } from './Develop';


const Development = () => {
  return (
    <Canvas>
       <Stage int enivornment="city">
        <Develop />
        <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
  )
}

export default Development;
