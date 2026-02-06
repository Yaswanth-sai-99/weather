import React, { useState } from 'react'

export default function Weekly({ weatherdata }) {

    const UVindex = (UV) => {
        if (UV >= 7) {
            return 'High'
        } else if (UV < 4 & UV > 1) {
            return 'Moderate'
        } else
            return "Low"
    }

    const Humidity = (water)=>{
        if(water >= 80){
            return 'High';
        } else if(water>=50 & water<=79){
            return 'Moderate';
        }else return 'Low'
    }

    const AitQuality = (Air)=>{
        if(Air >= 60){
            return 'danger 🚫';
        } else if(Air>=40 & Air<=59){
            return 'Warning ⚠️';
        }else return 'good 👍'
    }

if (!weatherdata) return;

    // Today Highlights data 
    const weekdays = weatherdata.days.slice(0, 7);
    const today = weekdays[0];

    const avgUV = weekdays.reduce((acc, day) => acc + day.uvindex, 0) / 7;
    const avgWind = weekdays.reduce((acc, day) => acc + day.windspeed,0) / 7;
    const avgHumidity = weekdays.reduce((acc, day) => acc + day.humidity,0) / 7;
    const avgVisibility = weekdays.reduce((acc, day) => acc + day.visibility,0) / 7;
    const avgAir = weekdays.reduce((acc, day) => acc + day.windgust,0) / 7;

    // time change
    const formatTime = (timeStr) => {
        return new Date(`2000-01-01T${timeStr}`).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: true
        }).toLowerCase();
    };

    const HighLights = [
        {label:"UV Index", value:avgUV.toFixed(1), status:UVindex(avgUV)},
        {label:"Wind Status", value:avgWind.toFixed(1), status:"KM/h"},
        {label:"Sunrise & Sunset", value:formatTime(today.sunrise), status:formatTime(today.sunset)},
        {label:"Humidity", value:avgHumidity.toFixed(1), status:Humidity(avgHumidity)},
        {label:"Visibility", value:avgVisibility.toFixed(1), status:today.conditions},
        {label:"Air Quality", value:avgAir.toFixed(1), status:AitQuality(avgAir)}
        ]

    const iconURL = {
        rain: "https://i.ibb.co/kBd2NTS/39.png",
        partlycloudyday: "https://i.ibb.co/PZQXH8V/27.png",
        partlycloudynight: "https://i.ibb.co/Kzkk59k/15.png",
        clearday: "https://i.ibb.co/rb4rrJL/26.png",
        clearnight: "https://i.ibb.co/1nxNGHL/10.png",
        default: "https://i.ibb.co/rb4rrJL/26.png"
    }

    return (
        <div>
            <div className='grid grid-cols-7 gap-3 mt-15'>
                {weekdays.map((item, index) => {

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
            <div>
                <h3 className='font-semibold mt-20 text-2xl'>Today's Highlights</h3>
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
            <p className='font-bold mt-30'>Weather Prediction App By <span className='text-green-700 text-2xl ps-3'><u>S Sai Yaswanth</u></span></p>
            </div>
    </div>
    )
}
