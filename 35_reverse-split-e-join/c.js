
// vamos ver mais alguns métodos para tratamentos de arrays
// reverse, split e join

console.clear()

// agora vamos imaginar o caso anterior, mas só queremos os três primeiros endereços.
// todos os restantes não interessam.
// podemos usar um segundo argumento facultativo no split, que determina quantos resultados pretendemos obter

let enderecos = 'caio@gmail.com,ana.gmail.com, valda.gmail.com, raquel@gmail.com , mateus@gmail.com'

let colecao = enderecos.split(',', 3).map(e => { return e.trim() })
console.table(colecao)