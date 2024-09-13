"use strict";
// const video = document.querySelector('video');
// const anchor = document.querySelector('a');
// const img = document.querySelector('img');
// if (video instanceof HTMLVideoElement) {
//   console.log(video.currentTime);
//   console.log(video.volume);
// }
const links = document.querySelectorAll('.link');
// console.log(NodeListOf) -> Interface != classe  
// console.log(NodeList) -> Classe 
links.forEach((link) => {
    if (link instanceof HTMLAnchorElement) {
        console.log(link.href);
    }
    else {
        console.log(typeof link);
    }
});
// links.filter - Não funciona
const ArrayDeLinks = Array.from(links);
console.log(ArrayDeLinks.filter((link) => link instanceof HTMLAnchorElement));
