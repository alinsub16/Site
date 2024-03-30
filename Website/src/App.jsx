import React from 'react'
import './App.css'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Skills from './Pages/Skills/Skills'
import Nav from './Components/Nav/Nav'
import Message from './Components/Message/Message'
import Footer from './Components/Footer/Footer'





function App() {

  return (
    <>
      <Nav />
      <Home/>
      <About />
      <Skills />
      <Message />
      <Footer />
    </>
  )
}

export default App
