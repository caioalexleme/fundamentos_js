// construtor de uma classe
class Pessoa {
    // nome
    // idade

    constructor(n, i) {
        this.nome = n
        this.idade = i
    }

    apresentar() {
        return `Olá eu sou o(a) ${this.nome} e tenho ${this.idade} anos.`
    }
}

let eu = new Pessoa('caio', 30)
console.log(eu.apresentar())
eu.nome = 'joaquim'
console.log(eu.apresentar())