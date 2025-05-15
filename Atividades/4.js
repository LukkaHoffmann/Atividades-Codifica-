//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
const prompt = require('prompt-sync')();

console.log("==== MENU INTERATIVO ====");
console.log("1 - Calcular IMC");
console.log("2 - Verificar tipo de triângulo");
console.log("3 - Calcular valor da compra de maçãs");

const opcao = parseInt(prompt("Escolha uma opção (1 a 3): "));

switch (opcao) {
    case 1:
        const peso = parseFloat(prompt("Informe seu peso (kg): "));
        const altura = parseFloat(prompt("Informe sua altura (m): "));
        const imc = peso / (altura * altura);
        console.log(`Seu IMC é: ${imc.toFixed(2)}`);

        if (imc < 18.5) {
            console.log("Baixo peso");
        } else if (imc < 25) {
            console.log("Peso normal");
        } else if (imc < 30) {
            console.log("Sobrepeso");
        } else {
            console.log("Obesidade");
        }
        break;

    case 2:
        const A = parseFloat(prompt("Lado A: "));
        const B = parseFloat(prompt("Lado B: "));
        const C = parseFloat(prompt("Lado C: "));

        if (A < B + C && B < A + C && C < A + B) {
            if (A === B && B === C) {
                console.log("Triângulo Equilátero");
            } else if (A === B || A === C || B === C) {
                console.log("Triângulo Isósceles");
            } else {
                console.log("Triângulo Escaleno");
            }
        } else {
            console.log("Os lados fornecidos não formam um triângulo.");
        }
        break;

    case 3:
        const quantidade = parseInt(prompt("Quantas maçãs foram compradas? "));
        const preco = quantidade < 12 ? 0.30 : 0.25;
        const total = quantidade * preco;
        console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
        break;

    default:
        console.log("Opção inválida. Tente novamente.");
}