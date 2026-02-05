import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Search from './components/Search';
import Background from './components/background';

export default function App() {
    const [city, setCity] = useState('');
    const [weatherdata, setWeatherData] = useState(null);

    useEffect(() => {
        if (!city) return;
        axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
            .then(res => {
                setWeatherData(res.data)
                // console.log(res.data);
            });

    }, [city]);



    return (
        <div>
            <div className='relative'>
                <div>
                    <Background weatherdata={weatherdata}/>
                </div>
                <div className='absolute top-10 left-20'>
                    <Search
                        setCity={setCity}
                        weatherdata={weatherdata} />
                </div>
            </div>
        </div>
    )
}
