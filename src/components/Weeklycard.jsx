import React from 'react'
import { NavLink } from 'react-router-dom'
import Navigation from '../Routing/Navigation';


export default function Weeklycard({ weatherdata, setUnit, unit }) {

    return (
        <div className='w-[85%] p-8 bg-gray-100 rounded-r-3xl'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <NavLink to="/today">{({ isActive }) => (<button className={` ${isActive ? 'text-blue-700 px-4 py-2 rounded-md font-futuristic font-medium' : 'text-black px-4 py-2 rounded-md font-futuristic font-medium'}`}>Today</button>)}</NavLink>
                    <NavLink to="/weekly" >{({ isActive }) => (<button className={` ${isActive ? 'text-blue-700  px-4 py-2 rounded-md font-futuristic font-medium' : 'text-black  px-4 py-2 rounded-md font-futuristic font-medium'}`} >Weekly</button>)}</NavLink>
                </div>
                <div className='flex gap-5 mx-5'>
                  <button onClick={()=> setUnit('C')} className={`w-10 h-10 rounded-full ${unit === "C" ? 'bg-black text-white' : 'bg-white text-black'}`}><sup>o</sup>C</button>
                  <button onClick={()=> setUnit('F')} className={`w-10 h-10 rounded-full ${unit === "F" ? 'bg-black text-white' : 'bg-white text-black'}`}><sup>o</sup>F</button>
                </div>
            </div>
            <div>
                    <Navigation weatherdata={weatherdata} unit={unit} />
            </div>
        </div>

    )
}
