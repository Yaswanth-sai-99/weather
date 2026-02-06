import React, { useState } from 'react'
import Weeklycard from "./Weeklycard";
import Search from "./Search";


export const iconURL = {
    rain: "https://i.ibb.co/kBd2NTS/39.png",
    partlycloudyday: "https://i.ibb.co/PZQXH8V/27.png",
    partlycloudynight: "https://i.ibb.co/Kzkk59k/15.png",
    clearday: "https://i.ibb.co/rb4rrJL/26.png",
    clearnight: "https://i.ibb.co/1nxNGHL/10.png",
    default: "https://i.ibb.co/rb4rrJL/26.png"
}

export const bgURL = {
    rain_bg: "https://i.ibb.co/qNv7NxZ/pc.webp",
    partlycloudyday_bg: "https://i.ibb.co/RDfPqXz/pcn.jpg",
    partlycloudynight_bg: "https://i.ibb.co/h2p6Yhd/rain.webp",
    clearday_bg: "https://i.ibb.co/WGry01m/cd.jpg",
    clearnight_bg: "https://i.ibb.co/kqtZ1Gx/cn.jpg",
    default_bg: "https://i.ibb.co/qNv7NxZ/pc.webp"
}


export default function Home({ setCity, weatherdata }) {

    return (
        <div className="w-[1100px] h-[650px] rounded-xl  flex overflow-hidden m-20">
            <Search weatherdata={weatherdata} setCity={setCity} />
            <Weeklycard weatherdata={weatherdata} />
        </div>
    )
}
