import React, { useState } from 'react'
import './ProgressButton.css'

function ProgressButton({percentage, handleChange}) {
  
  return (
    <div className='input'>
    <p>Input Percentage:</p>
    <input type="number" value={percentage} onChange={handleChange} />
    
    </div>
  )
}

export default ProgressButton;