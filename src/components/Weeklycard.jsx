import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Routing/Navigation'
import '../App.css'

export default function Weeklycard({ weatherdata, setUnit, unit }) {


    return (
        <div className='w-[85%] p-8 bg-gray-100 rounded-r-3xl'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <NavLink to="/today">{({ isActive }) => (<button className={`nav-item ${isActive ? 'text-blue-700 px-4 py-2 rounded-md font-futuristic font-medium' : 'text-black px-4 py-2 rounded-md font-futuristic font-medium'}`}>Today
                         <p className='nav-tip'>Today forecast</p>
                    </button>)}</NavLink>
                   
                    <NavLink to="/weekly" >{({ isActive }) => (<button className={`nav-item ${isActive ? 'text-blue-700  px-4 py-2 rounded-md font-futuristic font-medium' : 'text-black  px-4 py-2 rounded-md font-futuristic font-medium'}`} >Weekly
                        <p className='nav-tip'>Weekly forecast</p>
                    </button>)}</NavLink>
                    
                </div>
                <div className='flex gap-5 mx-5'>
                  <button onClick={()=> setUnit('C')} className={`w-10 h-10 rounded-full nav-item ${unit === "C" ? 'bg-black text-white' : 'bg-white text-black'}`}><sup>o</sup>C
                   <p className='nav-tip'>Celcius</p>
                  </button>
                 
                  <button onClick={()=> setUnit('F')} className={`w-10 h-10 rounded-full nav-item ${unit === "F" ? 'bg-black text-white' : 'bg-white text-black'}`}><sup>o</sup>F 
                  <p className='nav-tip'>Farenheit</p>
                  </button>
                  
                </div>
            </div>
            <div>
                    <Navigation weatherdata={weatherdata} unit={unit} />
            </div>
        </div>

    )
}
