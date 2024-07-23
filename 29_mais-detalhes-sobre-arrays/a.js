// Alguns aspectos adicionais sobre arrays

// os arrays são copiados por referência

let nomes = ['joao', 'caio', 'ana']
console.log(nomes)
let outrosNomes = nomes;

outrosNomes[1] = 'antonio'

console.log(outrosNomes, nomes)

