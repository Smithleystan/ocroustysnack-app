import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../component/Navbar'

function Home() {
  return (
    <>
    <div className='homeimg'>
      
  
      <div className='ocrousty'><h1>O'CROUSTY CHAUD</h1>
      <br/>
        <div className='homebutton'>
          <h3>La meilleure viennoiserie</h3>
        </div>
        <div className='homebutton'>  
          <Link to="carte" className="lacarte">La carte</Link>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home