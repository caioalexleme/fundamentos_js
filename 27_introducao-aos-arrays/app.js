
// ARRAYS


/*  
    string, number, boolean, etc. permitem guardar um único valor.
    objetos permitem guardar uma estrutura de valores com determinadas chaves como nome das propriedades
    arrays são coleções de valores organizados por uma determinada ordem
 */

// podemos definir array de qualquer uma das duas formas a seguir
// let nomes = new Array('caio', 'vania', 'pedro')
// let nomes = []

let nomes = ['caio', 'ana', 'vania', 'pedro']

// para apresentar um valor no array, usamos o seu índice
console.log(nomes[2])

// podemos alterar um valor de um array, recorrendo ao índice
nomes[2] = 'ciro'
console.log(nomes)

// para saber o total do valor de um array, usamos a propriedade length
console.log(nomes.length)

// um array pode conter elementos com qualquer tipo de valores
let dados = [
    'joao',
    100,
    true,
    10.25
]
console.log(dados)

// pode até conter uma coleção de objetos
let clientes = [
    { nome: 'caio', idade: 30 },
    { nome: 'vania', idade: 50 },
    { nome: 'Johnson', idade: 57 },
]
// se eu quiser apresentar os dados de 1 cliente
console.log(clientes[1].idade)

// se eu quiser iterar por todos os valores do array
clientes.forEach(cliente =>
    console.log(`O(A) cliente ${cliente.nome} tem ${cliente.idade} anos de idade.`)
)

// ou

for (let i = 0; i < clientes.length; i++) {
    console.log('O(A) Cliente ' + clientes[i].nome + ' tem ' + clientes[i].idade + ' anos de idade')
}