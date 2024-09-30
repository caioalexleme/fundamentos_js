
// vamos ver mais alguns métodos para tratamento de arrays
// reverse, split e join

console.clear()

// o método split não é um método de um array, mas o resultado de sua utilização é a criação de um array
// vamos imaginar que alguém indicou um conjunto de endereço de email separados por vírgula.
// como podemos obter uma coleção dos endereços?

let enderecos = 'caio@gmail.com, joao@gmail.com, vania@gmail.com'
let colecao = enderecos.split(',')

console.table(colecao)

console.log('-'.repeat(50))

// como podes verificar, os últimos dois elementos contém um espaço no início.
// podemos resolver da seguinte forma, acrescentando um espaço à vírgula:

let colecao1 = enderecos.split(', ')
console.table(colecao1)

console.log('-'.repeat(50))

// mas vamos imaginar que em alguns casos a vírgula foi colocada sem espaço e noutros com espaço
// então vamos ter que recorrer à utilização de mais métodos.

let enderecos1 = 'caio@gmail.com,ana.gmail.com, valda.gmail.com, raquel@gmail.com , mateus@gmail.com'

let colecao2 = enderecos1.split(',').map(e => {
    return e.trim()
})

console.table(colecao2)