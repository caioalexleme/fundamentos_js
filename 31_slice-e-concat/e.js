
// métodos para operar arrays

// o método concat permite permite juntar vários arrays num só e adicionar ainda mais alguns elementos.

console.clear()

let nomes_1 = new Array('caio', 'ana', 'joao')
let nomes_2 = ['francisco', 'marcos', 'catarina']
let nomes_3 = new Array('mateus')

let nomes = nomes_1.concat(nomes_2, nomes_3)

console.log(nomes)