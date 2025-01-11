import { Product, URL_BASE } from "./global";

function pluginSlide(seletor: string) {
    console.log('Criar Slide: ',seletor);
}

const produto: Product = {
    id: 1,
    name: 'Notebook',
    price: 2000,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
}

console.log(URL_BASE)
console.log(produto)

export default pluginSlide