const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    method: 'GET',
}).then(function(response) {
    return response.json();
})

const produtosSimilares = document.getElementById('similar-products')
const idItem = sessionStorage.getItem('id');
const dbObjeto = await db;

function criaProduto(dbObjeto){
    dbObjeto.forEach(element => {
        if(element._id == idItem) {
            const categoriaProduto = element.categoria;
            dbObjeto.forEach(element => {
                if(element.categoria == categoriaProduto) {
                    let i = 0;

                    const cardProdutoLi = document.createElement("li");
                    const cardProdutoImg = document.createElement("img");
                    const cardProdutoContainer = document.createElement("div");
                    const cardProdutoName = document.createElement("p");
                    const cardProdutoPreco = document.createElement("p");
                    const cardProdutoLink = document.createElement("p");
                    const cardProdutoId = document.createElement("p");
                    
                    const textoNome = document.createTextNode(`${element.nome}`);
                    const textoPreco = document.createTextNode(`R$ ${element.preco}`);
                    const textoId = document.createTextNode(`${element._id}`);
                    const textoLink = document.createTextNode(`Ver produto`);
            
                    cardProdutoLi.appendChild(cardProdutoImg);
                    cardProdutoLi.appendChild(cardProdutoContainer);
                    cardProdutoContainer.appendChild(cardProdutoName);
                    cardProdutoContainer.appendChild(cardProdutoPreco);
                    cardProdutoContainer.appendChild(cardProdutoLink);
                    cardProdutoContainer.appendChild(cardProdutoId);
                    cardProdutoLink.appendChild(textoLink);
                    cardProdutoId.appendChild(textoId);
            
                    cardProdutoLi.className = "products__list__card";
                    cardProdutoImg.alt = `${element.nome}`
                    cardProdutoImg.setAttribute('src', `../src/assets/img/${element.imagem}`)
                    cardProdutoImg.className = "products__list__card__img"
                    cardProdutoContainer.className = "products__list__card__content";
                    cardProdutoName.className = "products__list__card__content__text";
                    cardProdutoName.appendChild(textoNome);
                    cardProdutoPreco.className = "products__list__card__content__price";
                    cardProdutoPreco.appendChild(textoPreco);
                    cardProdutoLink.className = "products__list__card__content__link";
                    cardProdutoId.className = "products__list__card__content__id-hide"
                    cardProdutoId.className = "products__list__card__content__id-hide"

                    if(i < 4) {
                        produtosSimilares.appendChild(cardProdutoLi); 
                    }

                    i = i + 1;
                }
            })
        }

    });

}

criaProduto(dbObjeto);