import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from './Shop'
import Cart from './Cart'
import Contact from './Contact';
function App() {
  return (
    <div>
      
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
         <Route path="/cart" element={<Cart />}></Route>
         <Route path="/contact" element={<Contact />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}


export default App
