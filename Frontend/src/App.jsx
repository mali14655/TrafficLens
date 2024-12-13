import React from 'react'
import RegisterWebsite from './Components/RegisterWebsite'
import Analysis from './Components/Analysis'
import { Routes,Route } from 'react-router-dom'

export default function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<RegisterWebsite/>}  />
      <Route path='/analysis' element={<Analysis/>}  /> 
    </Routes>
    </>
  )
}
