let nacionalidade = 'Portugal'

let cliente = {
    nome: 'caio',
    apelido: 'alexandre',
    'tipo cliente': "VIP",
    [nacionalidade]: 'pt'
}

cliente.telefone = 1234

console.log(cliente.nome)
console.log(cliente['apelido'])
console.log(cliente['telefone'])

delete cliente.telefone
console.log(cliente['telefone'])
console.log(cliente["tipo cliente"])

console.log(cliente.Portugal)