
// vamos ver mais alguns métodos para tratamento de arrays
// reverse, split e join

console.clear()

// o método join é um método do array para fazer o inverso do split.
// neste caso permite criar uma string a partir de uma coleção, cujos dados serão "colados" ou separados por uma outra string

// exemplos
let colecao = ['caio', 'pedro', 'enzo']
let string1 = colecao.join('') // todos colados
let string2 = colecao.join(';') //separados por ;
let string3 = colecao.join(' e ') // ... já percebeste?

console.log(string1)
console.log(string2)
console.log(string3)