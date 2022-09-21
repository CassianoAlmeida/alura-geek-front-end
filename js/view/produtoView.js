const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    method: 'GET',
}).then(function(response) {
    return response.json();
})

const idItem = sessionStorage.getItem('id');
const dbObjeto = await db;

function criaProduto(dbObjeto){
    dbObjeto.forEach(element => {
        if(element._id !== idItem) {
            return element;
        }

        const imagemItem = document.getElementById('product-image');
        const nomeItem = document.getElementById('product-title');
        const precoItem = document.getElementById('product-price');
        const descricaoItem = document.getElementById('product-description');
    
        const textoNome = document.createTextNode(`${element.nome}`);
        const textoPreco = document.createTextNode(`R$ ${element.preco}`);
        const textoDescricao = document.createTextNode(`${element.descricao}`);

        imagemItem.setAttribute('src', `../src/assets/img/${element.imagem}`);
        nomeItem.appendChild(textoNome);
        precoItem.appendChild(textoPreco);
        descricaoItem.appendChild(textoDescricao);
    });
}



criaProduto(dbObjeto);

