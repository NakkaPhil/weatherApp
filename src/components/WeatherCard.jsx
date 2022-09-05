import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";


function WeatherCard() {
    //Weather Data:
    const kelvinUnit = 273.15
    const iconURL = 'http://openweathermap.org/img/wn/'
    let weatherCond = ''
    const [clima, setClima] = useState({})
    const [location, setLocation] = useState({})
    const [tempUnity, setTempUnity] = useState(true)

    const changeUnity = () => setTempUnity(!tempUnity)
    useEffect(()=>{
    
    //Geo Data:
    const APIkey = '2b345851641fff373b6c19aa332c883a'
    
    function success(pos) {
        let coords = pos.coords
        let latitude = coords.latitude
        let longitude = coords.longitude        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${APIkey}`)
        .then(
            (res) => {
            setClima(res.data),
            setLocation(res.data.weather[0])
            }
            )
        }
        
        
        navigator.geolocation.getCurrentPosition(success)
        
    },[])
    
    
    function setBackground(){
        switch (location?.main) {
            case 'Clouds': weatherCond = 'cloudy_bg'
                break;
            case 'Rain': weatherCond = 'rainy_bg'
                break;
            case 'Sunny': weatherCond = 'sunny_bg'
            default:  
                break;
            }
    }
    setBackground();
       
    let tempF =  parseInt(Math.round((( clima?.main?.temp - 273.15) * 9/5 )+ 32))
    let tempC = parseInt(Math.round(((clima?.main?.temp) - kelvinUnit)))
    console.log(clima)
    
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
            <h2>{location?.description}</h2>
            <h3><i class='bx bxl-tailwind-css'></i> <span>Wind Speed: </span> {clima?.wind?.speed} m/s</h3>
            <h3><i class='bx bx-cloud'></i> Clouds: {clima?.clouds?.all}%</h3>
            <h3><i class='bx bx-droplet'></i> Humidity: {clima?.main?.humidity}%</h3>
        </div>
        </div>
    </div> 
    )

    }
 export default WeatherCard
