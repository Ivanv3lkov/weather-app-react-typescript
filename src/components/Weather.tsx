import React from 'react';
import { WeatherData } from '../store/types';
import '../styles/Weather.css';

interface WeatherProps {
  data: WeatherData;
}

const Weather: React.FC<WeatherProps> = ({ data }) => {
  const fahrenheit = (data.main.temp * 1.8 - 459.67).toFixed(2);
  const celsius = (data.main.temp - 273.15).toFixed(2);

  const dataWeather = data.weather[0].description[0].toUpperCase() + data.weather[0].description.substring(1);
  
  return (
    <div>
      <h1 className='city'>{data.name} - {data.sys.country}</h1>
      <div className="weather-container">
        <div>
          <h2>{dataWeather}</h2>
          <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`} alt="" />
        </div>
        <div>
          <h2>Temp</h2>
          <div>
            <p>{data.main.temp}K</p>
            <p>{fahrenheit}<sup>&#8457;</sup></p>
            <p>{celsius}<sup>&#8451;</sup></p>
          </div>
        </div>
        <div>
          <h2>Humidity</h2>
          <p>{data.main.humidity}</p>
        </div>
        <div>
          <h2>Pressure</h2>
          <p>{data.main.pressure}</p>
        </div>
        <div>
          <h2>Wind</h2>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>

  );
}

export default Weather;