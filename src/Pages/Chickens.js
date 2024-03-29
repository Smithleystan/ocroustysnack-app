import React, {useState} from 'react'
import { chickens } from '../food/burger'

function Chickens() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"

  return (
    <div className='heightchickens'>
         <div className='centertitle'><div className='title'><h1>Chickens</h1></div></div>
         <hr className="hr"/>
     <div className='supcard'>
      <div className='card'>
      {chickens.map((chick) => {
        return <div className='te'>
        <div><img src={chick.picture} className="testimg"></img></div>
        <div>
            <div className='ca'><h3>{chick.nom}</h3></div>
            <div className='ca'>{chick.prix}€</div>
          </div>
        </div>})}
      </div></div>
    </div>
  )
}

export default Chickens