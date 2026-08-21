class Carrinho {
  #livros;
  constructor() {
    this.#livros = [];
  }
  adicionarLivro(livro) {
    this.#livros.push(livro);
  }
  //ok
  listar() {
    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(livro.titulo + " - R$ " + livro.preco);
    });
  }
  //ok
  calcularTotal() {
    let total = 0;
    this.#livros.forEach((livro) => {
      total = total + livro.preco;
    });
    return total;
  }
}
module.exports = Carrinho;
