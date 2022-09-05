
import React from 'react'
import '../drink.css'
function Drink({name, price}) {
  return (
    <div className='drink__row'>
        <div className='drink__name'>{name} </div>
        <div className='drink__price'>{price}</div>
        <div></div>
        
    </div>
  )
}

export default Drink