import React from 'react'
import {drinks} from "../food/drink"
import Drinks from '../component/Drinks'
import '../drink.css'

function Drink() {
  return (
      <>
    <div className='centerdrink'>
        <div className='Drink__title'><h2>Nos Boissons</h2></div>
        <hr/>
        <div>
      {
        drinks.map((drink)=>{

          return(
            <Drinks name={drink.name} price={`${drink.price}€`} />
          )
        })
      }
        </div>


    </div>
    </>
  )
}

export default Drink
