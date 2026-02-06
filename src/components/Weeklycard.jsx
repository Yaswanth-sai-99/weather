import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Weeklycard({ weatherdata }) {

    const iconURL = {
        rain: "https://i.ibb.co/kBd2NTS/39.png",
        partlycloudyday: "https://i.ibb.co/PZQXH8V/27.png",
        partlycloudynight: "https://i.ibb.co/Kzkk59k/15.png",
        clearday: "https://i.ibb.co/rb4rrJL/26.png",
        clearnight: "https://i.ibb.co/1nxNGHL/10.png",
        default: "https://i.ibb.co/rb4rrJL/26.png"
    }

    // const conditionkey = weatherdata ? weatherdata?.currentConditions?.icon?.replaceAll("-", "").toLowerCase() : null;
    // const weathericon = iconURL[`${conditionkey}`] || iconURL.default;

    return (
        <div className='w-[85%] p-8 bg-gray-100 rounded-r-3xl'>
            <div className='flex justify-between items-center'>
                <div className='flex gap-2'>
                    <NavLink to="/today"><button className='hover:text-blue-900  px-4 py-2 rounded-md font-futuristic font-medium'>Today</button></NavLink>
                    <NavLink to="/weekly" className='hover:text-blue-900  px-4 py-2 rounded-md font-futuristic font-medium'><button>Weekly</button></NavLink>
                </div>
                <div className='flex gap-5 mx-5'>
                    <NavLink to="/C">{({ isActive }) => (<button className={`w-10 h-10 rounded-full ${isActive ? 'bg-black text-white' : 'bg-white text-black '}`}><sup>o</sup>C</button>)}</NavLink>
                    <NavLink to="/F">{({ isActive }) => (<button className={`w-10 h-10 rounded-full ${isActive ? 'bg-black text-white' : 'bg-white text-black '}`}><sup>o</sup>F</button>)}</NavLink>
                </div>
            </div>

            <div className='grid grid-cols-7 gap-3 mt-5'>
                {weatherdata && weatherdata.days.slice(0, 7).map((item, index) => {

                    const dayCondition = item.icon.replaceAll("-", "").toLowerCase();
                    const dayIcon = iconURL[dayCondition] || iconURL.default;

                    return (
                        <div key={index} className='h-35 flex flex-col items-center border border-transparent p-2 rounded-xl bg-white'>
                            <h4>{new Date(item.datetime).toLocaleDateString('en-US', { weekday: 'long' })}</h4>
                            <img src={dayIcon} alt={dayCondition} />
                            <p className='mt-auto'>{item.temp}°C</p>
                        </div>
                    )
                })}
            </div>

                <h3 className='font-semibold mt-10'>Today Heighlights</h3>
                <div className='border border-1 border-transparent h-30 w-50 rounded-2xl mt-10 p-2 bg-white'>
                    <p className='text-gray-400'>UV INDEX</p>
                    <p className='flex flex-col items-center py-3 text-2xl'>90</p>
                    <p>Moderate</p>
                </div>
                
        </div>
    )
}
