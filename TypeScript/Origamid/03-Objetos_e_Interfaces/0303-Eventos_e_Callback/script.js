"use strict";
// const btn = document.querySelector("button");
// function handleClick(e: PointerEvent) {
//     console.log(e);
// }
// btn?.addEventListener("pointerdown", handleClick);
// function handleScroll (event: Event) {
//     console.log(event);
// }
// window.addEventListener("scroll", handleScroll);
// function handleAtivarMenu(event: Event) {
//     if (event instanceof MouseEvent) {
//         console.log(event.pageX, event.pageY);
//     }
//     if (event instanceof TouchEvent) {
//         console.log(event.touches);
//     }
// }
// document.documentElement.addEventListener("click", handleAtivarMenu);
// document.documentElement.addEventListener("touchstart", handleAtivarMenu);
// document.documentElement.addEventListener("keydown", handleAtivarMenu);
// const btn = document.querySelector("button");
// function handleClick(this: HTMLButtonElement, e: MouseEvent){
//     console.log(this);
// }
// btn?.addEventListener("click", handleClick);
const btn = document.querySelector("button");
function handleClick(e) {
    const el = e.currentTarget;
    if (el instanceof HTMLElement) {
        console.log(el.innerText);
    }
}
btn?.addEventListener("click", handleClick);
