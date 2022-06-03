import React from 'react'
import { extra } from '../food/burger'


function Extras() {
  
  return (
    <div>
    <div className='title'><h1>Extras</h1> </div>
    <div className='supcard'>
    <div className='card'>
      {extra.map((ext) =>
       {return <div className='te'>
        <div className='ca'>picture</div>
        <div>
          <div className='ca'>{ext.nom}</div>
          <div className='ca'>{ext.prix}€</div>
        </div>

         
         </div>})}
    </div></div>
    </div>
  )
}

export default Extras