import React from 'react'
import logo from "./images/troll-face.png";
import './Navbar.css'

export default function Navbar() {
  return (
    <div className='header'>
      <img src ={logo} alt ='' />
      <h3>MEME</h3>
    </div>
  )
}
