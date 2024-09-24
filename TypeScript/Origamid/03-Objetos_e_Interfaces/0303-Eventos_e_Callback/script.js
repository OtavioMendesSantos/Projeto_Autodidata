"use strict";
const btn = document.querySelector("button");
function handleClick(e) {
    console.log(e);
}
btn?.addEventListener("pointerdown", handleClick);
function handleScroll(event) {
    console.log(event);
}
window.addEventListener("scroll", handleScroll);
function handleAtivarMenu(event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX, event.pageY);
    }
    if (event instanceof TouchEvent) {
        console.log(event.touches[0].clientX, event.touches[0].clientY);
    }
}
document.documentElement.addEventListener("click", handleAtivarMenu);
document.documentElement.addEventListener("touchstart", handleAtivarMenu);
document.documentElement.addEventListener("keydown", handleAtivarMenu);
