// lenght pode não corresponder ao número total de elementos do array
// lenght não conta o número de elementos. Vê apenas o último índice e acrescenta + 1

let nomes = new Array('joao', 'ana', 'carlos')
nomes[100] = 'antonio'

console.log(nomes)

console.log(nomes.length)