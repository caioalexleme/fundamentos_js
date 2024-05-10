const cliente = {
    nome: 'Caio',
    apelido: 'Alexandre'
}

console.log(cliente.telefone)
// console.log(telefone in cliente)
console.log('apelido' in cliente)

if ('telefone' in cliente) {
    console.log(cliente.telefone)
} else {
    console.log('O cliente não possui telefone')
}

for (chave in cliente) {
    console.log(chave)
}

for (chave in cliente) {
    console.log(cliente[chave])
}

for (chave in cliente) {
    console.log(chave + ' - ' + cliente[chave])   
}
