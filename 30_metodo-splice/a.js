
// mais métodos para operar arrays

/* 
Já vimos vários métodos para trabalhar com arrays.
Vamos avançar mais um pouco.
Existe um método designado por SPLICE que é um autêntica caixa de ferramentas para gerir um array.
Vamos ver esse método em várias ações
*/

let nomes = ['joao', 'ana', 'carlos', 'antonio']
console.log(nomes)

// Como remover um elemento do array?
// Os métodos são objetos na sua essência, portanto podemos testar o delete.

delete nomes[2]
console.log(nomes)

// Como podemos ver, o elemento foi de facto removido, mas continua lá o seu espaço.
// se vir-mos o tamanho do array continua com 4

console.log(nomes.length)

// Então temos o splice que remove o valor e o índice:

nomes.splice(2,1)
console.log(nomes)
console.log(nomes.length)
