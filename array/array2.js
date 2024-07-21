// Escreva uma função que recebe um valor do tipo number. Use o valor recebido para acessar uma posição do seguinte array:

// let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]⁠

// Caso a posição exista, retorne o nome que se encontra nela. ⁠Caso não seja acessado nenhuma posição com o valor recebido, ⁠alerte: "Valor não encontrado".

function acessarArray(posicao) {
    let arr = ["Hermanoteu", "Olonéia", "Migalatéia", "Godart"]

    if (typeof posicao === 'number' && posicao >= 0 && posicao < arr.length) {
        return arr[posicao];
    } else {
        alert('valor não encontrado')
        return null
    }
}

let resultado = acessarArray(5)
if (resultado !== null){
    console.log(`O nome da posição é ${resultado}`)
}