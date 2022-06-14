import React from 'react'
import { Link } from 'react-router-dom'

function Carte() {
    return (
        <div>
          <hr/>
          <div className='brefmaster'>
         <div className='bref'>
            <Link to="../sandwitchs"><div className='imgnav imgm1'><h1>Sandwichs</h1></div></Link>
            <Link to="../burger"><div className='imgnav imgm2'><div><div><h1>Burgers</h1></div><div><h1>&</h1></div><div><h1>Galettes</h1></div></div></div></Link>
            <Link to="../chickens"><div className='imgnav imgm3'><h1>Chickens</h1></div></Link>
            <Link to="../extra"><div className='imgnav imgm4'><h1>Extras</h1> </div></Link>
            <Link to="../drink"><div className="imgnav imgm5"><h1>Drink</h1></div></Link>
         </div>
         </div>
        </div>
      )
    }
export default Carte