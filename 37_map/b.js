
// Existem 3 formas de fazer uma iteração no Map

console.clear()
let valores = new Map()
valores.set('nome', 'caio')
valores.set('idade', 30)
valores.set('verdadeiro', true)

/* map.keys() */

for (let key of valores.keys()) {
    console.log(key)
}

console.log('-'.repeat(60))

/* map.values() */

for (let valor of valores.values()) {
    console.log(valor)
}

console.log('-'.repeat(60))

/* map.entries() */

for (let item of valores.entries()) {
    console.log(item)
}

// Existe ainda um outro método que não é exclusivo do Mat. O forEach

valores.forEach((valor, key) => {
    console.log(`A chave é: ${key} e o valor é: ${valor}`)
})