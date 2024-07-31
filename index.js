// index.js

const prompt = require('prompt-sync')();
const filmes = require('./filmes');

function exibirMenu() {
    console.log('\nMenu:');
    console.log('1. Adicionar Filme');
    console.log('2. Listar Filmes');
    console.log('3. Atualizar Filme');
    console.log('4. Remover Filme');
    console.log('5. Sair');
}

function tratarEntrada() {
    exibirMenu();
    const opcao = prompt('Escolha uma opção: ');

    switch (opcao) {
        case '1':
            adicionarFilme();
            break;
        case '2':
            listarFilmes();
            break;
        case '3':
            atualizarFilme();
            break;
        case '4':
            removerFilme();
            break;
        case '5':
            console.log('Saindo...');
            process.exit(0);
            break;
        default:
            console.log('Comando inválido.');
    }

    // Voltar ao menu
    tratarEntrada();
}

function adicionarFilme() {
    const nome = prompt('Nome do filme: ');
    const ano = prompt('Ano de lançamento: ');
    const duracao = prompt('Duração do filme (em minutos): ');
    const diretor = prompt('Nome do diretor: ');
    const atoresStr = prompt('Atores (separados por ponto e vírgula): ');
    const notaStr = prompt('Nota do filme (1 a 5): ');

    const atores = atoresStr.split(';').map(ator => ator.trim());
    const nota = parseFloat(notaStr);

    if (nota < 1 || nota > 5) {
        console.log('Nota deve estar entre 1 e 5.');
        return;
    }

    const filme = filmes.adicionarFilme(nome, ano, duracao, diretor, atores, nota);
    console.log(`Filme adicionado: ${filme.id} - ${filme.nome}`);
}

function listarFilmes() {
    const todosFilmes = filmes.listarFilmes();
    if (todosFilmes.length === 0) {
        console.log('Nenhum filme encontrado.');
        return;
    }
    todosFilmes.forEach(filme => {
        console.log(`${filme.id}: ${filme.nome} (${filme.ano}) - Duração: ${filme.duracao} - Diretor: ${filme.diretor} - Atores: ${filme.atores.join(', ')} - Nota: ${filme.nota}`);
    });
}

function atualizarFilme() {
    const id = prompt('ID do filme a ser atualizado: ');
    const nome = prompt('Novo nome do filme: ');
    const ano = prompt('Novo ano de lançamento: ');
    const duracao = prompt('Nova duração do filme (em minutos): ');
    const diretor = prompt('Novo nome do diretor: ');
    const atoresStr = prompt('Novos atores (separados por ponto e vírgula): ');
    const notaStr = prompt('Nova nota do filme (1 a 5): ');

    const atores = atoresStr.split(';').map(ator => ator.trim());
    const nota = parseFloat(notaStr);

    if (nota < 1 || nota > 5) {
        console.log('Nota deve estar entre 1 e 5.');
        return;
    }

    const filme = filmes.atualizarFilme(parseInt(id), nome, ano, duracao, diretor, atores, nota);
    if (filme) {
        console.log(`Filme atualizado: ${filme.id} - ${filme.nome}`);
    } else {
        console.log(`Filme com ID ${id} não encontrado.`);
    }
}

function removerFilme() {
    const id = prompt('ID do filme a ser removido: ');
    const filme = filmes.removerFilme(parseInt(id));
    if (filme) {
        console.log(`Filme removido: ${filme.id} - ${filme.nome}`);
    } else {
        console.log(`Filme com ID ${id} não encontrado.`);
    }
}

tratarEntrada();
