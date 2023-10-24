let A = B = C = 100, D = 1000;

console.clear();
console.log(A, B, C, D);

let a = 10, b = 20, c = a;
console.log(c);
let t = a;
a = b, b = t;
console.log(a, b);

// tipos de dados (datatype)
let nome = "caio"; //string
let boleano = false; //boleano
let naodefinido = undefined; //não definida
let nulo = null; //nulo
console.log(typeof (a));
console.log(typeof (nome));
console.log(typeof (boleano));
console.log(typeof (naodefinido));
console.log(typeof (nulo));

// Convertendo string para number (usando o "+" antes)
let numero_a = "10";
let numero_b = "20";
console.log(numero_a + numero_b);
console.log(+true); // retorna 1
console.log(+false); // retorna 0
console.log(+numero_a + +numero_b);
console.log(Number(numero_a) + Number(numero_b));
