import { useState, useEffect } from "react";
import axios from 'axios'
const useAPI = (url) => {
    const [data, setData] = useState({})
    

    
    useEffect(()=>{
        change()
    }, [])

    const change= () =>{
        axios.get(url)
        .then(res => setData(res.data.results[0])) 
    }
    return {data, change}
}

export default useAPI