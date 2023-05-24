// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Navbar from "./components/Nabvar"
import Curriculum from "./components/Curriculum"
import ThreeColumns from "./components/Threecolumns"

function App() {

  return (
   <div>
   <Navbar/>
   <AboutMe/>
   <ThreeColumns/>
   <Contact/>
   <Curriculum />
   <Footer/>

   </div>
  )
}

export default App
