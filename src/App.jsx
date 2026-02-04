import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function App() {
    const [city,setCity] = useState('');
    const [weatherdata, setWeatherData] = useState(null);

useEffect(()=>{
    axios(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=EJ6UBL2JEQGYB3AA4ENASN62J&contentType=json`)
    .then(res =>{setWeatherData(res.data)
            // console.log(res.data);
    });

},[city]);



  return (
   <div>
    {weatherdata ? 

    <div>
        <h4>{weatherdata.currentconditions}</h4>
        <p>{weatherdata.currentconditions.resolvedAddress}</p>
    </div>
    : <p>Loading ....</p>

}
   </div>
  )
}
