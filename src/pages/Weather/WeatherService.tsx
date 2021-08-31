import axios from 'axios';

export class WeatherService {
  // eslint-disable-next-line no-useless-constructor,no-empty-function
  constructor(private API_KEY: string = '0bf1d5f6e1ff530158a2e691a88eadc7') {}

  getWeather(city: string): Promise<any> {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.API_KEY}`,
      )
      .then((response) => response.data)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  getWeatherForecast(): Promise<any> {
    return axios
      .get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=49&lon=24&exclude=hourly,minutely&units=metric&appid=${this.API_KEY}`,
      )
      .then((response) => response.data)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
}
const weatherServiceInstance = new WeatherService();
export default weatherServiceInstance;
