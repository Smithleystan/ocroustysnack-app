import {useState} from "react"
import { sandwich } from "../food/burger"
import { sandwchaud } from "../food/burger"


function Sandwichfroid() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"

  return (
    <>
    <div className='title'><h1>Sandwitch froid</h1> </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwich.map((sand) => {
        return <div className='te'>
          <div className='ca'><img src={img} className="testimg"></img></div>
          <div>
            <div className='ca'>{sand.nom}</div>
            <div className='ca'>{sand.prix}</div>
          </div>
         
          </div>})}
    </div></div>
    <div className='title'><h1>Sandwitch chaud</h1> </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwchaud.map((chaud) => {
        return <div className='te'>
          <div className="ca"><img src={img} className="testimg"></img></div>
          <div>
          <div className='ca'>{chaud.nom}</div>
          <div className='ca'>{chaud.prix}</div>
          </div>
          </div>})}
    </div></div>
    </>
  )
}

export default Sandwichfroid