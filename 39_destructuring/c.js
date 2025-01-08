// Podemos usar desestruturação, por exemplo numa iteração

console.clear()

let cliente = {
    nome: 'caio',
    apelido: 'alexandre',
    idade: 30
}

for (let [key, value] of Object.entries(cliente)) {
    console.log(`${key}: ${value}`)
}

console.log('-'.repeat(60))

// Mas podemos fazer muito mais. Por exemplo, podemos trocar o valor de duas variáveis entre si

let valor1 = 1000
let valor2 = 5000;
[valor1, valor2] = [valor2, valor1]

console.log(valor1)
console.log(valor2)

// E podemos usar reticências para definir o termo 'resto' ou 'restante'
// Vejamos:

let [n1, n2] = ['caio', 'alexandre,', 'sousa', 'leme']
// neste caso, os valores 'sousa' e 'leme' são ignorados
// dizemos que o resto ou restante foi ignorado na desestruturação
// então podemos fazer o seguinte:

let [nn1, nn2, ...nn] = ['caio', 'alexandre,', 'sousa', 'leme']

console.log(nn1)
console.log(nn2)
console.log(nn)

// e podemos ainda definir valores padrão
let fornecedores = ['apple', 'asus', 'microsoft']

let [fornecedor1, fornecedor2, fornecedor3 = 'indefinido'] = fornecedores
console.log(fornecedor1)
console.log(fornecedor2)
console.log(fornecedor3)