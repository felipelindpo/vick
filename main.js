 // Seleciona os elementos necessários
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const produtos = document.querySelectorAll('.produto');

// Função para filtrar produtos com base no termo de busca
function filterProducts(searchTerm) {
    produtos.forEach(produto => {
        const title = produto.querySelector('h2').innerText.toLowerCase();
        const description = produto.querySelector('p').innerText.toLowerCase();
        
        if (title.includes(searchTerm) || description.includes(searchTerm)) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Oculta o produto
        }
    });
}

// Adiciona o evento de clique ao botão de busca
searchButton.addEventListener('click', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterProducts(searchTerm); // Chama a função para filtrar produtos
});

// Adiciona a funcionalidade de pesquisa em tempo real
searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase().trim();
    filterProducts(searchTerm); // Chama a função para filtrar produtos
});

// Adiciona um evento para limpar a barra de pesquisa quando o usuário clicar fora dela
document.addEventListener('click', function (event) {
    if (!searchInput.contains(event.target) && !searchButton.contains(event.target)) {
        searchInput.value = ''; // Limpa o campo de pesquisa
        filterProducts(''); // Exibe todos os produtos
    }
});
