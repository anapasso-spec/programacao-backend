const LivroFisico = require('./livroFisico');
// const LivroDigital = require('./LivroDigital');

const l1 = new LivroFisico('Cleancode', 'Robert C. Martin', 80.90, 12, 1.2);
// const l2 = new LivroDigital("Eloquent JavaScript", "Marijn Haverbeke", 45.00, 999, 8);

l1.descrever();
console.log('Frete: R$ ' + l1.calcularFrete().toFixed(2));

// l2.descrever();
// console.log("Frete: R$" + l2.calcularFrete().toFixed(2));
