const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
}).then(function(response) {
    return response.json();
});

const dbObjeto = await db;
const valorPesquisa = sessionStorage.getItem('search');

function exibeProduto(dbObjeto) {
    dbObjeto.forEach(element => {
        let nomeLetraMaiuscula = element.nome.toUpperCase();
        let categoriaMaiuscula = element.categoria.toUpperCase();
        const pesquisaMaiuscula = valorPesquisa.toUpperCase()
        if(nomeLetraMaiuscula.includes(pesquisaMaiuscula) || categoriaMaiuscula.includes(pesquisaMaiuscula)) {

            const produtoLista = document.getElementById('search-list')

            const cardProdutoLi = document.createElement("li");
            const cardProdutoImg = document.createElement("img");
            const cardProdutoContainer = document.createElement("div");
            const cardProdutoName = document.createElement("p");
            const cardProdutoPreco = document.createElement("p");
            const cardProdutoLink = document.createElement("p");
            const cardProdutoId = document.createElement("p");
            const textoLink = document.createTextNode(`Ver produto`);


            const textoNome = document.createTextNode(`${element.nome}`);
            const textoPreco = document.createTextNode(`R$ ${element.preco}`);
            const textoId = document.createTextNode(`${element._id}`);
            
            cardProdutoLi.appendChild(cardProdutoImg);
            cardProdutoLi.appendChild(cardProdutoContainer);
            cardProdutoContainer.appendChild(cardProdutoName);
            cardProdutoContainer.appendChild(cardProdutoPreco);
            cardProdutoContainer.appendChild(cardProdutoLink);
            cardProdutoContainer.appendChild(cardProdutoId);
            cardProdutoLink.appendChild(textoLink);
            cardProdutoId.appendChild(textoId);

            cardProdutoLi.className = "produtos__list__card";
            cardProdutoImg.alt = `${element.nome}`;
            cardProdutoImg.className = "produtos__list__card__img";
            cardProdutoImg.setAttribute('src', `/src/assets/img/${element.imagem}`);
            cardProdutoContainer.className = "produtos__list__card__content";
            cardProdutoName.className = "produtos__list__card__content__text";
            cardProdutoName.appendChild(textoNome);
            cardProdutoPreco.className = "produtos__list__card__content__price";
            cardProdutoPreco.appendChild(textoPreco);
            cardProdutoLink.className = "produtos__list__card__content__link products__list__card__content__link";
            cardProdutoId.className = "produtos__list__card__content__id-hide"
           
            produtoLista.appendChild(cardProdutoLi);
        }
    });
}

function mensagemNegativa() {
    const cardsPesquisa = document.getElementsByClassName('produtos__list__card');
    const mensagem = document.getElementById('not-find');
    if(cardsPesquisa.length == 0) {
        mensagem.className = "not-find-message not-find-message__show";
    }
}

exibeProduto(dbObjeto);
mensagemNegativa();