// Escreva uma função que recebe um valor do tipo string e com no mínimo 5 caracteres. Insira o valor recebido em um array e retorne o array gerado

function inserirString (valor){

    if (typeof valor === 'string' && valor.length >=5){
        let array = [valor]
        return array
    }else{
        console.error('O valor deve ser uma string de no mínimo 5 caracteres')
    }
    
}
try {
    let resultado = inserirString('Tobe')
    console.log(resultado)
} catch (e){
    console.error(e.message)
}