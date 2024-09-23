
// Como fazer uma iteração num array?

/* 
    já vimos anteriormente os ciclos do JS
    Vamos olhar para o array em especial. É uma coleção de dados. Podemos fazer uma iteração sobre o  array
*/

console.clear()

let nomes = new Array('caio', 'ana', 'vitoria', 'joao', 'beto', 'camila')

// Com um ciclo for

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}