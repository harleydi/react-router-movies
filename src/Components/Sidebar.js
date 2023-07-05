import React, { useState } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Sidebar = () => {
  


  

  return (
    <div className='sidebar'>
        <div className='nav'>
            <Link className='link' to={"/"}>Home</Link>
        </div>
    </div>
  )
}

export default Sidebar