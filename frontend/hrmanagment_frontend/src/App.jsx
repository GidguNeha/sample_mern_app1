import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import footer from './components/footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/home'
import About from './pages/about'
import contact from './pages/contact'
import {Routes,Route} from 'react-router-dom'



function App() {

  return(
    <div>
      <Header/>
         <Routes>
            <Route> path="/" element={<home></home>}</Route>
            <Route> path="/about" element={<about></about>}</Route>
            <Route> path="/contact" element={<contact></contact>}</Route>
            
         </Routes>
    
    <footer/>
    </div>
  )
}
export default App
