import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from './components/Landing'
import Pricing from './components/Pricing'

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route exact path="/pricing" element={<Pricing/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App