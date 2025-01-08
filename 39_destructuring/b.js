/* 
Podemos desestruturar ignorando alguns elementos
*/

console.clear()

let nomes = ['caio', 'alexandre', 'sousa']
let [nome1, , nome2] = nomes

console.log(nome1)
console.log(nome2)

console.log('-'.repeat(50))

// E podemos desestruturar todas as variáveis iteráveis (Map, set, etc.)
let palavra = 'Teste'
let [letra1, letra2, , letra4] = palavra

console.log(letra1)
console.log(letra2)
console.log(letra4)

console.log('-'.repeat(60))

// ou ainda

let valores = new Set(['joao', 'ana', 'carlos'])
let [n1, n2, n3] = valores
console.log(n1)
console.log(n2)
console.log(n3)

console.log('-'.repeat(60))

// podemos também fazer o seguinte

let usuario = {};

[usuario.nome, usuario.apelido] = "caio alexandre".split(' ')

console.log(usuario.nome)
console.log(usuario.apelido)