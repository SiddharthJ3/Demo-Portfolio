import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React from 'react'
import { Product } from './Product';


const ProductDesign = () => {
  return (
    <Canvas>
       <Stage int enivornment="city">
        <Product />
        <OrbitControls enableZoom={false} autoRotate/>
      </Stage>
    </Canvas>
  )
}

export default ProductDesign;
