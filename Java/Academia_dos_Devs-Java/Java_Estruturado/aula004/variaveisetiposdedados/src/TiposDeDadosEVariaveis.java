public class TiposDeDadosEVariaveis {
    public static void main(String[] args) throws Exception {
        // tipo nome
        //Tipo Inteiro
        byte numeroPequeno = 28; // byte suporta -128 à 128;
        System.out.println(numeroPequeno);

        short numeroShort = 32767; // short suporta -32768 à 32767;
        System.out.println(numeroShort);
        
        int numeroInteiro = -2147483648; // int suporta -2147483648 à 2147483647;
        System.out.println(numeroInteiro);
        
        long numeroLong = -9223372036854775808l; // long suporta -9223372036854775808 à 9223372036854775807; é necessário colocar um l no final do número
        System.out.println(numeroLong);
        
        //Tipo Ponto flutuante
        float peso = 78.7f; // é necessário colocar um f no final do número
        System.out.println(peso);

        double pi = 3.141592653589793238460;
        System.out.println(pi);
        
        //Tipo Char
        char letra = 'a';
        System.out.println(letra);

        //Tipo Booleano
        boolean verdade = true;
        System.out.println(verdade);

        
    }
}
/*
Variáveis Primitivas ocupam um espalo fixo na memória: inteiros, pontos flutuantes, caracteres e booleanos.
Inteiros: Byte < Short < Int < Long

Pontos Flutuantes:

Caracteres:

Booleanos:

*/