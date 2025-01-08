
/* 
Duas das estruturas mais usadas no javascript são os arrays e os objetos.
A desestruturação (destructuring) é uma declaração especial da síntese que permite transformar elementos de um array ou propriedades de um objeto em variáveis separadas.

*/

console.clear()

// arrays

let nomes = ['joao', 'ana', 'maria']

let [nome1, nome2, nome3] = nomes

console.log(nome1)
console.log(nome2)
console.log(nome3)

console.log('-'.repeat(60))

// E podemos usar a mesma sintaxe com métodos que retornam arrays.
// Por exemplo o método split de uma string.

let nomeCompleto = 'caio alexandre'
let [nome, apelido] = nomeCompleto.split(' ')

console.log(nome)
console.log(apelido)

// IMPORTANTE: Os valores do array e da string continuam inalterados.
// Apenas são criados novas variáveis.