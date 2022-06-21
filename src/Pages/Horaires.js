import React from 'react'
import { horaires } from '../horaire/horaire'
import Navbar from '../component/Navbar'

function Horaires() {

  return (
      <>
    <div className='centerhoraire'>
        <p>Nos horaires d'ouverture</p>
        <div>
         {horaires.map((horaire)=>{
             return <div>{horaire.jours}{" "}:{" "}{horaire.heures}</div>
         })}
        </div>
    </div>



    </>
    )
}

export default Horaires