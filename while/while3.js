// Faça um programa que enquanto a entrada for números inteiros positivos, menores que 10, continue somando. Quando um valor negativo ou maior que 10 for informado, pare a execução, alerte a soma e a média.

function calcularSomaEMedia() {
    let soma = 0;
    let count = 0;

    while (true) {
        let input = prompt("Digite um número inteiro positivo menor que 10 (ou um número negativo ou maior que 10 para parar):");
        let numero = parseInt(input);
        if (numero >= 0 && numero <= 10) {
            soma += numero;
            count++;
        }
        if (numero < 0 || numero > 10) {
            alert('O resultado é!!!!!!!')
            break;
        }
    }

    let media = count > 0 ? soma / count : 0;
    
    alert(`Soma: ${soma}\nMédia: ${media}`);
}

calcularSomaEMedia();
