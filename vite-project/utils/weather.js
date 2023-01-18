import axios from 'axios';


export const  getWeatherByLocation = function() {
    getLocation();
}

export const getWeather = (url) => {
    return axios.get(url).then(response => {
      console.log(response.data)   

      const cityCard = document.createElement('div');

      const imgSrc = "https://openweathermap.org/img/w/" + response.data.weather[0].icon + ".png";

      cityCard.innerHTML = `<h3>${response.data.name}</3> <h4>${response.data.main.temp} °C</h4><p>${response.data.weather[0].description}</p> <img src=${imgSrc}></img>`;

      document.querySelector('#app').appendChild(cityCard);
        
    }).catch(error => {
      console.log(error);
    })
  }

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    console.log("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&units=metric&appid=96196581009ceee5cfcf8592e7cb5eb4`;

    getWeather(url)
}