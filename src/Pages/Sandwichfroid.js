import {useState} from "react"
import { sandwich } from "../food/burger"
import { sandwchaud } from "../food/burger"


function Sandwichfroid() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"

  return (
    <>
    <div className="centertitle">
    <div className='title'><h1>Sandwitch froid</h1> </div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwich.map((froid) => {
        return <div className='te'>
          <div className='ca'><img src={froid.picture} className="testimg"></img></div>
          <div>
            <div className='ca'><h3>{froid.nom}</h3></div>
            <div className='ca'>seul : {froid.prix}</div>
            <div className='ca'>menu : {froid.pricemenu}</div>
          </div>
         
          </div>})}
    </div></div>

    <div className="centertitle">
    <div className='title'><h1>Sandwitch chaud</h1> </div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwchaud.map((chaud) => {
        return <div className='te'>
          <div className="ca"><img src={chaud.picture} className="testimg"></img></div>
          <div>
          <div className='ca'><h3>{chaud.nom}</h3></div>
          <div className='ca'>seul : {chaud.prix}</div>
          <div className='ca'>menu : {chaud.pricemenu}</div>
          </div>
          </div>})}
    </div></div>
    </>
  )
}

export default Sandwichfroid