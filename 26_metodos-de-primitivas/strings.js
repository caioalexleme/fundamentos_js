
// alguns métodos e propriedades de strings
// os métodos retornam sempre um novo valor

let nome = 'caio alexandre'

// principal propriedade das strings: numero de caracteres
console.log(`Número de caracteres da string: ${nome.length}`)

// método para colocar a string um uppercase
console.log(nome.toUpperCase())

// apresentar um caracter dentro da string numa determinada posição
// índices de base zero
console.log(nome.charAt(0).toUpperCase())

// juntar strings: dois métodos
let string1 = 'um '
let string2 = 'dois '
let string3 = 'tres '
let string_concat = string1 + string2 + string3
console.log(string_concat)

console.log(string1.concat(string2, string3))

// verifica se uma contém outra
console.log(nome.includes('io alexan'))

// dividir uma string
let frase = 'ola tudo bem? como vai?'
console.log(frase.split(' '))

