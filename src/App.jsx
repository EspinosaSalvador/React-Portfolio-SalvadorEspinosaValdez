// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AboutMe from "./components/AboutMe"
import Footer from "./components/Footer"
import Navbar from "./components/Nabvar"
import ThreeColumns from "./components/threeColumns"

function App() {

  return (
   <div>
   <Navbar/>
   <AboutMe/>
   <ThreeColumns/>
   <Footer/>

   </div>
  )
}

export default App
