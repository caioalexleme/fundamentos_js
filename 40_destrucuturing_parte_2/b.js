// Reparem que a ordem das propriedades não importa.
// Podemos alterar a ordem da desestruturação, mantendo o nome das variáveis.
// Igual o nome das chaves das propriedades

console.clear()

let cliente = {
    nome: 'caio',
    email: 'caioalexleme@hotmail.com',
    telefone: '948949489494'
}

let { email, telefone, nome } = cliente

console.log(nome)
console.log(email)
console.log(telefone)