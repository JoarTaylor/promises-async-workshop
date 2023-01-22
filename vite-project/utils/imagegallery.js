import axios from "axios";

const imagesModal = document.querySelector('.gallery-modal');

const url = 'https://api.unsplash.com/search/photos?query=mushrooms&client_id=lBDpFxePt9iI1ujvaCfI4GwRQOUul3nzGAfICuVJst0';

const promiseArr = [];

export const loadGallery = function() {
for (let i = 0; i < 5; i++) {
    let myPromise = new Promise((resolve, reject) => {
        let getImg = () => {
            return axios.get(url).then(response => {
                resolve(response.data.results[i].urls.raw)
            }).catch(error => {
                reject(error)
                let errorEl = document.createElement('p');
                errorEl.textContent = error;
                imagesModal.appendChild(errorEl);
            })
        }
        getImg();
    })

    promiseArr.push(myPromise);
    console.log(promiseArr)
}

    Promise.all(promiseArr).then((values) => {
        values.forEach(value => {
            let image = document.createElement('img');
            image.src = value;
            image.style.height = '15vh';
            image.style.width = '15vw';
            image.style.margin = '5px'
            imagesModal.appendChild(image);
        })
    })
}