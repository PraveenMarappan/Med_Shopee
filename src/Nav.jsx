import React from 'react'
import './nav.css'
import bg from "../public/g.png"
import logo from "../public/logo.png"
import {Link} from 'react-router-dom'
function Nav() {
  return (
    <div>
    <div className='nav'>
      <div className='nav1'><img src={logo}></img></div>  
      <div>
      <ul className='ul'>
        <li><Link to ="/">🏠︎ Home</Link></li>
        <li><Link to = "/shop">🛍️Shopping</Link></li>
        <li>🛒Cart</li>
        <li>☏Contact</li>
      </ul>
      </div>
    </div>
    </div>
  )
}

export default Nav
