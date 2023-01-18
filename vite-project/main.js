import './style.css'
import { setupCounter } from './counter.js'
import {testModule} from './utils';
import axios from 'axios';

const url = 'https://api.unsplash.com/search/photos?query=stockholm&client_id=lBDpFxePt9iI1ujvaCfI4GwRQOUul3nzGAfICuVJst0';

const getImage = () => {
  return axios.get(url).then(response => {
    let randInt = Math.floor(Math.random() * response.data.results.length)
    document.getElementById("image").src = response.data.results[randInt].urls.raw;
    document.querySelector('.publisher').textContent = 'Made By: ' + response.data.results[randInt].user.name
  })
}

getImage();

document.querySelector('#app').innerHTML = `
  <div>
    <img id="image" src="" alt="Dog" width="350" height="350" />
    <div class="publisher": "></div>
  </div>
`

