import React, {startTransition, useState} from 'react'


function Extras() {
    const [extra, setExtra] = useState([
        {nom : "Petite frite",  prix : "2.00" ,  menu:  "5€50"},
        {nom : "Grande frite",  prix : "2.50" ,  menu:  "5€50"},
        {nom : "Sauce supplémentaire",  prix : "0€30" ,  menu:  "5€50"},
        {nom : "Sauce Cheddar",  prix : "0€50" ,  menu:  "5€50"},
        
         ])
  return (
    <div>
                 <div className='title'>Extras</div>
    <div className='supcard'>
    <div className='card'>
      {extra.map((ext) => {return <div className='te'><div className='ca'>{ext.nom}</div><div className='ca'>{ext.prix}</div></div>})}
    </div></div>
    </div>
  )
}

export default Extras