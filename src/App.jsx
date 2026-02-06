import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Background from './components/background';
import Home from './components/home';
import { BrowserRouter } from 'react-router-dom';
import Navigation from './Routing/Navigation';

export default function App() {
    const [city, setCity] = useState('');
    const [weatherdata, setWeatherData] = useState('');

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
    <Home weatherdata={weatherdata} setCity={setCity} />
  </div>
</div>
    )
}
