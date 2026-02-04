import React,{useState} from 'react'

export default function Search({setCity, weatherdata}) {

const [input,setInput] = useState('');
const [error, setError] = useState('');

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
    <div>
        <input type="text" value={input} placeholder='SEARCH' onChange={(e) => setInput(e.target.value)} />
        <button onClick={handleSearch}>SEARCH</button>
        <p>{error}</p>
    </div>
  )
}
