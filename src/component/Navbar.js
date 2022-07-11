import Navinf from "./Navinf"
import "../App.css"
import {Link} from "react-router-dom"
import {useState} from "react"



function Navbar() {
 const [hid,setHid] = useState(false)
 const btn = () => setHid(!hid)
 

  return (
      <>
    <nav className="nav">
    
   <div className='btncenter' onClick={btn}>
  <img src="https://res.cloudinary.com/dsx6152nt/image/upload/v1655764496/ocroustycard/aligner-justifier_qgdx5j.png" className="btnbarre" ></img>
  </div>
  
      <div className={hid? "navcenter" :"navcenterHidden"}>
          <Link to="/" className="li"><div ><h3>Accueil</h3></div></Link>
          <Link to="carte"  className="li"><div ><h3>Cartes</h3></div></Link>
          <Link to="horaire" className="li"><div ><h3>Horaires</h3></div></Link>
          <Link to="place" className="li"><div ><h3>Nous trouver</h3></div></Link>
          <Link to="/" className=" logoposition"><div ><h3><img src="https://res.cloudinary.com/dsx6152nt/image/upload/v1654940881/ocroustycard/Croustylogo_skanit.jpg" className="logocrousty"/></h3></div></Link>
      </div>
     </nav>

     {/* <div className={cliq ? "yes" : "no"} onMouseLeave={()=>setCliq(!leave)}  onClick={()=>(!leave)}><Navinf/></div> */}
     
    
   
     

     
   
    </>
  )
}

export default Navbar