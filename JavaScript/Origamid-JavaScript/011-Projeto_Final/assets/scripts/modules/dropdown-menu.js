import outsideClick from "./oustideclick.js"

export default class DropDownMenu {
    constructor(dropDownMenus, events = ['touchstart', 'click']){
        this.dropDownMenus = document.querySelectorAll(dropDownMenus)
        this.events = events
        this.activeClass = 'active'
        this.activeDropDownMenu = this.activeDropDownMenu.bind(this) 
    }

    // ativa dropdown menu e adiciona a funcionalidade de clique fora dele
    activeDropDownMenu(event){
        event.preventDefault()
        const element = event.currentTarget

        element.classList.add(this.activeClass)
        outsideClick(element, this.events, () => {
            element.classList.remove(this.activeClass)
        })
    }
    
    //  adiciona eventos ao dropdown menu
    addDropDownMenusEvent(){
        this.dropDownMenus.forEach((menu) => {
            this.events.forEach((userEvent) => {
                menu.addEventListener(userEvent, this.activeDropDownMenu)
            })
        })
    }

    init(){
        if(this.dropDownMenus.length){
            this.addDropDownMenusEvent()
        }
        return this
    }    
}