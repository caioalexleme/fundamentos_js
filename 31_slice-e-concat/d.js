
// Métodos para operar arrays

/* 
    O método slice (não é o splice) também dá pra operar em arrays
    Neste caso, podemos usá-lo para criar novos arrays a partir de partes de um outro array
*/

console.clear()

let nomes = ['caio', 'ana', 'vania']

// copiar um array tem o problema de ser uma cópia por referência
// let novos_nomes = nomes
// novos_nomes[1] = 'carlos'

// console.log(novos_nomes)
// console.log(nomes)

// podemos usar o slice sem qualquer argumento para fazer uma cópia para um novo array
let novos_nomes = nomes.slice()
novos_nomes[1] = 'vitor'
console.log(nomes)
console.log(novos_nomes)
