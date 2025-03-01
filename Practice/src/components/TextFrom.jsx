import React from 'react'

export default function TextFrom() {
  return (
    <div>
      <div className="mb-3">
        <label htmlFor="exampleFromControlInput1" className='form-label'>Email Address</label>
        <input type="email" className='form-control' id='exampleFromControlInput1' placeholder='name@example.com'/>
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFromControlTextarea1" className='form-label'>Example textarea</label>
        <textarea name="" id="exampleFromControlTextarea1" rows='3' className='form-control'></textarea>
      </div>
    </div>
  )
}
