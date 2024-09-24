const btn = document.querySelector("button");
function handleClick(e: PointerEvent) {
    console.log(e);
}

btn?.addEventListener("pointerdown", handleClick);

function handleScroll (event: Event) {
    console.log(event);
}

window.addEventListener("scroll", handleScroll);

function handleAtivarMenu(event: Event) {
    if (event instanceof MouseEvent) {
        console.log(event.pageX, event.pageY);
    } 
    if (event instanceof TouchEvent) {
        console.log(event.touches);
    }
}

document.documentElement.addEventListener("click", handleAtivarMenu);
document.documentElement.addEventListener("touchstart", handleAtivarMenu);
document.documentElement.addEventListener("keydown", handleAtivarMenu);
