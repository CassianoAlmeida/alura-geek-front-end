const arrastaImagem = document.getElementById("image-input");

arrastaImagem.addEventListener("change", function(){
    const preview = document.getElementById("preview")
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        preview.src = reader.result;
    });
    reader.readAsDataURL(this.files[0]);
})

//Envia formulário com o item para o mongo.db
const submit = document.querySelector('[data-submit]')

submit.addEventListener('click', () => {
    const data = new FormData();
    data.append('image', arrastaImagem.files[0]);
    fetch('https://alura-geek-backend.herokuapp.com/imagem', {
        method: 'POST',
        body: data,
    })

    //sobe dados para o mongo.db
    const produto = {}

    const idInput = document.getElementById("id").value;
    const nameInput = document.getElementById("nome").value;
    const priceInput = document.getElementById("preco").value;
    const selectInput = document.querySelector('select');
    const option = selectInput.children[selectInput.selectedIndex];
    const category = option.textContent;    
    const descriptionInput = document.getElementById("descricao").value;

    const imageName = data.get('image').name;

    if(typeof imageName === "undefined") {
        produto["nome"] = nameInput;
        produto["preco"] = priceInput;
        produto["descricao"] = descriptionInput;
        produto["categoria"] = category;
    } else {
        const date = new Date();
        const imageNewName = `${String((Date.now())).slice(0, -3)}-${imageName}`
        produto["imagem"] = imageNewName;
        produto["nome"] = nameInput;
        produto["preco"] = priceInput;
        produto["descricao"] = descriptionInput;
        produto["categoria"] = category;
    }
    
    fetch('https://alura-geek-backend.herokuapp.com/produtos/' + idInput, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(produto),
    });
})