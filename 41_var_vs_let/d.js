
/* 
    Com o let, não podemos declarar a mesma variável mais do que uma vez
*/

console.clear()

// ERRO
// let nome = 'caio'
// let nome = 'vania'
// console.log(nome)

// já com o var... 
var nome1 = 'jonhson'
var nome1 = 'nilce'

console.log(nome1)

/* 
    Outra coisa estranha:

    Podemos definir uma variável sem o termo let, const ou var e depois declarar var, mas não o let.
*/

mensagem = 'ola'
console.log = 'mensagem'

var mensagem

// let mensagem

// Durante os próximos vídeos vamos rapidamente conhecer os princípios básicos da criação de classes no javascript. Algo que não existia nos primórdios do JavaScript, mas que convém percebermos como funciona, porque é um dos principais pilares de qualquer linguagem de programação moderna.
//  A playlist dos fundamentos de javascript estará concluída para avançarmos rapidamente para a exploração do javascript em ambiente web.