import outsideClick from "./oustideclick.js";

export default class MenuMobile{
    constructor(menuButton, menuList, events = ['click']){
        this.menuButton = document.querySelector(menuButton)
        this.menuList = document.querySelector(menuList)
        this.eventos = events //['touchstart'] -> Não funciona correto
        this.activeClass = 'active'
        this.openMenu = this.openMenu.bind(this)
    }
    
    openMenu(event){
        this.menuList.classList.add(this.activeClass)
        this.menuButton.classList.add(this.activeClass)
        outsideClick(this.menuList, this.eventos, ()=>{
            this.menuList.classList.remove(this.activeClass)
            this.menuButton.classList.remove(this.activeClass)
        })
    }
    
    addMenuMobileEvents() {
        this.eventos.forEach(userEvent=> this.menuButton.addEventListener(userEvent, this.openMenu))
    }
    
    init(){
        if (this.menuButton && this.menuList) {
            this.addMenuMobileEvents()
        }
        return this
    }
}