import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='mx-5 my-5'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
      </div>    
    </BrowserRouter>
  )
}

export default App
