"use strict";
console.log(document.constructor);
class Produto {
    tipo = "Livro";
    ISBN = "123";
    editora = "Editora A";
    nome;
    valor;
    constructor(nome, valor) {
        this.nome = nome;
        this.valor = valor;
    }
    getPreco() {
        return Produto.transformarPreco(this.valor);
    }
    static transformarPreco(preco) {
        return `R$ ${preco}`;
    }
}
const livro = new Produto("Dorohedoro", 10);
// livro.tipo = 'Livro'
//  livro.ISBN
Produto.transformarPreco(10);
class Livro extends Produto {
    paginas;
    constructor(nome, valor, paginas) {
        super(nome, valor);
        this.paginas = paginas;
    }
}
class Quadrado {
    lados = 4;
    medida;
    constructor(medida) {
        this.medida = medida;
    }
    getPerimetro() {
        return this.medida * this.lados;
    }
    getArea() {
        return this.medida * this.medida;
    }
}
class Circulo {
    PI = Math.PI;
    raio;
    constructor(raio) {
        this.raio = raio;
    }
    getPerimetro() {
        return Math.round(2 * this.PI * this.raio * 100) / 100;
    }
    getArea() {
        return Math.round(this.PI * (this.raio * this.raio) * 100) / 100;
    }
}
const formas = [2, 32, 12, 3, 4, 20, 37, 9].map((n) => {
    if (n < 15) {
        return new Quadrado(n);
    }
    else {
        return new Circulo(n);
    }
});
formas.forEach((forma) => {
    if (forma instanceof Quadrado) {
        console.log(forma.getArea());
    }
    if (forma instanceof Circulo) {
        console.log(forma.getPerimetro());
    }
});
const q1 = new Quadrado(10);
if (q1 instanceof Quadrado) {
    console.log(q1.getArea());
}
