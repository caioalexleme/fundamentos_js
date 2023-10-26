
let valor = 6;

switch (valor) {
    case "1":
        console.log("texto 1");
        break;
    
    case 10:
        console.log("igual a 10")
        break
    
    case 4:
    case 6:
    case 1:
        console.log("ou é 4 ou é 6 ou é 1");
        break

    default:
        console.log("não é nada de nada")
        break
}