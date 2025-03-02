// 1. Declaração do array que armazenará os nomes dos amigos
let amigos = [];

// 2. Função para adicionar um amigo
function adicionarAmigo() {
    // Captura o valor inserido pelo usuário
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();  // Remover espaços extras no começo e no final

    // Validação para garantir que o campo não esteja vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Atualiza o array de amigos com o nome inserido
        amigos.push(nomeAmigo);

        // Limpa o campo de entrada após adicionar o nome
        amigoInput.value = "";

        // Atualiza a lista de amigos visível na tela
        atualizarListaAmigos();
    }
}

// 3. Função para atualizar a lista de amigos na página
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    // Limpa a lista existente antes de adicionar novos itens
    listaAmigos.innerHTML = "";

    // Percorre o array de amigos e cria um <li> para cada nome
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

// 4. Função para sortear um amigo secreto
function sortearAmigo() {
    // Valida se há amigos suficientes na lista
    if (amigos.length === 0) {
        alert("Por favor, adicione pelo menos um amigo antes de sortear.");
        return;
    }

    // Gera um índice aleatório para selecionar um amigo
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado na tela
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = `Amigo secreto sorteado: ${amigoSorteado}`;
}
