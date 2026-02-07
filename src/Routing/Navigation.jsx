import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Today from '../pages/Today'
import Weekly from '../pages/Weekly'

export default function Navigation({weatherdata, unit}) {
  return (
    <Routes>
      {/* home page  */}
        <Route path='/' element={<Weekly  weatherdata={weatherdata} unit={unit}/>}/>
       
        <Route path='/weekly' element={<Weekly weatherdata={weatherdata} unit={unit}/>}/>
        <Route path='/today' element={<Today weatherdata={weatherdata} unit={unit}/>}/>
    </Routes>
  )
}
