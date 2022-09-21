const db = fetch('https://alura-geek-backend.herokuapp.com/produtos', {
    headers: {
        'Content-Type': 'application/json',
    },
    method: 'GET',
})

db.then(() => {
    const botaoDeleta = document.getElementsByClassName('produtos__list__card__button-box__button__delete')
    for(let i = 0; i < botaoDeleta.length; i++) {
        botaoDeleta[i].addEventListener('click', () => {
            let id = botaoDeleta[i].parentElement.previousSibling.lastChild.textContent;
            if(confirm("Deseja realmente deletar o produto do ID" + id)){
                fetch('https://alura-geek-backend.herokuapp.com/produtos/' + id, {
                    method: 'DELETE',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                })
            }
            document.location.reload(true);
        })
    }
})








