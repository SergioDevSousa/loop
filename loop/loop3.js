// Escrever uma função chamada fibonacciNumbers(). A função quando chamada deve 
//apresentar os valores da sequência numérica de Fibonacci até o décimo quinto termo.
// A sequência de Fibonacci é formada por:

function fibonacciNumbers(n){
    let sequence = [0,1];
    for (let i = 2; i < n; i++){
        sequence.push(sequence[i - 1] + sequence [i - 2]);
    }
    return sequence;

}

let fibonacci15 = fibonacciNumbers(15);
console.log(fibonacci15)




