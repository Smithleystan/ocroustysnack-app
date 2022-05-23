import React, {useState} from 'react'
import petdej from "../assets/images-menu/petitdej.jpg";
import burger from "../assets/images-menu/burger.PNG"



function Carterepas() 

{
  const [menu, Setmenu] = useState([
    {menue : "Beef Crousty" , description :"jordan", picture : "salade.jpg" , prix : 10+" "+"€" },
    {menue : "chicken Burger" , description :"jord", picture : "img" , prix : 9.50+" "+"€" },
    {menue : "Big Burger" , description :"jordan", picture : "img" , prix : 10+" "+"€" },
    {menue : "Crazy Burger" , description :"jord", picture : "img" , prix : 7.50+" "+"€" },
    {menue : "fish Burger" , description :"jordan", picture : "img" , prix : 7.50+" "+"€" },
    {menue : "Burger Planta" , description :"jord", picture : "img" , prix : 11+" "+"€" },
    {menue : "Filet Burger" , description :"jordan", picture : "img" , prix : 7.50+" "+"€" },
    {menue : "Chicken Roll" , description :"jord", picture : "img" , prix : 9.50+" "+"€" },
    {menue : "Double cheese" , description :"jordan", picture : "img" , prix : 8.50+" "+"€" },
    {menue : "Maxi Burger" , description :"jord", picture : "img" , prix : 12+" "+"€" },
    {menue : "Kid Burger" , description :"jordan", picture : "img" , prix : 5+" "+"€" },
    {menue : "Maxi Chesse" , description :"jord", picture : "img" , prix : 12+" "+"€" },
    ])
  return (
    <div>
      <div className='title'><h1>Menu</h1></div>
      <div className='content'>{menu.map((men)=>{ return  <div className='ca'><div><div><img src={burger}className="petdej" alt='burger'></img></div> {men.menue}</div><div>{men.prix}</div></div> })}</div>

    </div>
  )
}

export default Carterepas