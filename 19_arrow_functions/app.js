let somar = (a, b) => a + b;

console.log(somar(10, 20));

let alerta = (nome) => `Meu nome é ${nome}`

console.log(alerta("Caio"))

let saudar = (nome) => {
    let saudacao = "Olá meu nome é:"
    // return saudacao + nome
    return `${saudacao} ${nome}`
}
console.log(saudar("Caio"))