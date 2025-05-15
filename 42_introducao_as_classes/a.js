class Pessoa {
    nome
    apelido
    idade

    // método
    apresentar() {
        // return 'Olá meu nome é ... e minha idade é ... anos'
        return `Olá meu nome é ${this.nome} ${this.apelido} e minha idade é ${this.idade} anos`
    }
}

let eu = new Pessoa
let tu = new Pessoa

eu.nome = 'caio'
eu.apelido = 'alexandre'
eu.idade = 30

console.log(eu.apresentar())

tu.nome = 'vania'
tu.apelido = 'sousa'
tu.idade = 51

console.log(tu.apresentar())

console.table(eu)
console.table(tu)