import React, { useState } from 'react'
import { iconURL } from './home';


export default function Search({ setCity, weatherdata }) {

    const [input, setInput] = useState('');
    const [error, setError] = useState('');

    const conditionkey = weatherdata ? weatherdata?.currentConditions?.icon?.replaceAll("-", "").toLowerCase() : null;
    const weathericon = iconURL[`${conditionkey}`] || iconURL.default;

    const dateString = weatherdata ? weatherdata?.days[0]?.datetime : null;
    const date = new Date(dateString);
    const dayname = date.toLocaleDateString('en-US', { weekday: 'long' })


    const TimeString = weatherdata ? weatherdata.currentConditions.datetime : '00:00:00'
    const formattedTime = new Date(`2000-01-01T${TimeString}`);
    const Time = formattedTime.toLocaleTimeString('en-US',
        {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).toLowerCase() || "Unavailable Time"

    const handleSearch = (e) => {
        e.preventDefault();

        if (input.trim()) {
            setCity(input);
            setError("");
            setInput("")
        } else if (!input.trim()) {
            setError('Enter the City Name')
            return;
        };

    }

    return (
        <div className='w-[30%] rounded-l-xl bg-white/40 backdrop-blur-md '>
            <form onSubmit={handleSearch} className='flex items-center p-7 px-9 bg-transparent rounded-l-xl'>
                <input className=' focus:outline-none p-2 border border-white bg-white rounded-l-md'
                    type="text"
                    placeholder="Enter city"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button type='submit' className='bg-blue-400 p-2 rounded-r-md '>Search</button>
            </form>
            <p className='text-red-600 block flex items-center justify-center'>{error}</p>

            {weatherdata && (
                <div>
                    <div>
                        <img src={weathericon} alt={conditionkey} className='w-50 flex items-center justify-center mx-15 pb-20' />
                        <p className='text-6xl px-5'> {weatherdata.currentConditions.temp}°C</p>
                        <p className='text-md px-5'>{dayname},{Time}</p>
                        <hr className='mx-5 text-white mt-5'/>
                        <p className='mx-5 mt-5'>{weatherdata.days[0].icon}, {weatherdata.currentConditions.conditions}</p>
                        <p className='mx-5'> perc - {weatherdata.days[0].precipprob}%</p>
                    </div>
                    <div className='mt-15 text-center p-3'>
                        <h3>{weatherdata.resolvedAddress}</h3>
                    </div>
                </div>
            )}
        </div>
    );
}
