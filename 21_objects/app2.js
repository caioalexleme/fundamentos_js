let cliente = {
    nome: 'Caio',
    apelido: 'Alexandre',
    telefone: 2131231,

    nome_completo: function () {
        return this.nome + ' ' + this.apelido
    },

    alterar_nome: function (novo_nome) {
        this.nome = novo_nome
    }


}

console.log(cliente.nome)
console.log(cliente.nome_completo())
cliente.alterar_nome('jonhson')
console.log(cliente.nome_completo())