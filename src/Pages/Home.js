import React,{useState}  from "react";
import "../App.css";
import Traiteur from "../assets/banniere-restaurant/traiteur.png";
import Navbar from "../components/Navbar";
import Menu from "./Menu";
import diner from "../assets/images-menu/diner.jpg"
import glace from "../assets/images-menu/glace2.jpg"
import gouter from "../assets/images-menu/gouter.jpg"
import { Link } from "react-router-dom";


function Home() {
  const [test, setTest] = useState(true)
  return (
    <>
      {/* <div className="Main">
       <Link to="Repas"><div >repas<img src={diner} className="imgm"></img></div></Link> 
        <div >dessert<img src={glace} className="imgm"></img></div>
        <Link to="Gouter"><div>gouter<img src={gouter} className="imgm"></img></div></Link> 
      </div> */}
     
      <div className="Main2"></div>
      <div className="Main3">
        <div>
          <img src={Traiteur} alt="image traiteur" id="traiteurpix" />
        </div>
        <div className="description">
          <p>
            Avec l'assistant traiteur, facilitez votre commande! Notre assistant
            traiteur vous accompagne pour évaluer au mieux votre besoin en
            fonction de la durée de votre événement, du nombre d’invités et de
            votre budget ! Une fois ces éléments renseignés, nous vous proposons
            un assortiment de produits qui correspondra à votre besoin. 
            
          </p>
        </div>
      </div>
      <div className="Main4"></div>
    </>
  );
}

export default Home;
