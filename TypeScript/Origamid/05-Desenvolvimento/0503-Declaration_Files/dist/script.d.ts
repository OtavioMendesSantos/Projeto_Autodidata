declare global {
    interface Usuario {
        nome: string;
        id: string;
    }
    type Livro = {
        nome: string;
        preco: number;
        quantidade: number;
    };
}
interface Produto {
    nome: string;
    preco: number;
    quantidade: number;
}
export declare const livro: Produto;
export {};
