const WeatherApp =()=>{

    let API_KEY = "505f90cf5462967373ad527a03c078cb";
    const getWeather = async(cityName)=>{
        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=505f90cf5462967373ad527a03c078cb&units=metric`);
        const data = await res.json();
        console.log(data);
    }
    return(
        <div>
        <h3>Weather App</h3>
        <input type="text" placeholder='Enter your city name' onChange={(e) => getWeather(e.target.value)}   />
        </div>
    )
}

export default WeatherApp