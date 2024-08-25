//const bgImageListJSON = JSON.parse(document.querySelector('#myJson').textContent);
//import bgImageListJSON from 'img.json' with  { type: `json` };
/*
const bgImageListJSON = fetch('./img.json')
                        .then(response => response.json())
                        .then(data => console.log(data))
                        .catch(error => console.log(error));
*/
/*
const images =
[
    "1.jpg",
    "2.jpg",
    "3.jpg",
    "4.jpg",
    "5.jpg",
    "6.jpg",
    "7.jpg",
    "8.jpg"
];
*/

const images = bgImageListJSON.bgImageList;
let randomNo = Math.floor(Math.random() * images.length);
console.log(randomNo);

const chosenImage = images[randomNo].filename;
//const bgImage = document.createElement("img");
//const bgImage = document.querySelector("#myBg");
//const bgdiv = document.querySelector("#imageBackground");
//bgImage.src = `img/${chosenImage}`;
//bgImage.className = images[randomNo].sytle;
//document.body.appendChild(bgImage);
//bgdiv.appendChild(bgImage);

document.body.style.backgroundImage = `url(img/${chosenImage})`;
document.body.style.backgroundSize = "contain";
document.body.style.backgroundPosition = "center";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundAttachment = "fixed";
