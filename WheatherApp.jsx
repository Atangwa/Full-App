import React, { useState, useEffect } from 'react'
import './WheatherApp.css'
import Search_icon from  "../assets/search.png";
//import clear_icon from "../assets/clear.png";
import cloud_icon from "../assets/cloud.png";
import humidity_icon from "../assets/humidity.png";
//import rain_icon from "../assets/rain.png";
import wind_icon from "../assets/wind-icon.png";
export const WheatherApp = () => {
  let mydata = {
    temp:"",
    humidity:"",
    wind:"",
    city:"",
   

  }
  const [state, setData] = useState(mydata);


 
  let api_key ="7fd83b645766eb2ec7289a2ea4e6c17f";
  const api_url  = "https://api.openweathermap.org/data/2.5/weather?"
 
  const Search = () => {
    let city = ""
    const element= document.getElementsByClassName("cityInput") 
    city = element[0].value
    if(city.length===0) city = "Buea"
    let new_api_url = api_url + "q=" + city + "&appid=" +api_key  
    
   //fetch(new_api_url).then((res)=> res.json()).then((data)=>console.log(data))
    fetch(new_api_url).then((res)=> res.json()).then(data=> setData({temp:converfromkelvintocelcuis(data.main.temp), humidity: data.main.humidity, wind:data.wind.speed, city: data.name})).then(data=>console.log(data)).catch((err)=>console.log(err))
  }

  const converfromkelvintocelcuis =(value) =>{
    return Math.round(value-273.15)
  }
  useEffect(() => {
    Search()
  }, [])

  return (
    
    <div className='Container' >
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder='search'/>
       <button onClick={Search}>Click HERE</button>

      </div>
      <div className="weather-image">
        <img src={cloud_icon} alt="" />
      </div>
      <div className="weather-temp">{state.temp}°c</div>
      <div className="weather-location">{state.city}</div>
      <div className="data-container">
        <div className="element">
          <img src={humidity_icon} alt="" className="icon" />
          <div className="data">
            <div className="Humidity-percentage">HUMIDITY</div>
            <div className="text">{state.humidity}%</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="" className="icon" />
          <div className="data">
            <div className="windspeed">Wind Speed</div>
            <div className="text">{state.wind}Km/h</div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default WheatherApp
