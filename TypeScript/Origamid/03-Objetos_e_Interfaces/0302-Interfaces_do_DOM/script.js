"use strict";
const video = document.querySelector('video');
const anchor = document.querySelector('a');
const img = document.querySelector('img');
if (video instanceof HTMLVideoElement) {
    console.log(video.currentTime);
    console.log(video.volume);
}
