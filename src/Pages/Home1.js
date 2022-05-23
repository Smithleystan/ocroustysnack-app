import React,{useState}  from "react";
import "../App.css";
import Traiteur from "../assets/banniere-restaurant/traiteur.png";
import Navbar from "../components/Navbar";
import dinerr from "../assets/images-menu/diner.jpg"
import glaces from "../assets/images-menu/glace2.jpg"
import gouters from "../assets/images-menu/gouter.jpg"


function Home1() {
  return (
    <>
         <div className="Main">
       <Link to="Repas"><div >repas<img src={diner} className="imgm"></img></div></Link> 
        <div >dessert<img src={glace} className="imgm"></img></div>
        <Link to="Gouter"><div>gouter<img src={gouter} className="imgm"></img></div></Link> 
      </div>
    </>
  );
}

export default Home1;
