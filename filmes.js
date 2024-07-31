// filmes.js

let filmes = [];
let nextId = 1;

class Filme {
    constructor(nome, ano, duracao, diretor, atores, nota) {
        this.id = nextId++;
        this.nome = nome;
        this.ano = ano;
        this.duracao = duracao;
        this.diretor = diretor;
        this.atores = atores;
        this.nota = nota;
    }
}

function adicionarFilme(nome, ano, duracao, diretor, atores, nota) {
    const novoFilme = new Filme(nome, ano, duracao, diretor, atores, nota);
    filmes.push(novoFilme);
    return novoFilme;
}

function listarFilmes() {
    return filmes;
}

function buscarFilmePorId(id) {
    return filmes.find(filme => filme.id === id);
}

function atualizarFilme(id, nome, ano, duracao, diretor, atores, nota) {
    const filme = buscarFilmePorId(id);
    if (filme) {
        filme.nome = nome;
        filme.ano = ano;
        filme.duracao = duracao;
        filme.diretor = diretor;
        filme.atores = atores;
        filme.nota = nota;
        return filme;
    }
    return null;
}

function removerFilme(id) {
    const index = filmes.findIndex(filme => filme.id === id);
    if (index !== -1) {
        return filmes.splice(index, 1)[0];
    }
    return null;
}

module.exports = {
    adicionarFilme,
    listarFilmes,
    atualizarFilme,
    removerFilme
};
