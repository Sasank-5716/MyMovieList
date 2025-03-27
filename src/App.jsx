import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Favourites from './pages/Favourites'
import "./App.css"



function App() {
  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        <Route path="/home" element={<Homepage/>} />
        <Route path="/favourites" element={<Favourites/>} />
      </Routes>
    </BrowserRouter>
  </>
  )
}

export default App