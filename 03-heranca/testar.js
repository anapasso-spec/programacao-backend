const LivroFisico = require('./LivroFisico');
const LivroDigital = require('./LivroDigital');

const l1 = new LivroFisico('Cleancode', 'Robert C. Martin', 80.90, 12, 1.2);
const l2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

l1.descrever();
console.log('Frete: R$ ' + l1.calcularFrete().toFixed(2));

l2.descrever();
console.log("Frete: R$" + l2.calcularFrete().toFixed(2));

console.log("");
console.log("----polimorfismo----");
console.log("Frete do livro físico: R$" + l1.calcularFrete().toFixed(2));
console.log("Frete do livro digital: R$" + l2.calcularFrete().toFixed(2));