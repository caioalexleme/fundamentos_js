
// Métodos para operar arrays

/* 
    O método slice (não é o splice) também dá pra operar em arrays
    Neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array
*/

console.clear()

let nomes = ['joao', 'ana', 'carlos', 'bete']

// cria um novo array a partir do penúltimo índice até o fim
let nomes_extraidos = nomes.slice(-2)

console.log(nomes)
console.log(nomes_extraidos)