import React, {useState} from 'react'

function Boisson() {
    const [boissons, setBoissons] = useState([
        {boisson : "Coca Cola 0" , description :"jordan", picture : "salade.jpg" , prix : 3+" "+"€" },
        {boisson : "Orangina" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Sprite" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Fanta" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Pepsie" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Tonic" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Lemon" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Gingembre " , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Seven Up Mojito" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Tropico" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Dr Peppers" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {boisson : "Schweppes " , description :"jord", picture : "img" , prix : 3+" "+"€" },
        ])
  return (
    <div >
      <div className='title'><h1>Boisson</h1></div>
     
      <div className='contentboisson'>
        <div className='boisson'>{boissons.map((boissonss) =>{ return <div className='liquid'> {boissonss.boisson} : {boissonss.prix} </div>})}</div>
    </div>
    </div>
  )
}

export default Boisson