import React from 'react'
import {drinks} from "../food/drink"

function Drink() {
  return (
      <>
    <div className='centerdrink'>
        <div>Nos Boissons</div>
        <hr/>
        <div>
        {drinks.map((drink)=>{
            return <div>
                {drink.name}{" "}{drink.price}€
                </div>
        })}
        </div>


    </div>
    </>
  )
}

export default Drink