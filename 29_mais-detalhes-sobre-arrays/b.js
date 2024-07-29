// os índices podem não ser sequenciais

let nomes = new Array('joao', 'caio', 'ana')
nomes[100] = 'joaquim'

console.log(nomes[50])
console.log(nomes)
console.log(nomes[100])
console.log(nomes.length)

// importante
// push e pop são mais rápidos do que shift e unshift que vimos anteriormente