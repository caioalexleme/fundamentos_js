
// podemos ainda usar o rest (...) na desestruturação de objetos

console.clear()

let empresa = {
    nome: 'microsoft',
    area: 'software',
    produtos: [
        'windows 11',
        'office 365',
        'azure',
        'minecraft'
    ]
}

let { nome, ...outras_propriedades } = empresa

console.log(nome)
console.log(outras_propriedades)

// Crie uma função js simples só pra mim testar essa extensão do azure