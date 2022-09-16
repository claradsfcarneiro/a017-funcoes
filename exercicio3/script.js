/*
Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).
Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações.
*/

const num1 = Number(prompt("Digite um número"));
const num2 = Number(prompt("Digite outro número"));

function soma(num1, num2) {
    return `${num1} + ${num2} = ${num1 + num2}`;
}

function subtracao(num1, num2) {
    return `${num1} - ${num2} = ${num1 - num2}`;
}

function multiplicacao(num1, num2) {
    return `${num1} x ${num2} = ${num1 * num2}`;
}

function divisao(num1, num2) {
    return `${num1} ÷ ${num2} = ${num1 / num2}`;
}

console.log(soma(num1, num2));
console.log(subtracao(num1, num2));
console.log(multiplicacao(num1, num2));
console.log(divisao(num1, num2));