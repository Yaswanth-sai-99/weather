import React from 'react'
import { bgURL } from './home'


export default function Background({weatherdata}) {

    const conditionkey = weatherdata ? weatherdata?.currentConditions?.icon?.replaceAll("-","").toLowerCase() : null;
    const backgroundimage = bgURL[`${conditionkey}_bg`] || bgURL.default_bg
  return (
    <div className='min-h-screen bg-cover bg-center'>
        <img src={backgroundimage} alt={conditionkey} />
    </div>
  )
}
