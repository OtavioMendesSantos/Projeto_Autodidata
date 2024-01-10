//Exercício Navegação por Tabs
function initTabNav(){
  const tabMenu = document.querySelectorAll('.js-tabmenu li')
  const tabContent = document.querySelectorAll('.js-tabcontent section')

  if(tabMenu.length && tabContent.length){
    tabContent[0].classList.add('ativo')

    function activeTab (index){
      tabContent.forEach((section)=>{
        section.classList.remove('ativo')
      })
      tabContent[index].classList.add('ativo')
    }

    tabMenu.forEach((itemMenu, index)=>{
      itemMenu.addEventListener('click', ()=>{
        activeTab(index)
      })
    })
  }
}
initTabNav()

//Exercício Accordion List
function initAccordion(){
  const accordionList = document.querySelectorAll('.js-accordion dt')
  const activeClass = 'ativo'
    if(accordionList.length){
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)

    function activeAccordion(){
      this.classList.toggle(activeClass)
      this.nextElementSibling.classList.toggle(activeClass)
    }

    accordionList.forEach((item)=>{
      item.addEventListener('click', activeAccordion)
    })
  }
}
initAccordion()

//Exercício Scroll Suave Link Interno
function initScrollSuave(){
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]')
  function scrollToSecction(event){
    event.preventDefault()
    const href = event.currentTarget.getAttribute('href')
    const section = document.querySelector(href)
    section.scrollIntoView({ /* PENDENTE: Ver isso */
      behavior:'smooth',
      block: 'start'
    })
    
    //forma alternativa
    /* 
    sectionTop = section.offsetTop
    window.scrollTo({
      top: sectionTop,
      behavior: "smooth"
    })
    */
  }

  linksInternos.forEach((link)=>{
    link.addEventListener('click', scrollToSecction)
  })
}
initScrollSuave()

//Exercício Animação ao Scroll
function initAnimaScroll(){
  const sections = document.querySelectorAll('.js-scroll')
  if(sections){
    const windowMetade = window.innerHeight * 0.75

    function animaScroll(){
      sections.forEach((section)=>{
        const sectionTop = section.getBoundingClientRect().top
        const isSectionVisible = (sectionTop - windowMetade) < 0
        if(isSectionVisible){
          section.classList.add('ativo')
        } else {
          section.classList.remove('ativo')
        }
      })
    }
  }
  animaScroll()

  window.addEventListener('scroll', animaScroll)
}
initAnimaScroll()