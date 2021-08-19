import React, { useEffect, useState } from 'react';
import './Weather.scss';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Input } from 'antd';

const Weather = () => {
  const [loading, setLoaded] = useState(true);
  const [wdata, setWeather] = useState<any>(null);
  useEffect(() => {
    axios
      .get(
        'http://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=fc6916988b0954c2540d0f09fb7e8a65',
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        setWeather(response.data);
        setLoaded(false);
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }, []);
  return (
    <div className="weather-components">
      <Loader visible={loading} type="Circles" color="#00BFFF" height={200} width={200} />
      <div className="weather-block">
        <Input placeholder="enter city" />
        <div className="weather-city">{wdata?.name}</div>
        <div className="weather-description">{wdata?.weather?.[0]?.description}</div>
        <img
          className="weather-icon"
          src={`https://openweathermap.org/img/wn/${wdata?.weather?.[0]?.icon}@2x.png`}
          alt="icon"
        />
        <div className="weather-temp">
          {wdata?.main?.temp}
          &deg;
        </div>
      </div>
    </div>
  );
};
export default Weather;
// <div>{JSON.stringify(wdata, null, 2)}</div>
// <img className="weather-icon" src={`https://openweathermap.org/img/wn/${wdata?.weather?.[0]?.icon}@2x.png`}/>
// <div className="weather-icon">{wdata?.weather?.[0]?.icon}</div>
