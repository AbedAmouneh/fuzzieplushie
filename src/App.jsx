import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import AboutUs from './AboutUs'

function App() {
  return (
    <>
      <div className='app'>
        <Navbar />
        <AboutUs />
        <Footer />
      </div>
    </>
  )
}

export default App
