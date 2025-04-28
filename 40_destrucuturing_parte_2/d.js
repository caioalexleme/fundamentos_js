// também é possível definir valores padrão para propriedades inexistentes
console.clear()

let cliente = {
    nome: 'caio',
    apelido: 'alexandre',
    idade: 31,
    // profissao: 'programador'
}

let { nome, apelido, idade, profissao = 'indefinido' } = cliente

console.log(nome)
console.log(apelido)
console.log(idade)
console.log(profissao)

console.log('-'.repeat(50))

// ou ainda para alteração na ordem das propriedades

let fornecedor = {
    marca: 'microsoft',
    produto: 'windows 11'
}

let { area = 'software', produto: software = 'WINDOWS', marca: empresa = 'indefinido' } = fornecedor

console.log(area)
console.log(software)
console.log(empresa)