import {useState} from "react"
import { burgers } from "../food/burger"
import { galettes } from "../food/burger"

function Burgapa() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"

  return (
    <>
    <div className='title'><h1>Burger</h1></div>
    <hr className="hr"/>
    
        
        <div className='supcard'>
    <div className='card'>
      {burgers.map((burg) => {
        return <div className='te'>
        <div className="ca"><img src={burg.picture} className="testimg"></img></div>
        <div>
        <div className='ca'>{burg.nom}</div>
        <div className='ca'>{burg.prix}€</div>        
        <div className='ca'>{burg.pricemenu}</div>
        </div>
        </div>})}
    </div></div>
    <div className='title'><h1>Galette</h1></div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {galettes.map((gal) => {
        return <div className='te'>
        <div className="ca"><img src={gal.picture} className="testimg"></img></div>
        <div>
        <div className='ca'>{gal.nom}</div>
        <div className='ca'>{gal.prix}€ </div> 
        <div className='ca'>{gal.pricemenu}€</div>
        </div>
       
        </div>})}
    </div></div>
    </>
  
  )
}

export default Burgapa
