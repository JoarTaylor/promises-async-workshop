import './style.css';
import {getWeatherByLocation, parseDate, getDogBreed} from './utils';
import axios from 'axios';


const url = 'https://api.unsplash.com/search/photos?query=stockholm&client_id=lBDpFxePt9iI1ujvaCfI4GwRQOUul3nzGAfICuVJst0';

const getImage = () => {
  return axios.get(url).then(response => {
    let randInt = Math.floor(Math.random() * response.data.results.length)
    document.getElementById("app").style.backgroundImage = `url(${response.data.results[randInt].urls.raw})`;


    document.querySelector('.publisher').textContent = 'Made By: ' + response.data.results[randInt].user.name
  }).catch(error => {
    document.querySelector('.publisher').textContent = `Could not load image: ${error}`;
  })
}

getImage();

getWeatherByLocation();


setInterval(() => {
  const newDate = new Date();
  const unixTime = newDate.getTime()
  parseDate(unixTime)
}, 1000);

const dogUrl = 'https://dog.ceo/api/breeds/list/all';

getDogBreed(dogUrl);