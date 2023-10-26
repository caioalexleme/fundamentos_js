
console.clear();

// funções usando parâmetros
function apresentarMensagem(texto) {
    console.log(`A nova mensagem a apresentar é: ${texto}`);
};
// chamada da função
apresentarMensagem("nova versão do olá mundo");

// pulando linha
console.log();

// função com vários parâmetros
function adicionar_valores(a, b) {
    
    console.log(`O  resultado de ${a} + ${b} = ${a + b} `);    
}
adicionar_valores(1, 10);

console.log();

// Função com vários valores que retorna um resultado

function resultado(c, d) {
    return c + d;
}
let Resultado = resultado(10, 20);
console.log('O resultado da função resultado é: ' + Resultado);