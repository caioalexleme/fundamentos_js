
// Como efetuar pesquisas num array?

// Vamos ver alguns métodos para pesquisar a existência ou não de determinado valor num array

console.clear()

let nomes = ['caio', 'vini', 'marcos', 'line', 'jenny', 'Gs', 'otavio']

// vamos olhar pra 3 métodos: indexOf, lastIndexOf e includes

// indexOf permite procurar o índice de um elemento a partir de uma posição
// devolve o valor do índice ou -1 no caso de não encontrar o valor

// procurar em todo o array o primeiro match

let posicao1 = nomes.indexOf('marcos')
console.log(posicao1)

// procurar no array a partir do índice 4 até o fim
let posicao2 = nomes.indexOf('Gs', 4)
console.log(posicao2)

// no caso de não existir o valor
let posicao3 = nomes.indexOf('alberto')
console.log(posicao3)