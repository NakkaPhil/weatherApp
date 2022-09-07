import React, { useState } from "react";
import useAPI from "../hooks/useAPI"; //Personalized hook
//Conversion functions
import {KelvinToFarenheit, KelvinToCelsius, getTime, getDate} from "../functions/functions";
import countries from '../hooks/countries.json'



function WeatherCard() {
    //Weather Data:
    const iconURL = 'http://openweathermap.org/img/wn/'
    let weatherCond = ''

    

    //Function to change the Temperature Unit:
    const [tempUnity, setTempUnity] = useState(true)
    const changeUnity = () => setTempUnity(!tempUnity)

    //Hook to obtain the Weather Data:
    const {clima, location, loading, countryCode } = useAPI()

    //Obtaining temp in Celsius and Farenheit untis
    let tempF =  KelvinToFarenheit(clima?.main?.temp)
    let tempC = KelvinToCelsius(clima?.main?.temp)

    //Obtaining the country name:
    const countryName = countries[countryCode]
    
    
    //Setting background basing on the API call results:
    switch (location.main) {
        case 'Clouds': weatherCond = 'cloudy_bg'
            break;
        case 'Rain': weatherCond = 'rainy_bg'
            break;
        case 'Clear': weatherCond = 'sunny_bg'
            break;
        case 'Drizzle': weatherCond = 'drizzle_bg'
            break;
        default:  
            break;
        }

//Time function data:
    const [time, setTime] = useState(getTime())
    const [date, setDate] = useState(getDate())

    function timeUpdating () {
        setTime(getTime)
        setDate(getDate)
    }

    setInterval(() => {
        timeUpdating();
    }, 60000);

    
    return (
    <div  className= {`${weatherCond} container`}>
        {loading && <div className="loading"></div> }
        <div className="Box-weather">
        <div className="card-leftSide">
                <h1 className="hour">{time}</h1>
                <h2 className="date">{date}</h2>
            </div>
        <div className="card">
        <div className="icon-box">
            <img className="icon" src={`${iconURL}${location?.icon}@2x.png`} />
        </div>
            <h1 className="location">{clima.name} {countryName}</h1>
            <h2 className="temp">{tempUnity? `${tempC} Cº`: `${tempF} Fº`}</h2>
            <button className="temp_btn" onClick={changeUnity}>{tempUnity? 'Cº': 'Fº'}</button>
            <h3>{location?.description}</h3>
            <p><i className='bx bxl-tailwind-css'></i> <span>Wind Speed: </span> {clima?.wind?.speed} m/s</p>
            <p><i className='bx bx-cloud'></i> Clouds: {clima?.clouds?.all}%</p>
            <p><i className='bx bx-droplet'></i> Humidity: {clima?.main?.humidity}%</p>
        </div>
        </div>
    </div> 
    )

    }
 export default WeatherCard
