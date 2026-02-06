import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Today from '../pages/Today'
import Celcius from '../pages/Celcius'
import Farenheit from '../pages/Farenheit'
import Weekly from '../pages/weekly'

export default function Navigation({weatherdata}) {
  return (
    <Routes>
        <Route path='/weekly' element={<Weekly weatherdata={weatherdata}/>}/>
        <Route path='/today' element={<Today weatherdata={weatherdata}/>}/>
        <Route path='/celcius' element={<Celcius weatherdata={weatherdata}/>}/>
        <Route path='/Farenheit' element={<Farenheit weatherdata={weatherdata}/>}/>
    </Routes>
  )
}
