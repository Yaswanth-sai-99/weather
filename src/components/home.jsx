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
    clearnight_bg: "https://t3.ftcdn.net/jpg/12/61/86/82/360_F_1261868247_qUxuzLXwVgBDarMg8B9M4Mo125EpRju5.jpg",
    default_bg: "https://i.ibb.co/qNv7NxZ/pc.webp"
}


export default function Home({ setCity, weatherdata,unit, setUnit }) {

    return (
        <div className=" h-fit w-[1100px] rounded-xl  flex m-20">
            <Search weatherdata={weatherdata} setCity={setCity} />
            <Weeklycard weatherdata={weatherdata} unit={unit} setUnit={setUnit} />
        </div>
    )
}
