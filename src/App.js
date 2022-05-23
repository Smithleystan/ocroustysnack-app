import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Repas from"./Pages/Carterepas"
import Gouter from "./Pages/Gouter"
import Contact from "./Pages/Contact"
import Plan from "./Pages/Plan"
import Boisson from "./Pages/Boisson"
import Menu from "../src/Pages/Menu"
import {useState} from "react"


function App() {
  
  return (
    

    <>
    <div><Navbar/></div>
    
      <Routes basename={process.env.PUBLIC_URL} >
      <Route path="" element = {<Home />}/>
      <Route path="/Plan" element = {<Plan />}/>
      <Route path="/Contact" element = {<Contact />}/>
      <Route path="/Gouter" element = {<Gouter />}/>
      <Route path="/Repas" element = {<Repas />}/>
      <Route path="/Boisson" element = {<Boisson />}/>
      </Routes>
    <div><Footer/></div>
    
    </>
  );
}

export default App;
