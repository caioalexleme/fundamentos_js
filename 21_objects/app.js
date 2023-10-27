function Pessoa(nm, ap, tlf) {
    this.nome = nm;
    this.apelido = ap;
    this.telefone = tlf;

    this.nomeCompleto = function () {
        return this.nome + ' ' + this.apelido;
    }

    this.alterNome() = function (novo_nome) {
        this.nome = novo_nome;
    }
}

let cliente = new Pessoa('caio', 'alexandre', 972115907);
console.log(cliente.nome);
console.log(cliente.nomeCompleto());
cliente.alterNome('manuel');
console.log(cliente.nomeCompleto());