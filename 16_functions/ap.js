numero1 = 10
numero2 = 20

function somar(a, b) {
    return a + b
}
function subtrair(a, b) {
    return a - b
}
function multiplicar(a, b) {
    return a * b
}
function dividir(a, b) {
    return a / b
}

console.log(`O resultado da soma de ${numero1} + ${numero2} é igual a ` + somar(numero1, numero2))
console.log(`O resultado da subtração de ${numero1} - ${numero2} é igual a ` + subtrair(numero1, numero2))
console.log(`O resultado da multiplicação de ${numero1} x ${numero2} é igual a ` + multiplicar(numero1, numero2))
console.log(`O resultado da divisão de ${numero1} / ${numero2} é igual a ` + dividir(numero1, numero2))

