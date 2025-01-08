
/*
Set é um outro tipo de coleção.
Tem semelhanças com o Map.
É especial porque não tem chaves, apenas valores, e cada valor só pode existir uma vez.
*/

console.clear()

let valores = new Set()
valores.add('joao')
valores.add('ana')
valores.add('carlos')
console.table(valores)

console.log('-'.repeat(60))

// Contém os mesmos métodos e propriedades do Map.

valores.delete('ana')
console.table(valores)

console.log('-'.repeat(60))

if (valores.has('carlos')) {
    console.log('Carlos existe')
} else {
    console.log('Carlos não existe')
}

console.log('-'.repeat(60))

console.log(valores.size)

console.log('-'.repeat(60))

valores.clear()
console.table(valores)

console.log('-'.repeat(60))

/* 
A principal característica desta coleção é que, se tentan adicionar um valor que já existe, ele não vai ser adicionado
*/

valores.add('joao')
valores.add('carlos')
valores.add('ana')
valores.add('joao')
console.table(valores)