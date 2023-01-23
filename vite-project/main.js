import './style.css';
import {getWeatherByLocation, parseDate, getDogBreed, loadGallery} from './utils';
import axios from 'axios';



const url = 'https://api.unsplash.com/search/photos?query=stockholm&client_id=lBDpFxePt9iI1ujvaCfI4GwRQOUul3nzGAfICuVJst0';

const getImage = () => {
  return axios.get(url).then(response => {
    let randInt = Math.floor(Math.random() * response.data.results.length)
    document.getElementById("app").style.backgroundImage = `url(${response.data.results[randInt].urls.raw})`;


    document.querySelector('.publisher').textContent = 'Background picture by: ' + response.data.results[randInt].user.name
  }).catch(error => {
    document.querySelector('.publisher').textContent = `Could not load image: ${error}`;
    document.getElementById("app").style.backgroundImage = `url(404.jpg)`;
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

const galleryBtn = document.querySelector('.image-gallery-btn');
const imagesModal = document.querySelector('.gallery-modal');
const closeModal = document.querySelector('.close');

 galleryBtn.addEventListener('click', () => {
    imagesModal.showModal();
  })
  
  closeModal.addEventListener('click', () => {
    imagesModal.close();
  })

loadGallery();