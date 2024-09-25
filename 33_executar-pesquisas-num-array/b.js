
// Como executar uma pesquisa num array?

console.clear()

let nomes = new Array('caio', 'ana', 'joao', 'carlos', 'ana', 'patricia')

// O método lastIndexOf funciona como o indexOf, mas do final para o início
// Neste caso o array tem duas vezes o valor 'ana'

console.log(nomes.indexOf('ana'))
console.log(nomes.lastIndexOf('ana'))