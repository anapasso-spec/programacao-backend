const Livro = require("./Livro");

class LivroDigital extends Livro {
  #tamanhoArquivo;

  constructor(titulo, autor, preco, estoque, tamanhoArquivo) {
    super(titulo, autor, preco, estoque);
    this.#tamanhoArquivo = tamanhoArquivo;
  }

  get tamanhoArquivo() {
    return this.#tamanhoArquivo;
}

calcularFrete() {
    return 0;
  }

  descrever() {
    super.descrever();
    console.log("tipo: Livro Digital");
    console.log("Tamanho do arquivo: " + this.#tamanhoArquivo + " MB");
  }
}

module.exports = LivroDigital;