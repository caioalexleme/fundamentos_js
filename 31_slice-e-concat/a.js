
// Métodos para operar arrays

/* 
    O método slice (não é o splice) também da pra operar em arrays

    Neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array


*/

console.clear()

let nomes = new Array('joao', 'ana', 'caio', 'andré')

// cria um novo array a partir do inicial entre o índice 1 (inclusive) e o 3 (exclusive)
let nomes_extraidos = nomes.slice(1, 3)

console.log(nomes)
console.log(nomes_extraidos)
