import React, {useState} from 'react'
import "../App.css"
import Navinf from './Navinf'


function Navbar() {
const [test, setTest] = useState(true)

  return (
      <>
      <nav className='navbar'>
     <ul>
         <li>Accueil</li>
         <li onClick={()=>setTest(!test)}>Cartes</li>
         <li>restaurant & vous</li>
         <li>Nous trouver</li>
         <li>Logo restaurant</li>
     </ul>
     </nav>
     <div className={test ? 'yes' : 'no' }><Navinf/></div>
     

     
   
    </>
  )
}

export default Navbar