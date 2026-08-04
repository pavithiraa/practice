import { useState } from "react";

const WeatherApp =()=>{
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState(null);
    let API_KEY = "505f90cf5462967373ad527a03c078cb";
    const getWeather = async(cityName)=>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=505f90cf5462967373ad527a03c078cb&units=metric`);
        const data = await res.json();
        const {main} = data;
        setWeather(main?.temp);
        console.log(main);
        setCity("");
    }
    return(
        <div>
        <h3>Weather App</h3>
        <input type="text" placeholder='Enter your city name' onChange={(e) => setCity(e.target.value)}  onKeyDown={(e)=>e.key ==="Enter" && getWeather(e.target.value)} />
        <button onClick={()=>getWeather(city)}>Get Weather</button>
        <p>Current temperature: {weather ? weather.toFixed(1) + "°C" : "N/A"}  </p>
        </div>
    )
}

export default WeatherApp