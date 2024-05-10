let nacionalidade = 'Portugal'

let peso = '10K'

let cliente = {
    nome: 'caio',
    apelido: 'alexandre',
    'tipo cliente': "VIP",
    [nacionalidade]: 'pt',
    [peso]: 'dezena de quilos'
}

cliente.telefone = 1234


console.log(cliente.nome)
console.log(cliente['apelido'])
console.log(cliente['telefone'])

delete cliente.telefone
console.log(cliente['telefone'])
console.log(cliente["tipo cliente"])

console.log(cliente.Portugal)
console.log(cliente['10K'])