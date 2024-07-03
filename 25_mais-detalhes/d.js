let obj1 = {
    nome: 'caio',
    idade: 31
}

let obj2 = {}

Object.assign(obj2, obj1)

console.log(obj1.nome)
console.log(obj2.nome)

obj2.nome = 'vania'

console.log(obj1.nome, obj2.idade)
console.log(obj2.nome)