import React, { useCallback, useEffect, useState } from 'react';
import './Weather.scss';
import { Input, Spin } from 'antd';
import moment from 'moment';
import weatherServiceInstance from './WeatherService';

const Weather = () => {
  const [city, setCity] = useState('Lviv');
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeather] = useState<any>(null);
  const [forecastData, setForecastWeather] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  async function getWeather(city: string) {
    weatherServiceInstance
      .getWeather(city)
      .then((data) => {
        // handle success
        // eslint-disable-next-line no-console
        console.log(data);
        setWeather(data);
      })
      .finally(() => setIsLoading(false));
  }

  async function getWeatherForecast() {
    weatherServiceInstance.getWeatherForecast().then((data) => {
      setForecastWeather(data);
    });
    // .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getWeather(city);
    getWeatherForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [city]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const inputValue = (event: any) => {
    const { value } = event.target;
    // eslint-disable-next-line no-console
    console.log(value);
    setCity(value);
  };
  const debounce = (func: any) => {
    let timer: any;
    // eslint-disable-next-line func-names
    return function (this: any, ...args: any) {
      const context = this;
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => {
        timer = null;
        func.apply(context, args);
      }, 1000);
    };
  };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const optimisedVersion = useCallback(debounce(inputValue), []);
  return (
    <div className="weather-components">
      {isLoading ? (
        <Spin className="loader" size="large" spinning={isLoading} />
      ) : (
        <>
          <div className="center-input">
            <Input type="text" onChange={optimisedVersion} />
          </div>
          <div className="weather-block">
            <div className="weather-city">{weatherData.name}</div>
            <div className="weather-description">{weatherData.weather[0].description}</div>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <div className="weather-temp">
              {Math.round(weatherData.main.temp)}
              °c
            </div>
          </div>
          <div className="forecast">
            {forecastData?.daily.map((day: any) => (
              <div className="forecast-item forecast-font" key={day.dt}>
                <div className="forecast-day">{moment(day.dt * 1000).format('dddd')}</div>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="forecast-icon"
                />
                <div className="forecast-temp">
                  NIGHT-
                  {Math.round(day.temp.night)}
                  °c
                </div>
                <div className="forecast-temp">
                  DAY-
                  {Math.round(day.temp.day)}
                  °c
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;
