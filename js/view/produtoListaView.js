const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
}).then(function(response) {
    return response.json();
})
const dbObjeto = await db;

function carregaCards() {
    dbObjeto.forEach((element) => {

        const produtoLista = document.getElementById('produtos-list')

        const cardProdutoLi = document.createElement("li");
        const cardProdutoImg = document.createElement("img");
        const cardProdutoContainer = document.createElement("div");
        const cardProdutoName = document.createElement("p");
        const cardProdutoPreco = document.createElement("p");
        const cardProdutoId = document.createElement("p");
        const buttonContainer = document.createElement("div");
        const buttonDeleta = document.createElement("button");
        const buttonEdita = document.createElement("button");
        const iconDeleta = document.createElement("img");
        const iconEdita = document.createElement("img");

        cardProdutoLi.appendChild(cardProdutoImg);
        cardProdutoLi.appendChild(cardProdutoContainer);
        cardProdutoLi.appendChild(buttonContainer);
        cardProdutoContainer.appendChild(cardProdutoName);
        cardProdutoContainer.appendChild(cardProdutoPreco);
        cardProdutoContainer.appendChild(cardProdutoId);
        buttonContainer.appendChild(buttonDeleta);
        buttonDeleta.appendChild(iconDeleta);
        buttonContainer.appendChild(buttonEdita);
        buttonEdita.appendChild(iconEdita);

        const textoNome = document.createTextNode(`${element.nome}`);
        const textoPreco = document.createTextNode(`R$ ${element.preco}`);
        const textoId = document.createTextNode(`${element._id}`);

        cardProdutoLi.className = "produtos__list__card";
        cardProdutoImg.alt = `${element.nome}`;
        cardProdutoImg.className = "produtos__list__card__img";
        cardProdutoImg.setAttribute('src', `/src/assets/img/${element.imagem}`);
        cardProdutoContainer.className = "produtos__list__card__content";
        cardProdutoName.className = "produtos__list__card__content__text";
        cardProdutoName.appendChild(textoNome);
        cardProdutoPreco.className = "produtos__list__card__content__price";
        cardProdutoPreco.appendChild(textoPreco);
        cardProdutoId.className = "produtos__list__card__content__id";
        cardProdutoId.appendChild(textoId);
        buttonContainer.className = "produtos__list__card__button-box";
        buttonDeleta.className = "produtos__list__card__button-box__button__delete produtos__list__card__button-box__button";
        buttonDeleta.alt = "delete";
        buttonEdita.className = "produtos__list__card__button-box__button__edit produtos__list__card__button-box__button";
        buttonEdita.alt = "edit";

        iconDeleta.src = "../src/assets/img/delete-icon.png";
        iconEdita.src = "../src/assets/img/edit-icon.png";

        produtoLista.appendChild(cardProdutoLi);

    });
} 

window.onload = carregaCards();

export default db;
