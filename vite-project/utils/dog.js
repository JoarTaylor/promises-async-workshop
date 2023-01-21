import axios from 'axios';
const dogBreedEl = document.querySelector('.dog-breed');

export const getDogBreed = (url) => {
    return axios.get(url).then(response => {  
      let obj = response.data.message
      let result = Object.keys(obj).map((key) => [String(key), obj[key]]);

      let randInt = Math.floor(Math.random() * result.length);
      
      dogBreedEl.textContent = 'Random dog breed: ' + result[randInt][0]

    }).catch(error => {
      console.log(error);
    })
  }