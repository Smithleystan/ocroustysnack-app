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
      <div className="navcenter">
          <Link to="/" className="li"><div ><h3>Accueil</h3></div></Link>
          <Link to="carte"><div className="li" onClick={()=>setCliq(!cliq)}onMouseEnter={()=>setCliq(!cliq)}><h3>Cartes</h3></div></Link>
          <Link to="horaire"><div className="li"><h3>Horaires</h3></div></Link>
          <Link to="place"><div className="li"><h3>Nous trouver</h3></div></Link>
          <Link to="/" className=" logoposition"><div ><h3><img src="https://res.cloudinary.com/dsx6152nt/image/upload/v1654940881/ocroustycard/Croustylogo_skanit.jpg" className="logocrousty"/></h3></div></Link>
      </div>
     </nav>

     {/* <div className={cliq ? "yes" : "no"} onMouseLeave={()=>setCliq(!leave)}  onClick={()=>(!leave)}><Navinf/></div> */}
     
    
   
     

     
   
    </>
  )
}

export default Navbar