
// Métodos para operar arrays

/* 
    O método slice (não é o splice) também dá pra operar em arrays
    Neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array
*/

console.clear()

let nomes = new Array('caio', 'joao', 'ana', 'carlos')

// Para criar dois novos arrays, um até metade e outro da metade até o fim
let nomes_1 = nomes.slice(0, nomes.length / 2)
let nomes_2 = nomes.slice(-(nomes.length / 2))

console.log(nomes)
console.log(nomes_1)
console.log(nomes_2)
