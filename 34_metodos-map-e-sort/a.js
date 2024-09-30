
// Vamos olhar um método muito usado nos arrays. O método map.

console.clear()

let nomes = new Array('joao', 'ana', 'carlos', 'vitoria', 'vania', 'jonhson', 'patricia')

// pretendemos ter um novo array com o número de caracteres de todos os elementos da coleção nomes

let tamanhos = nomes.map(nome => nome.length)
console.table(tamanhos)