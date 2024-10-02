
console.clear()

// Os arrays não formam um tipo de dados distintos do que vimos nos data types.
// Os arrays são baseados em objetos, portanto se quisermos verificar se uma determinada variável é um array, o uso do typeOf não é suficiente

let nomes = new Array('caio', 'thiago', 'veronica')
console.log(typeof (nomes))

console.log('-'.repeat(50))

// podemos verificar se uma variável é um array, usando um método específico dos arrays

if (Array.isArray(nomes)) {
    console.log('Sim')
} else {
    console.log('Não')
}

// Conclusão:

/* 
    > ter em atenção que todos os métodos sort, reverse e splice transformam o próprio array
    > os métodos que vimos nos vídeos mais recentes, cobrem a esmagadora maioria das soluções
    > Existem outros métodos que não vimos: some, fill, copyWithin, flat, ....
*/