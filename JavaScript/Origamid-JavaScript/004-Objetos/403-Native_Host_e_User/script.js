// Liste 5 objetos nativos
/* 
Object
Array
String
Boolean
Function
*/
// Liste 5 objetos do browser
/* 
Window
Window.history
HTMLCollection
NodeList
Element
*/
// Liste 2 Métodos, Propriedades ou Objetos presentes no Chrome que não existem no Firefox
if (typeof document.webkitHidden !== "undefined"){
    console.log('existe')
}else{
    console.log('não existe')
}

if (typeof document.webkitVisibilityState !== "undefined"){
    console.log('existe')
}else{
    console.log('não existe')
}