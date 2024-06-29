import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Apapun from './components/Apapun'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Skills from './components/Skills'
import Project from './components/Project'
import Contact from './components/Contact'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
    <Banner></Banner>
    <Skills></Skills>
    <Project></Project>
    <Contact></Contact>
    <Footer></Footer>
    </>
  )
}

export default App
