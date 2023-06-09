/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 Develop.gltf --transform
Author: AnixMoonLight (https://sketchfab.com/ani111)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/kawaii-skeleton-cat-cup-c286ac7a17ac401d80880e120b7e9acb
Title: Kawaii Skeleton Cat Cup
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Develop(props) {
  const { nodes, materials } = useGLTF('/Develop-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <group scale={0.01}>
        <mesh geometry={nodes.SkCatGl_SkCatGl_0.geometry} material={materials.SkCatGl} position={[-0.02, 0, 0.06]} rotation={[-Math.PI / 2, 0, -0.46]} scale={100} />
      </group>
    </group>
  )
}

useGLTF.preload('/Develop-transformed.glb')
