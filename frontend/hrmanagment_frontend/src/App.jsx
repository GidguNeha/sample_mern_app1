import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import Service from './pages/service'
import { Routes, Route } from 'react-router-dom'



function App() {

  return(
    <div>
      <Header/>
         <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
            
         </Routes>
    
    <footer/>
    </div>
  )
}
export default App
