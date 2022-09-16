//a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.
/*
function soma(num1, num2) {
    console.log(num1 + num2)
}

soma(2, 3);
*/

//b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.
/*

function igualdade(num1, num2) {
    if (num1 > num2) {
        console.log('O primeiro número é maior que o segundo.')
    } else if (num1 === num2) {
        console.log('O primeiro número é igual ao o segundo.')
    } else {
        console.log('O primeiro número é menor que o segundo.')
    }
}

igualdade(3, 2);
*/

//c) Uma função que receba um número e imprima se ele é par ou não
/*
function numeroPar(numero) {
    if (numero % 2 === 0) {
        console.log(`O número ${numero} é par`);
    } else {
        console.log(`O número ${numero} não é par`);
    }
}

numeroPar(4);
*/

//d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.
/*
function tamanhoEMaiusculas(string){
    console.log(`A mensagem ${string.toUpperCase()} tem ${string.length} caracteres`);
}

tamanhoEMaiusculas('Folklore é o melhor álbum da Taylor Swift');
*/