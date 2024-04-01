/* 
window.history;
window.history.back(); // vai para a anterior
window.history.forward(); // vai para a próxima
window.history.pushState(obj, title, url) 
*/

const links = document.querySelectorAll('a')

async function fetchPage(url){
    document.querySelector('.content').innerHTML = '<img src="loading.gif" alt="Carregando">'
    const pageResponse = await fetch(url)
    const pageText = await pageResponse.text()
    replaceContent(pageText)
}

function handleClick(event){
    event.preventDefault()
    fetchPage(event.target.href);
    window.history.pushState(null, null, event.target.href)
}

function replaceContent(newText){
    const newHtml = document.createElement('div')
    newHtml.innerHTML = newText

    const oldContent = document.querySelector('.content')
    const newContent = newHtml.querySelector('.content')
    
    oldContent.innerHTML = newContent.innerHTML
    document.title = newHtml.querySelector('title').innerHTML
    /* const novo = document.documentElement.appendChild(newHtml) */
}

window.addEventListener('popstate', ()=>{
    fetchPage(window.location.href)
})

links.forEach((link)=>{
    link.addEventListener('click', handleClick)
})