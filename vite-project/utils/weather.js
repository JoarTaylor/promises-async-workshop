import axios from 'axios';
const astroEL = document.querySelector('.astronomical');

export const  getWeatherByLocation = function() {
    getLocation();
}

export const getWeather = (url) => {
    return axios.get(url).then(response => { 

      const cityCard = document.querySelector('.city-card');

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

export const showPosition = function(position) {
    

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=96196581009ceee5cfcf8592e7cb5eb4`;

    getWeather(url)

    const astroUrl = 'https://api.ipgeolocation.io/astronomy?apiKey=f545deabe46440ea86e651b6181b395b&lat=' + lat + '&long=' + lon;
    getAstronomical(astroUrl);
}
const getAstronomical = (url) => {
  return axios.get(url).then(response => {
      astroEL.innerHTML = `Sunrise:  ${response.data.sunrise} <br> Sunset: ${response.data.sunset} <br> Moonrise:  ${response.data.moonrise} <br> Moonset: ${response.data.moonset}`
  }).catch(error => {
    console.log(error);
  })
}