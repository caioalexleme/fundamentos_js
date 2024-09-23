
// Como fazer uma iteração num array

console.clear()

let nomes = new Array('caio', 'ana', 'vitoria', 'joao', 'beto', 'camila')

// dentro do ciclo, a função pode ainda guardar valores adicionais

nomes.forEach(function (e, index) {
    console.log(`O índice é ${index} e o valor é ${e}`)
})