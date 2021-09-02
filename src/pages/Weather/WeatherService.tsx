import axios from 'axios';

export class WeatherService {
  // eslint-disable-next-line no-useless-constructor
  constructor(
    private API_KEY: string = '0bf1d5f6e1ff530158a2e691a88eadc7',
    private baseUrl: string = 'https://api.openweathermap.org/data/2.5/',
  ) {
    // do nothing
  }

  getWeather(city: string): Promise<any> {
    return axios
      .get(`${this.baseUrl}weather`, {
        params: {
          units: 'metric',
          q: city,
          appid: this.API_KEY,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }

  getWeatherForecast(): Promise<any> {
    return axios
      .get(`${this.baseUrl}onecall`, {
        params: {
          lat: '49',
          lon: '24',
          exclude: 'hourly',
          units: 'metric',
          appid: this.API_KEY,
        },
      })
      .then((response) => response.data)
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.log(error);
      });
  }
}
const weatherServiceInstance = new WeatherService();
export default weatherServiceInstance;
