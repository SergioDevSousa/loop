// Escrever um programa que calcule e apresente o somatório do número de grãos de trigo que se pode obter num tabuleiro de xadrez, obedecendo à seguinte regra:

// Colocar um grão de trigo no primeiro quadro e nos quadros seguintes o dobro do quadro anterior.

// Ou seja, no primeiro quadro coloca-se um grão, no segundo quadro colocam-se dois grãos (neste momento, tem-se três grãos), no terceiro quadro colocam-se quatro grãos (tendo neste momento sete grãos), no quarto quadro colocam-se oito grãos (tendo-se então 15 grãos) até o limite de casas que é 64. A quantidade de grãos adicionados é sempre o dobro da quantidade anterior.
// Resultado esperado: 18.446.744.073.709.552.000 grãos no tabuleiro.

function calculateGrainsOnChessboard() {
    let totalGrains = 0n;  // Usamos 'n' para trabalhar com BigInt, já que os números são muito grandes.
    let grainsOnCurrentSquare = 1n;  // Iniciamos com 1 grão no primeiro quadro.

    for (let i = 1; i <= 64; i++) {
        totalGrains += grainsOnCurrentSquare;  // Adiciona os grãos do quadro atual ao total.
        grainsOnCurrentSquare *= 2n;  // Dobra o número de grãos para o próximo quadro.
    }

    return totalGrains;
}

let result = calculateGrainsOnChessboard();
console.log(`Total de grãos no tabuleiro: ${result}`);
