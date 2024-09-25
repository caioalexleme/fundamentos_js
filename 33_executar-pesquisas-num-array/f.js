
// Como efetuar uma pesquisa num array?

console.clear()

// E se existir mais que 1 resultado
// o método find e findIndex apenas devolvem o primeiro match
// Vamos utilizar o método filter

const clientes = [
    { nome: 'joao', idade: 47 },
    { nome: 'ana', idade: 25 },
    { nome: 'carlos', idade: 2 },
    { nome: 'francisca', idade: 5 },
    { nome: 'marco', idade: 32 },
    { nome: 'antônio', idade: 96 }
]

console.log(clientes.filter(cli => cli.idade > 30))