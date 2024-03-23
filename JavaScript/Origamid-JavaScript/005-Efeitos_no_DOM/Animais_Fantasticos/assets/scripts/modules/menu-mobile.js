import outsideClick from "./oustideclick.js";
// Todo: Está com um bug no touch que não faço ideia de como resolver  
export default function initMenuMobile(){
    const menuButton = document.querySelector('[data-menu="button"]')
    const menuList = document.querySelector('[data-menu="list"]')
    const eventos = ['click', 'touchstart']

    if(menuButton){
        function openMenu(event){
            menuList.classList.add('active')
            menuButton.classList.add('active')
            outsideClick(menuList, ['click', 'touchstart'], ()=>{
                menuList.classList.remove('active')
                menuButton.classList.remove('active')
            })
        }
    
        eventos.forEach(userEvent=> menuButton.addEventListener(userEvent, openMenu))
    }
}