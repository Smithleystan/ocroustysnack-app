import {useState} from "react"


function Sandwichfroid() {
  const [sandwitch, setSandwitch] = useState([
    {nom : "Poulet Mayonaise",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Poulet Piquant",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Poulet Curry",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Poulet Andalouse",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Poulet Brasil",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Poulet Marocain",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Thon Mayonaise",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Thon Piquant",  prix : "2€50" ,  menu:  "5€50"},
    {nom : "Filet Américain",  prix : "2€50" ,  menu:  "5€50"},
     ])

     const [sandwchaud, setSandwchaud] = useState([
      {nom : "Mexicanos",  prix : "2€50" ,  menu:  "5€50"},
      {nom : "Fricadelle",  prix : "2€50" ,  menu:  "5€50"},
      {nom : "Poulet Rôti",  prix : "3€50" ,  menu:  "5€50"},
      {nom : "Viande Haché",  prix : "3€50" ,  menu:  "5€50"},
      {nom : "Steack Haché",  prix : "3€50" ,  menu:  "5€50"},
      {nom : "Cordon Bleu",  prix : "3€50" ,  menu:  "5€50"},
      {nom : "Mergues",  prix : "4€00" ,  menu:  "5€50"},
      {nom : "Dinde Marinée",  prix : "4€00" ,  menu:  "5€50"},
      {nom : "Kefta",  prix : "4€00" ,  menu:  "5€50"},
    ])

  return (
    <>
    <div className='title'>Sandwitch froid</div>
    <div className='supcard'>
    <div className='card'>
      {sandwitch.map((sand) => {return <div className='te'><div className='ca'>{sand.nom}</div><div className='ca'>{sand.prix}</div></div>})}
    </div></div>
    <div className='title'>Sandwitch chaud</div>
    <div className='supcard'>
    <div className='card'>
      {sandwchaud.map((chaud) => {return <div className='te'><div className='ca'>{chaud.nom}</div><div className='ca'>{chaud.prix}</div></div>})}
    </div></div>
    </>
  )
}

export default Sandwichfroid