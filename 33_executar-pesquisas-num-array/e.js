
// Como efetuar uma pesquisa num array

console.clear()

// também ja está disponível o método findIndex que funciona como o find mas retorna apenas o índice e não o objeto completo

const clientes = [
    { nome: 'joao', idade: 47 },
    { nome: 'ana', idade: 25 },
    { nome: 'carlos', idade: 2 },
    { nome: 'francisca', idade: 5 },
    { nome: 'marco', idade: 7 },
    { nome: 'antônio', idade: 96 }
]

console.log(clientes.findIndex(cli => cli.idade == 7))