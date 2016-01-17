//used for making ajax requests
import axios from 'axios';

const API_KEY = 'b691bfcb0bb6247b598f7341847bfcce';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){

  const url = `${ROOT_URL}&q=${city},us`;

  //request variable is a promise
  const request = axios.get(url);

  return {
    type: FETCH_WEATHER,
    /*
     * redux-promise middleware automatically will inspect the 'payload' property
     * to see if its a promise. if it is, it will stop the action, wait for it to resolve
     * and then immediately dispatch the exact same action again but replaces the 'payload'
     * to be the resolved request
     */
    payload: request
  }
}