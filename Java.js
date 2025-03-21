console.log('Hello World');

let numero = prompt('Digite seu numero');

function verificarpar(numero){
    if (numero % 2 === 0){
        console.log(numero + " é igual a par.");
    }else{
        console.log(numero + " é igual a impar");
    }
}
verificarpar(numero);

let n1 = parseFloat(prompt('Escreva n1;'));
let n2 = parseFloat(prompt('Escreva n2;'));

function calcular(num1,num2) {
    const soma = num1 + num2;
    const subtracao = num1 - num2;
    const multiplicacao = num1 * num2;
    if(num2 === 0){
        console.log("não da pra dividir po 0")
    } else{
        const divisao = num1 / num2;
        console.log(divisao)
    }
}

calcular(n1, n2);

let  = "";
let i = 10;
do {
  text += i + "<br>";
  i++;
}
while (i < 10);