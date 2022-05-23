import React from "react";
import Logo from "../images/logo.png"
import { Link } from "react-router-dom";
import {useState} from "react"
import Menu from "../Pages/Menu"

function Navbar() {
  const [test, setTest] = useState(true)
  

  
  return (
    <header>
      <a img class="logo" src={Logo} alt="logo"></a>
      <nav className="nav">
      <Link to=""><div className="navitem">Accueil</div></Link>
      <Link to="#" onClick={()=>setTest(!test)}  ><div className="navitem" >Carte</div></Link>
      <Link to="Contact"> <div className="navitem">restaurant & vous</div></Link>
      <Link to="Plan"><div className="navitem">Nous trouver</div></Link> 
      </nav>
      <div className={test ? "hola" : "hole"}><Menu/></div>
      
      
       
      
     
    </header>
  );
}

export default Navbar;
