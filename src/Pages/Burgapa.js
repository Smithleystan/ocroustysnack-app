import  {useState} from "react"

function Burgapa() {
    const [burgers, setBurgers] = useState([
        {nom : "Fish Burger",  prix : "3.00" ,  menu:  "5€50"},
        {nom : "Beef Burger",  prix : "3.00" ,  menu:  "5€50"},
        {nom : "Chesse Burger",  prix : "3€50" ,  menu:  "5€50"},
        {nom : "Chicken Burger",  prix : "3€50" ,  menu:  "5€50"},
        {nom : "Double Cheese Burger",  prix : "4€50" ,  menu:  "5€50"},
      
         ])

    
         const [galettes, setGalettes] = useState([
            {nom : "Viande Hachée",  prix : "4.00" ,  menu:  "5€50"},
            {nom : "Poulet Rôti",  prix : "4€00" ,  menu:  "5€50"},
            {nom : "Kebab Poulet",  prix : "4€00" ,  menu:  "5€50"},
            {nom : "Kefta",  prix : "4€00" ,  menu:  "5€50"},
            {nom : "Tenders",  prix : "4€50" ,  menu:  "5€50"},
            {nom : "Mixte",  prix : "4€50" ,  menu:  "5€50"},
          
             ])
    
  return (
    <>
    <div className='title'>Burger</div>
    <div className='supcard'>
    <div className='card'>
      {burgers.map((burg) => {return <div className='te'><div className='ca'>{burg.nom}</div><div className='ca'>{burg.prix}</div></div>})}
    </div></div>
    <div className='title'>Galette</div>
    <div className='supcard'>
    <div className='card'>
      {galettes.map((gal) => {return <div className='te'><div className='ca'>{gal.nom}</div><div className='ca'>{gal.prix}</div></div>})}
    </div></div>
    </>
  
  )
}

export default Burgapa