import React, {useState} from 'react'
import { chickens } from '../food/burger'

function Chickens() {
   

  return (
    <div>
         <div className='title'><h1>Chickens</h1> </div>
    <div className='supcard'>
    <div className='card'>
      {chickens.map((chick) => {
        return <div className='te'>
        <div>picture</div>
        <div>
            <div className='ca'>{chick.nom}</div>
            <div className='ca'>{chick.prix}€</div>
          </div>
        </div>})}
    </div></div>
    </div>
  )
}

export default Chickens