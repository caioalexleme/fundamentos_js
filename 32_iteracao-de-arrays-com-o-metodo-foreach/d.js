
// Como fazer uma iteração num array?

console.clear()

let nomes = ['caio', 'ana', 'vitoria', 'joao', 'beto', 'camila']

// e podemos ainda ter um terceiro parâmetro que informa qual é o array que está a ser objeto da interação

nomes.forEach(function (e, index, colecao) {
    console.log(`O índice é ${index} e o valor é ${e}. A coleção é ${colecao}`)
})