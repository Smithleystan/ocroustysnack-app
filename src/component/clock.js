import React from 'react'
import '../horaire.css'

function clock({day, oclock}) {
  return (
    <div className='clock__main'>
     <div className='clock__day'>{day}</div>
     <div className='clock__oclock'>{oclock}</div>
    </div>
  )
}

export default clock