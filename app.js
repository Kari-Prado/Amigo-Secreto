// Armazena os nomes dos amigos
let amigos = [];

function adicionarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nomeAmigo = amigoInput.value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome.");
    } else {
        // Adiciona amigos
        amigos.push(nomeAmigo);

        amigoInput.value = "";

        atualizarListaAmigos();
    }
}

function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');

    listaAmigos.innerHTML = "";

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function sortearAmigo() {
    // Verifica se há algum amigos na lista
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
