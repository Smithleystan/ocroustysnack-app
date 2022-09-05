import React from 'react'
import '../drink.css'



const Drink =({name, price}) =>{
  return (
    <div className='drink__row'>
        <div className='drink__name'>{name} </div>
        <div className='drink__price'>{price}</div>  
    </div>
  )
}

export default Drink