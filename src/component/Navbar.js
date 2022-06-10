import Navinf from "./Navinf"
import "../App.css"
import {Link} from "react-router-dom"
import {useState} from "react"



function Navbar() {
 const [cliq, setCliq] = useState(true)
 const [leave, setLeave] = useState (false)

  return (
      <>
      
     <nav className="nav">
         <Link to="accueil"><div className="li"><h3>Accueil</h3></div></Link>
         <Link to="#"><div className="li" onClick={()=>setCliq(!cliq)}      onMouseEnter={()=>setCliq(!cliq)}><h3>Cartes</h3></div></Link>
         <div className="li"><h3>Horaires</h3></div>
         <Link to="place"><div className="li"><h3>Nous trouver</h3></div></Link>
         <div className=" logoposition"><h3>CROUSTI CHAUD</h3></div>
     </nav>

     <div className={cliq ? "yes" : "no"} onMouseLeave={()=>setCliq(!leave)}  ><Navinf/></div>
     {console.log(leave)}
    
   
     

     
   
    </>
  )
}

export default Navbar