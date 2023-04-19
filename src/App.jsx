import React from 'react'
import Hero from './Components/Hero'
import Intro from './Components/Intro'
import Works from './Components/Works'
import Contact from './Components/Contact'
import styled from 'styled-components'
import './App.css'

const Container = styled.div`
   height: 100vh;
   scroll-snap-type: y mandatory;
   scroll-behavior: smooth;
   overflow-y: auto;
   scrollbar-width: none;
   color: white;
   background-image: url("./Images/bg.jpeg");
   &::-webkit-scrollbar{
    display: none;
   }
`

const App = () => {
  return (
    <Container>
      <Hero />
      <Intro />
      <Works />
      <Contact />
    </Container>
  )
}

export default App;
