import {useState} from "react"
import { burgers } from "../food/burger"
import { galettes } from "../food/burger"

function Burgapa() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"

  return (
    <>
    <div className="centertitle">
    <div className='title'><h1>Burger</h1></div>
    </div>
    <hr className="hr"/>
    
        
        <div className='supcard'>
    <div className='card'>
      {burgers.map((burg) => {
        return <div className='te'>
        <div className="ca"><img src={burg.picture} className="testimg"></img></div>
        <div>
        <div className='ca'><h3>{burg.nom}</h3></div>
        <div className='ca'>seul : {burg.prix}€</div>        
        <div className='ca'>menu : {burg.pricemenu}€</div>
        </div>
        </div>})}
    </div></div>

    <div className="centertitle">
    <div className='title'><h1>Galette</h1></div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {galettes.map((gal) => {
        return <div className='te'>
        <div className="ca"><img src={gal.picture} className="testimg"></img></div>
        <div>
        <div className='ca'><h3>{gal.nom}</h3></div>
        <div className='ca'>seul : {gal.prix}€ </div> 
        <div className='ca'>menu : {gal.pricemenu}€</div>
        </div>
       
        </div>})}
    </div></div>
    </>
  
  )
}

export default Burgapa
