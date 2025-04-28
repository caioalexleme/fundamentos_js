// também podemos desestruturar objetos, no entanto a síntaxe é ligeiramente diferente

console.clear()

let cliente = {
    nome: 'caio',
    email: 'caioalexleme@hotmail.com',
    telefone: '9841541554'
}

let { nome, email, telefone } = cliente

console.log(nome)
console.log(email)
console.log(telefone)

