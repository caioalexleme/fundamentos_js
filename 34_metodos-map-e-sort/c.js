
// podemos também usar o map para alterar os valores do próprio array

console.clear()

let nomes = new Array('caio', 'ana', 'joao', 'vania', 'marcos')

let novos = nomes.map(nome => {
    return `Olá, ${nome}`
})

console.table(novos)

// console.table(nomes.map(nome => {
//     return `Olá ${nome}` 
// }))