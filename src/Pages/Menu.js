import React from "react";
import petdej from "../assets/images-menu/petitdej.jpg";
import diner from "../assets/images-menu/diner.jpg";
import gouter from "../assets/images-menu/gouter.jpg";
import boissonimg from "../assets/images-menu/boissonsimg.png"
import { Link } from "react-router-dom";


function Menu() {
  return (
    <>
    <div className="Main">
<div className="Main">
       <Link to="Repas"><div  className="autre">Menu<img src={diner} alt="image repas" className="imgm"></img></div></Link> 
       <Link to="Gouter"><div className="autre">gouter<img src={gouter} alt="image gouter" className="imgm"></img></div></Link> 
       < Link to="Boisson"><div className="autre">boisson<img src={boissonimg} alt="image boisson" className="imgm"></img></div></Link>
      </div>
    </div>
   
    </>
  );
}

export default Menu;
