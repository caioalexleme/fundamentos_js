// também podemos alterar o nome das variáveis de saída definindo um aliás na desestruturação

console.clear()

let cliente = {
    nome: 'caio',
    email: 'caioalexleme@hotmail.com',
    telefone: '98498499494'
}

let { nome: nome_completo, email: endereco_de_email, telefone: celular } = cliente

// nome -> nome_completo
// email -> endereco_de_email
// telefone -> celular

console.log(nome_completo)
console.log(endereco_de_email)
console.log(celular)

console.log('-'.repeat(50))

// esta regra também vale para alteração da ordem das variáveis

let fornecedor = {
    nome_da_marca: 'microsoft',
    produto: 'Windows 11',
    categoria: 'Sistema operacional'
}

let { categoria: area, produto: software, nome_da_marca: marca } = fornecedor

console.log(area)
console.log(software)
console.log(marca)

// faça um código que imprima os valores de cada variável criada na desestruturação acima