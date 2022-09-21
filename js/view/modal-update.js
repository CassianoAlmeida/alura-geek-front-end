const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
})

// Get the modal
var modal = document.getElementById("modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

db.then(() => {
    const botaoEdita = document.getElementsByClassName('produtos__list__card__button-box__button__edit')
    for(let i = 0; i < botaoEdita.length; i++) {
        botaoEdita[i].onclick = function() {
          modal.style.display = "block";
          
          let img = botaoEdita[i].parentElement.previousSibling.previousSibling.src;
          let id = botaoEdita[i].parentElement.previousSibling.lastChild.textContent;
          let text = botaoEdita[i].parentElement.previousSibling.firstChild.textContent;
          let price = botaoEdita[i].parentElement.previousSibling.children[1].textContent;
          
          const preview = document.getElementById('preview');
          const modalId = document.getElementById('id');
          const modalNome = document.getElementById('nome');
          const modalPreco = document.getElementById('preco');

          document.getElementById("img-icon").
            classList.add('novo-produto__add-image__drag-box__icon-hide');
          document.getElementById("drag-box-description").
            classList.add('novo-produto__add-image__drag-box__text-hide');

          preview.src = img;
          modalId.value = id;
          modalNome.value = text;
          modalPreco.value = price;
          
        }
    }
})

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}