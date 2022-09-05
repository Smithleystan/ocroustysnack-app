import React from 'react'
import { horaires } from '../horaire/horaire'
import '../horaire.css'
import Clock from '../component/clock'

function Horaires() {

  return (
      <>
    <div className='centerhoraire'>
       
        <div>
         {horaires.map((horaire)=>{
            return(
                <Clock day={horaire.jours} oclock={horaire.heures}/>
            )
         })}
        </div>
    </div>
    </>
    )
}

export default Horaires