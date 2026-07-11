import React,{useState} from 'react'
import './shop.css'

import image from '../public/bgshop.png'
function shop() {
    
  return (

    <div>
        <img src={image} className='img'></img>

        <div className='text'>
            <h1>Shop Medicines & Health Care</h1><br />
            <p>Find the best medicine & healthcare products for you and your family</p><br />
            <button className='b1'><input type='text' placeholder="🔍︎  Search for medicines,products... " className='b2'></input>
            <button className='b3'>search</button>
            </button><br />
            <h3>Catagories</h3>
                  <div className="categories">

        <button>💊<br /> Tablets</button>

        <button>❤️<br /> Wellness</button>

        <button>🍼<br /> Baby Care</button>

        <button>🧴 <br />Skin Care</button>

        <button>🩺 <br />Devices</button>

      </div>
        </div>
    </div>
  )
}

export default shop
