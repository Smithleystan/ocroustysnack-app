import React, {useState} from 'react'

function Chickens() {
    const [chickens, setChickens] = useState([
        {nom : "Nuggerts",  prix : "4.00" ,  menu:  "5€50"},
        {nom : "Tenders",  prix : "7.00" ,  menu:  "5€50"},
        {nom : "Wings",  prix : "6€00" ,  menu:  "5€50"},
        
         ])


  return (
    <div>
         <div className='title'>Chickens</div>
    <div className='supcard'>
    <div className='card'>
      {chickens.map((chick) => {return <div className='te'><div className='ca'>{chick.nom}</div><div className='ca'>{chick.prix}</div></div>})}
    </div></div>
    </div>
  )
}

export default Chickens