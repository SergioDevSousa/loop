// Faça um programa que peça um valor entre zero e dez. Mostre uma mensagem caso o valor seja 
//inválido e continue pedindo até que o usuário informe um valor válido.

let valor = null;


while(true){
    let numero = prompt('Digite um número de 0 a 10');
    valor = Number(numero);
    
    if (valor >= 0 && valor <= 10){
        alert(`Você digitou o número ${valor} e é um valor válido`);
        break;
    }else{
        alert(`Você digitou o número ${valor} e é um valor inválido`)
    }
}


