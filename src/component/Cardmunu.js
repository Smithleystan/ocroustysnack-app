import React, {useState} from 'react'


function Cardmunu() {
    const [menu, setMenu]=useState([{menu : "yop" , boisson : "coca" ,dessert : "tiramisu"}])
    console.log(menu)
    
  return (
    <div>
        {menu.map((men)=>{return <div><div>{men.menu}</div><div>{men.boisson}</div></div>})}
    </div>
  )
}


export default Cardmunu