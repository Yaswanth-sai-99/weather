import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Background from './components/background';
import Home from './components/home';

export default function App() {
    const [city, setCity] = useState('banglore');
    const [weatherdata, setWeatherData] = useState('');
    const [unit, setUnit] = useState('C');

    useEffect(() => {
        if (!city) return;

        axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
            .then(res => {
                setWeatherData(res.data)
                // console.log(res.data);
            });

    }, [city]);



    return (

        <div className="h-screen bg-contain bg-center relative">
            <Background weatherdata={weatherdata} />

            <div className="absolute ">
                <Home weatherdata={weatherdata} setCity={setCity} unit={unit} setUnit={setUnit}/>
            </div>
        </div>
    )
}
