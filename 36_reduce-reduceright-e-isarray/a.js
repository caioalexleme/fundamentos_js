
// vamos concluir essa longa jornada através dos métodos de arrays
// imagina que tens um array de valores numéricos e pretendes calcular o total de todos os valores do array

console.clear()

let valores = new Array(10, 20, 30, 40, 50)

// poderíamos usar o ciclo da seguinte forma

let total = 0
valores.forEach(e => total += e)
console.log(total)

console.log('-'.repeat(50))

// mas podemos usar o método reduce
console.log(valores.reduce((sumatorio, atual) => sumatorio + atual))

// o que acontece à superfície deste modo?
// A função dentro do método é aplicada a todos os elementos do array de forma sequencial.
// O resultado da execução do código dessa função é transportado para o ciclo seguinte.
// Dessa forma, sumatório vai sempre ter o valor da anterior execução.
// O primeiro argumento é o acumulador e o segundo argumento é o valor atualdo ciclo.
