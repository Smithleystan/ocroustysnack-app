import React from 'react'
import {Link} from "react-router-dom"


function Navinf() {
  return (
    <div>
      <div className='positionnavinf'>
        <div className='menu'> 
       <Link to="sandwitchs"><div className='imgmenu imgm1'><h1>Sandwitchs</h1></div></Link>
        <Link to="burger"><div className='imgmenu imgm2'><div><div><h1>Burgers</h1></div><div><h1>&</h1></div><div><h1>Galettes</h1></div></div></div></Link>
        <Link to="chickens"><div className='imgmenu imgm3'><h1>Chickens</h1></div></Link>
        <Link to="extra"><div className='imgmenu imgm4'><h1>Extras</h1> </div></Link>
        <Link to="drink"><div className="imgmenu imgm5"><h1>Drink</h1></div></Link>
        </div>
      </div>
    </div>
  )
}

export default Navinf