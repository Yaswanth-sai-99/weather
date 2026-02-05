import React,{useState} from 'react'
import { iconURL } from './home';
import { bgURL } from './home';


export default function Search({ setCity, weatherdata }) {

const [input,setInput] = useState('');
const [error, setError] = useState('');

const conditionkey = weatherdata ? weatherdata?.currentConditions?.icon?.replaceAll("-","").toLowerCase() : null;
const weathericon = iconURL[`${conditionkey}`] || iconURL.default_bg;

const dateString = weatherdata ? weatherdata.days[0].datetime : null;
const date = new Date(dateString);
const dayname = date.toLocaleDateString('en-US', {weekday:'long'})


const TimeString = weatherdata ? weatherdata.currentConditions.datetime : '00:00:00'
const formattedTime = new Date(TimeString);
const Time = formattedTime.toLocaleTimeString('en-US',
  { hour:'2-digit',
    minute:'2-digit',
    hour12: true }).toLowerCase();
    
const handleSearch = (e)=>{
    // e.preventDefault();
    if (input.trim()){
        setCity(input);

        if(!input){
            setError( 'Enter the City Name')
        }
    } 
     
}

  return (
      <div className='bg-white w-full rounded-xl border border-blue-600'>
        <div className='bg-gray-200 w-90 h-screen rounded-l-xl'>
          <div className='flex items-center p-7 px-9'>
            <input className=' focus:outline-none p-2 border border-white bg-white rounded-l-md'
              type="text"
              placeholder="Enter city"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />

            <button onClick={handleSearch} className='bg-blue-400 p-2 rounded-r-md '>Search</button>
          </div>

          {weatherdata && (
            <div>
            <div>
              <img src={weathericon} alt={conditionkey} className='w-60 flex items-center justify-center mx-15 pb-20' />
              <p className='text-6xl px-5'> {weatherdata.currentConditions.temp}°C</p>
              <p>
                {dayname},{Time}
              </p>
            </div>
            <div>
                <h3>{weatherdata.resolvedAddress}</h3>
            </div>
            </div>
          )}
        </div>
      </div>
  );
}
