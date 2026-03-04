// Pede dois números
let num1 = Number(prompt("Digite o primeiro número:"));
let num2 = Number(prompt("Digite o segundo número:"));

// Pede a operação
let operacao = prompt("Digite a operação (+, -, *, /):");

let resultado;

// Verifica qual operação foi escolhida
if (operacao === "+") {
    resultado = num1 + num2;
} else if (operacao === "-") {
    resultado = num1 - num2;
} else if (operacao === "*") {
    resultado = num1 * num2;
} else if (operacao === "/") {
    resultado = num2 !== 0 ? num1 / num2 : "Não pode dividir por zero!";
} else {
    resultado = "Operação inválida!";
}

alert("Resultado: " + resultado);