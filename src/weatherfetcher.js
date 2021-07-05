import React,{useState,useEffect} from "react";
require('dotenv').config()

function Fetchweather() {
    const [location,setlocation] = useState('');
    const [weather,setweather] = useState('');
    const [temp,settemp] = useState('');
    const [country,setcountry] = useState('');
    useEffect(() => {
        fetch(`${process.env.Baseurl}chennai&appid=${process.env.apikey}`)
        .then (res => res.json())
        .then (data => {
            console.log(data);
            setlocation(data.name);
            setweather(data.weather[0].main);
            settemp(data.main.temp);
            setcountry(data.sys.country);
        })
    },[])
       return(
           <main>
           <div>{location}</div><span>{country}</span>
           <div>{weather}</div>
           <div>{temp}</div>
           </main>
       ) 
}

export default Fetchweather