
// se quisermos ordenar um array, usamos o método sort, mas atenção

console.clear()

// no primeiro exemplo vai tudo ocorrer aparentemente bem
// let valores = [10, 45, 32, 15, 20]
// console.table(valores.sort())

// mas no segundo exemplo, parece haver uma inconsistência
let valores = [10, 45, 32, 1, 15, 3, 20]
// console.table(valores.sort())

// Os valores são ordenados por ordem alfabética. É o comportamento padrão
// como vamos resolver a situação?
// vamos ter que usar uma função para comparar valores
// function comparar(a, b) {
//     if (a > b) return 1
//     if (a == b) return 0
//     if (a < b) return -1
// }

// console.table(valores.sort(comparar))

// O que acontece nos bastidores?

console.table(valores.sort((a, b) => {
    console.log(`${a} compara com ${b}`)
    return a-b
}))