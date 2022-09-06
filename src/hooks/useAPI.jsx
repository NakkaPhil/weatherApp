import { useState, useEffect } from "react";
import axios from 'axios'
const useAPI = () => {
    
    const [clima, setClima] = useState({})
    const [location, setLocation] = useState({})
    const [loading, setLoading] = useState(true)
    
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
            setLoading(!loading)
            }
            )
        }
        
        navigator.geolocation.getCurrentPosition(success)
        
    },[])
    

   
    return {clima, location, loading}
}

export default useAPI