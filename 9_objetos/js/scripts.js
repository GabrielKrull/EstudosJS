var obj = {
    nome: "Gabriel",
    idade: 18,
    profissao: "Programador",
    estarTrabalhando: true
}

console.log(obj);

console.log(typeof obj);

console.log(obj.nome);
console.log(obj.idade);
console.log(obj.profissao);
console.log(obj.estarTrabalhando);

console.log("O meu nome é " + obj.nome);

obj.nome = "Pedro"

console.log(obj.nome);

console.log(obj);

obj.graduacao = true;

console.log(obj);