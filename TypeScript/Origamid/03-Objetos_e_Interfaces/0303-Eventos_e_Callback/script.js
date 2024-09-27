"use strict";
/* // const btn = document.querySelector("button");
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

// const btn = document.querySelector("button");
// function handleClick(e: MouseEvent) {
//   const el = e.currentTarget;
//   if (el instanceof HTMLElement) {
//     console.log(el.innerText);
//   }
// }
// btn?.addEventListener("click", handleClick); */
// Utilizando a estrutura HTML/CSS abaixo,
// crie o script que irá fazer o botão mobile funcionar (ativar/desativar a navegação).
// Estado dos elementos
// menu inativo:
// class="" em nav
// aria-expanded="false" em button
// aria-label="Abrir Menu" em button
// menu ativo:
// class="active" em nav
// aria-expanded="true" em button
// aria-label="Fechar Menu" em button
const btn = document.getElementById("btn-mobile");
const toogleMenu = (event) => {
    const nav = document.getElementById("nav");
    const button = event.currentTarget;
    if (button instanceof HTMLElement && nav) {
        nav.classList.toggle("active");
        button.setAttribute("aria-expanded", nav.classList.contains("active") ? "true" : "false");
        button.setAttribute("aria-label", nav.classList.contains("active") ? "Fechar Menu" : "Abrir Menu");
    }
};
btn?.addEventListener("pointerdown", toogleMenu);
