import React from 'react'
import { extra } from '../food/burger'


function Extras() {
  const img = "https://res.cloudinary.com/dsx6152nt/image/upload/v1654184436/cook/burger_vurms5.png"
 
  return (
    <div>
      <div className='centertitle'>
    <div className='title'><h1>Extras</h1> </div>
    </div>
    <hr className="hr"/>
    <div className='supcard'>
    <div className='card'>
      {extra.map((ext) =>
       {return <div className='te'>
        <div className='ca'><img src={ext.picture} className="testimg"></img></div>
        <div>
          <div className='ca'><h3>{ext.nom}</h3></div>
          <div className='ca'>{ext.prix}€</div>
        </div>

         
         </div>})}
    </div></div>
    </div>
  )
}

export default Extras