import React from 'react'
import { Link } from 'react-router-dom'

export default function StudyMaterial() {
  return (
    <div className='fullcontainer'>
      <div className="grid-container">
        <Link to="/ST"><div className="item">Software-Testing</div></Link>
      </div>
    </div>
  )
}
