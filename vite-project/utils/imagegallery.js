import axios from "axios";

const imagesModal = document.querySelector('.gallery-modal');

const url = 'https://api.unsplash.com/search/photos?query=mushrooms&client_id=lBDpFxePt9iI1ujvaCfI4GwRQOUul3nzGAfICuVJst0';

const promiseArr = [];

export const loadGallery = function() {
for (let i = 0; i < 5; i++) {
    let myPromise = new Promise((resolve, reject) => {
        let getImg = () => {
            return axios.get(url).then(response => {
                console.log(response.data.results[i].urls.raw);
                resolve(response.data.results[i].urls.raw)
            })
        }
        getImg();
    })

    promiseArr.push(myPromise);
}

    Promise.all(promiseArr).then((values) => {
        values.forEach(value => {
            let image = document.createElement('img');
            image.src = value;
            image.style.height = '80px';
            image.style.width = '80px';
            image.style.margin = '5px'
            imagesModal.appendChild(image);
        })
    })
}


/* const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});
// Expected output: Array [3, 42, "foo"]
 */