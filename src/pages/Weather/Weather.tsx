import React, { useCallback, useEffect, useState } from 'react';
import './Weather.scss';
import { Input, Spin } from 'antd';
import weatherServiceInstance from './WeatherService';

const Weather = () => {
  const [city, setCity] = useState('Lviv');
  const [isLoading, setIsLoading] = useState(true);
  const [weatherData, setWeather] = useState<any>(null);
  const [forecastData, setForecastWeather] = useState<any>(null);

  // eslint-disable-next-line @typescript-eslint/no-shadow
  function getWeather(city: string) {
    weatherServiceInstance
      .getWeather(city)
      .then((data) => {
        setWeather(data);
      })
      .finally(() => setIsLoading(false));
  }

  function getWeatherForecast() {
    weatherServiceInstance.getWeatherForecast().then((data) => {
      setForecastWeather(data);
    });
  }

  useEffect(() => {
    getWeather(city);
  }, [city]);
  useEffect(() => {
    getWeatherForecast();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleInputChange = (event: any) => {
    const { value } = event.target;
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
  const delayedHandleInputChange = useCallback(debounce(handleInputChange), []);
  return (
    <div className="weather-component">
      {isLoading ? (
        <Spin className="loader" size="large" spinning={isLoading} />
      ) : (
        <>
          <div className="search-bar">
            <Input type="text" onChange={delayedHandleInputChange} />
          </div>
          <div className="weather-card ">
            <div className="weather-city">{weatherData.name}</div>
            <div className="weather-description">{weatherData.weather[0].description}</div>
            <img
              className="weather-icon"
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="icon"
            />
            <div className="weather-temperature">
              {Math.round(weatherData.main.temp)}
              °c
            </div>
          </div>
          <div className="forecast">
            {forecastData?.daily.map((day: any) => (
              <div className="forecast-item" key={day.dt}>
                <div className="forecast-day">
                  {new Intl.DateTimeFormat('en-GB', { weekday: 'short' }).format(day.dt * 1000)}
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                  alt="weather icon"
                  className="forecast-icon"
                />
                <div className="forecast-temperature">
                  NIGHT:&nbsp;
                  {Math.round(day.temp.night)}
                  °c
                </div>
                <div className="forecast-temperature">
                  DAY:&nbsp;
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
