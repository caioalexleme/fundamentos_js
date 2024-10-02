
console.clear

// Existe um segundo argumento designado por initial que pode (e deve) ser adicionado ao reduce.
// Neste caso vamos usar o 0 para garantir que o cálculo do somatorio inicia no zero.
// Se quisermos um valor inicial diferente, podemos colocá-lo nesse argumento

let valores = [10, 20, 30, 40, 50]

console.log(valores.reduce((somatorio, atual) => somatorio + atual, 0))

console.log('-'.repeat(50))

// com valor inicial igual a 100

console.log(valores.reduce((somatorio, atual) => somatorio + atual, 100))

console.log('-'.repeat(50))

// o método reduceRight faz exatamente a mesma coisa, mas do final do array para o princípio
console.log(valores.reduceRight((somatorio, atual) => somatorio + atual, 100))