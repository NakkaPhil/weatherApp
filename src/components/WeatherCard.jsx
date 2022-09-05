import React from "react";
import { useState } from "react";
import useAPI from "../hooks/useAPI";


function WeatherCard() {
    //Weather Data:
    const kelvinUnit = 273.15
    const iconURL = 'http://openweathermap.org/img/wn/'
    let weatherCond = ''

    //Function to change the Temperature Unit:
    const [tempUnity, setTempUnity] = useState(true)
    const changeUnity = () => setTempUnity(!tempUnity)

    //Hook to obtain the Weather Data:
    const {clima, location } = useAPI()
    
    
    //Setting background basing on the API call results:
    switch (location?.main) {
        case 'Clouds': weatherCond = 'cloudy_bg'
            break;
        case 'Rain': weatherCond = 'rainy_bg'
            break;
        case 'Sunny': weatherCond = 'sunny_bg'
        default:  
            break;
        }


       
    let tempF =  parseInt(Math.round((( clima?.main?.temp - 273.15) * 9/5 )+ 32))
    let tempC = parseInt(Math.round(((clima?.main?.temp) - kelvinUnit)))
    

    return (
    <div className= 
    {`${weatherCond} container`}>
        <div className="Box-weather">
        <div className="icon-box">
            <img className="icon" src={`${iconURL}${location?.icon}@2x.png`} />
        </div>
        <div className="card">
            <h1>{clima?.name} - {clima?.sys?.country}</h1>
            <h2 className="temp">{tempUnity? `${tempC} Cº`: `${tempF} Fº`}</h2>
            <button className="temp_btn" onClick={changeUnity}>{tempUnity? 'Cº': 'Fº'}</button>
            <h3>{location?.description}</h3>
            <p><i class='bx bxl-tailwind-css'></i> <span>Wind Speed: </span> {clima?.wind?.speed} m/s</p>
            <p><i class='bx bx-cloud'></i> Clouds: {clima?.clouds?.all}%</p>
            <p><i class='bx bx-droplet'></i> Humidity: {clima?.main?.humidity}%</p>
        </div>
        </div>
    </div> 
    )

    }
 export default WeatherCard
