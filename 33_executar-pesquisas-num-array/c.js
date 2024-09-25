
// Como efetuar uma pesquisa num array?

console.clear()

let nomes = ['caio', 'joao', 'ana', 'vitoria', 'carlos']

// no caso do método includes, vamos obter um booleano indicando se o valor existe ou não independente da quantidade de vezes ou do seu índice

let pesquisa = 'pedro'

if (nomes.includes(pesquisa)) {
    console.log(`${pesquisa} existe no array`)
} else {
    console.log(`${pesquisa} não existe no array`)
}