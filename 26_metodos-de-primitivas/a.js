/*
    MÉTODOS DE PRIMITIVAS

    Existem primitivas strings, number, boolean, null, undefined.
    Esqueçamos o null e o undefined
    Vamos olhar para string, number e boolean
    Existem métodos buildin no JS para executar operações com estas primitivas.
    São conhecidos como métodos de primitivas, que são consideradas como objetos.
*/

let nome = 'caio alexAndre'
let numero = 10.49

console.log(nome.toUpperCase())
console.log('Peso: ' + numero.toFixed(1))

let novo_nome = nome.toLocaleLowerCase()
console.log(novo_nome)