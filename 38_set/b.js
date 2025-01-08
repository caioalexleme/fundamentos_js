
// Podemos também criar este tipo de coleção com valores que são objetos

console.clear()

let joao = { nome: 'joao', idade: 48 }
let ana = { nome: 'ana', idade: 45 }
let carlos = { nome: 'carlos', idade: 32 }

let valores = new Set([joao, ana, carlos])

console.table(valores)

console.log('-'.repeat(60))

// Para fazer uma iteração ...
valores.forEach((value) => {
    console.log(value.nome)
})