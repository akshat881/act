import React from "react"
import './css/bootstrap.min.css'
import './css/preloader.min.css'
import './css/circle.css'
import './css/font-awesome.min.css'
import './css/fm.revealator.jquery.min.css'
import './css/style.css'
import './css/skins/green.css'
import Cont from './assets/Contact'
import Nav from './assets/Nav'
import Hom from './assets/Home'
import About from './assets/About'
import Port from './assets/Portfolio'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
export default function App(){

  return(
    <Router>
    <Nav/>
  
    <Routes>
    <Route path="/" element={<Hom/>} />
    <Route path="/contact" element={<Cont/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/portfolio" element={<Port/>}/>
   </Routes>
   </Router>
  )
}