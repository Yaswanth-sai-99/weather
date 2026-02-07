import React, { useState } from 'react'
import { iconURL } from '../components/home';

export default function Today({ weatherdata, unit }) {
  if (!weatherdata) return <p>Loading Hourly Forecast</p>;

  // for Temperature convertion 
  const formattemp = (temp)=>{
    if(unit === 'C'){
      return Math.round(temp);
    }else return Math.round((temp*9)/5 +32); // converting into farenheits

  }

  // Today highlights list
  const UVindex = (UV) => {
    if (UV >= 7) {
      return 'High'
    } else if (UV < 4 || UV > 1) {
      return 'Moderate'
    } else
      return "Low"
  }

  const Humidity = (water) => {
    if (water >= 80) {
      return 'High';
    } else if (water >= 50 || water <= 79) {
      return 'Moderate';
    } else return 'Low'
  }

  const AitQuality = (Air) => {
    if (Air >= 60) {
      return 'danger 🚫';
    } else if (Air >= 40 || Air <= 59) {
      return 'Warning ⚠️';
    } else return 'good 👍'
  }

  const Hourlydata = weatherdata.days[0].hours
  const today = Hourlydata[0]

  const avgUV = Hourlydata.reduce((acc, day) => acc + day.uvindex, 0) / 7;
  const avgWind = Hourlydata.reduce((acc, day) => acc + day.windspeed, 0) / 7;
  const avgHumidity = Hourlydata.reduce((acc, day) => acc + day.humidity, 0) / 7;
  const avgVisibility = Hourlydata.reduce((acc, day) => acc + day.visibility, 0) / 7;
  const avgAir = Hourlydata.reduce((acc, day) => acc + day.windgust, 0) / 7;

  // time change
  const formatTime = (timeStr) => {
    return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }).toLowerCase();
  };

  const HighLights = [
    { label: "UV Index", value: avgUV.toFixed(1), status: UVindex(avgUV) },
    { label: "Wind Status", value: avgWind.toFixed(1), status: "KM/h" },
    { label: "Sunrise & Sunset", value: formatTime(today.sunrise), status: formatTime(today.sunset) },
    { label: "Humidity", value: avgHumidity.toFixed(1), status: Humidity(avgHumidity) },
    { label: "Visibility", value: avgVisibility.toFixed(1), status: today.conditions },
    { label: "Air Quality", value: avgAir.toFixed(1), status: AitQuality(avgAir) }
  ]


  return (
    <div className='mt-7'>
      <div className='grid grid-cols-7 gap-2 '>
        {Hourlydata.map((hour, index) => {
          const hourkey = hour.icon.replaceAll("-", "").toLowerCase();
          const HourIcon = iconURL[hourkey] || iconURL.default
          return (
            <div key={index} className='border border-transparent'>
              <div className='bg-white rounded-xl flex flex-col items-center'>
                <h4>{hour.datetime}</h4>
                <img src={HourIcon} alt={hourkey} className='w-10 h-10 my-4' />
                <p>{formattemp(hour.temp)}°{unit}</p>
              </div>
            </div>
          )
        })}
      </div>
      <div>
        <h3 className='font-semibold mt-9 text-2xl'>Today's Highlights</h3>
      </div>

      <div className='grid grid-cols-3'>
        {HighLights.map((item, index) => {

          return (
            <div key={index} className='border border-1 border-transparent h-30 w-50 rounded-2xl mt-10 p-2 bg-white'>
              <p className='text-gray-400 text-futuristic '>{item.label}</p>
              <p className='flex flex-col items-center text-2xl py-2'>{item.value}</p>
              <p>{item.status}</p>
            </div>)
        })}
      </div>
      <div className='flex flex-grow flex-col items-center'>
        <p className='font-bold mt-10'>Weather Prediction App By <span className='text-green-700 text-2xl ps-3'><u>S Sai Yaswanth</u></span></p>
      </div>
    </div>
  )
}
