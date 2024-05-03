//Scroll Suave Link Interno
export default function initScrollSuave(){
  const linksInternos = document.querySelectorAll('[data-menu="suave"] a[href^="#"]')
  
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
