import React, { useState } from 'react';
import './Weather.scss';
import axios from 'axios';
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Input } from 'antd';

const Weather = () => {
  const [city, setCity] = useState('');
  const [loading, setLoaded] = useState(true);
  const [wdata, setWeather] = useState<any>(null);
  async function Api() {
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=fc6916988b0954c2540d0f09fb7e8a65`,
      )
      .then((response) => {
        // handle success
        console.log(response.data);
        setWeather(response.data);
        setLoaded(false);
        setCity('');
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }
  const search = (evt: any) => {
    if (evt.key === 'Enter') {
      Api();
    }
  };

  return (
    <div className="weather-components">
      <Loader visible={loading} type="Circles" color="#00BFFF" height={200} width={200} />
      <Input
        type="text"
        placeholder="Search"
        onChange={(e) => setCity(e.target.value)}
        value={city}
        onKeyPress={search}
      />
      {typeof wdata?.main !== 'undefined' ? (
        <div className="weather-block">
          <div className="weather-city">{wdata?.name}</div>
          <div className="weather-description">{wdata?.weather?.[0]?.description}</div>
          <img
            className="weather-icon"
            src={`https://openweathermap.org/img/wn/${wdata?.weather?.[0]?.icon}@2x.png`}
            alt="icon"
          />
          <div className="weather-temp">
            {`${wdata?.main?.temp}`}
            °c
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
export default Weather;
