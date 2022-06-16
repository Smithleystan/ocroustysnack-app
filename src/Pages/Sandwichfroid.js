import {useState} from "react"
import { sandwich } from "../food/burger"
import { sandwchaud } from "../food/burger"


function Sandwichfroid() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1655374250/ocroustycard/C22F8AA4-66BB-4E56-A647-9F42903711E9_h9nf5s.jpg"

  return (
    <>
    <div className="centertitle">
    <div className='title'><h1>Sandwich froid</h1> </div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwich.map((froid) => {
        return <div className='te'>
          <div className='ca'><img src={img} className="testimg"></img></div>
          <div>
            <div className='ca'><h3>{froid.nom}</h3></div>
            <div className='ca'>seul : {froid.prix}</div>
            <div className='ca'>menu : {froid.pricemenu}</div>
          </div>
         
          </div>})}
    </div></div>

    <div className="centertitle">
    <div className='title'><h1>Sandwich chaud</h1> </div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {sandwchaud.map((chaud) => {
        return <div className='te'>
          <div className="ca"><img src={img} className="testimg"></img></div>
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