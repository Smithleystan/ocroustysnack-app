import React from 'react'
import {Link} from "react-router-dom"


function Navinf() {
  return (
    <div>
        <div className='menu'> 
       <Link to="sandwitchs"><div className='imgmenu'>Sandwitchs</div></Link>
        <Link to="burger"><div className='imgmenu'><dic><dic>Burgers</dic><dic>Galettes</dic></dic></div></Link>
        <Link to="chickens"><div className='imgmenu'>Chickens</div></Link>
        <Link to="extra"><div className='imgmenu'>Extras</div></Link>
        
        </div>
    </div>
  )
}

export default Navinf