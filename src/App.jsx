import React from 'react'
import Nav from './Nav'
import Homepage from './Homepage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <Nav />
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
