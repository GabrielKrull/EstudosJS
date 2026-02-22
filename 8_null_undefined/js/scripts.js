//Hoisting - Içamento. As variáveis abaixo se inicializam antes mesmo do código ser interpretado, mas não têm valor atribuído
console.log(sobrenome);
console.log(numero);

var nome = null;
var sobrenome = "Alves";

console.log(nome)
console.log(sobrenome)

nome = "Gabriel";

console.log(nome)

var numero = 5;