import React from 'react'
import './styles/App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Homepage from './pages/Homepage'
import Aboutmepage from './pages/Aboutmepage'
import ServicesProjects from './pages/ServicesProjects'
import ContactMe from './pages/ContactMe'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className='mx-5 my-5'>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/aboutme' element={<Aboutmepage />}/>
        <Route path='/services-and-projects' element={<ServicesProjects />}/>
        <Route path='/contact-me' element={<ContactMe />}/>
      </Routes>
      </div>    
    </BrowserRouter>
  )
}

export default App
