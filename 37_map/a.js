/* 
Falamos de arrays nos vídeos anteriores.
Também já falamos sobre objetos.

Objetos permitem guardar coleções de dados baseados numa key (chave) a chave e o valores são propriedades.

Nos arrays podemos guardar coleções ordenadas de dados.

Neste vídeo vamos ver um outro tipo de coleção: Map
O Map é uma coleção de itens de dados com chaves.
É um pouco como os objetos, mas com chaves de qualquer tipo.

*/

console.clear()
let valores = new Map()
valores.set('nome', 'joao')
valores.set('idade', 48)
valores.set(1, '11111111')
valores.set(2, '22222222')
valores.set(3, '33333333')
console.table(valores)

console.log('-'.repeat(60))

/* 
O método set permite adicionar uma chave e respectivo valor
Se quisermos ir buscar um determinado valor, usamos o método get

*/

console.log(valores.get(1))
console.log(valores.get('idade'))

console.log('-'.repeat(60))

/* 
Se quisermos perguntar a coleção se tem uma determinada chave

*/

if (!valores.has('apelido')) { // Utilizando símbolo da negação (!). (pq o professor errou a lógica inicial kkk).
    console.log('Não tem apelido')
} else {
    console.log('tem apelido')
}

console.log('-'.repeat(60))

// Se quisermos remover o método da coleção usamos o método delete

valores.delete('nome')
console.log(valores)

console.log('-'.repeat(60))
// se quisermos limpar toda a coleção usamos o método clear

valores.clear()
console.table(valores)

console.log('-'.repeat(60))

// E se quisermos saber quantos elementos tem o map, usamos a propriedade size.

console.log(valores.size)

console.log('-'.repeat(60))