import React from 'react'
import {useState} from "react"
import patisserie from "../assets/images-menu/patisserie.jpg"

function Gouter() {
 
    const [menu, Setmenu] = useState([
        {gouter : "Ice Cream Cookie" , description :"jordan", picture : "salade.jpg" , prix : 3+" "+"€" },
        {gouter : "Chocolate Fondue" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Original Cheesecake" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Amazin Apple Pie" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Broookie" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {gouter : "French Briche" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Pancakes" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Crepes nutellas" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Crepes aux Sucres" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Mars" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        {gouter : "Tiramisu" , description :"jordan", picture : "img" , prix : 3+" "+"€" },
        {gouter : "tarte au daim" , description :"jord", picture : "img" , prix : 3+" "+"€" },
        ])
      return (
        <div>
          <div className='title'>Gouter</div>
          <div className='content'>{menu.map((men)=>{ return  <div className='ca'><div><div><img src={patisserie}className="petdej" alt='patisserie'></img></div> {men.gouter}</div><div>{men.prix}</div></div> })}</div>
          
        </div>
      )
}

export default Gouter