class Livro {
    #preco;
    #estoque;

    constructor(titulo, autor, preco, estoque, categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
        this.categoria = categoria;
    }
    
// OK
    descrever() {
        console.log("Título: " + this.titulo);
        console.log("Autor: " + this.autor);
        console.log("Preço: R$ " + this.preco);
        console.log("Estoque: " + this.estoque);
        console.log("Categoria: " + this.categoria.nome);
    }

    valorEmEstoque() {
        return this.preco * this.estoque;
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }
// OK
    set preco(novoPreco) {
        if (novoPreco < 0) {
            console.log("ERRO!: Preco nao pode ser negativo, valor recusado!");
            return;
        }
        this.#preco = novoPreco;
    }
}

module.exports = Livro;