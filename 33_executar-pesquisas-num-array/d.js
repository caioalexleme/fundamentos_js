
// Como efetuar uma pesquisa num array?

console.clear()

// os métodos anteriores funcionam na perfeição para array de valores
// e se quisermos fazer a pesquisa num array de objetos?

const clientes = [
    { nome: 'joao', idade: 47 },
    { nome: 'ana', idade: 25 },
    { nome: 'carlos', idade: 2 },
    { nome: 'francisca', idade: 5 },
    { nome: 'marco', idade: 7 },
    { nome: 'antônio', idade: 96 }
]

// neste caso podemos usar o método find
// funciona nos bastidores como um ciclo que procura a primeira ocorrência pretendida.
// se for encontrada devolve o objeto

let cliente = clientes.find(cli => cli.nome == 'carlos')
console.log(cliente)