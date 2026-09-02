const livro = require("./Livro");

const PRECO_POR_KG = 2.5;

class LivroFisico extends livro {
  #peso;

  constructor(titulo, autor, preco, estoque, peso) {
    super(titulo, autor, preco, estoque);
    this.#peso = peso;
  }

  getPeso() {
    return this.#peso;
  }

  calcularFrete() {
    return this.#peso * PRECO_POR_KG;
  }

  descrever() {
    super.descrever();
    console.log("tipo: Livro Físico");
    console.log("Peso: " + this.#peso + " kg");
  }
}

module.exports = LivroFisico;