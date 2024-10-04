
// Quando criamos um Map podemos passar um conjunto de chaves e valores no construtor do Map.

console.clear()

let valores1 = new Map([
    ['nome', 'caio'],
    ['idade', 30],
    ['falso', false]
])

console.table(valores1)


console.log('-'.repeat(60))

// Se tivermos um objeto e quisermos passar para um Map, podemos fazer da seguinte forma:

let objeto = {
    nome: 'caio',
    lastname: false,
    idade: 30
}

let valores2 = new Map(Object.entries(objeto))
console.log(valores2.get('lastname'))

console.log('-'.repeat(60))