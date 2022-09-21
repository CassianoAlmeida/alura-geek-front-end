const verTudoStarWars = document.getElementById('vertudo__star-wars');
const verTudoConsoles = document.getElementById('vertudo__consoles');
const verTudoDiversos = document.getElementById('vertudo__diversos');

verTudoStarWars.addEventListener('click', () => {
    const starWarsCards = document.getElementsByClassName('products__list__card__star-wars');
    for(let i = 0; starWarsCards.length > i ; i++) {
        starWarsCards[i].className = 'products__list__card-show products__list__card__star-wars products__list__card';
    }
})

verTudoConsoles.addEventListener('click', () => {
    const consolesCards = document.getElementsByClassName('products__list__card__consoles');
    for(let i = 0; consolesCards.length > i ; i++) {
        consolesCards[i].className = 'products__list__card-show products__list__card__consoles products__list__card';
    }
})

verTudoDiversos.addEventListener('click', () => {
    const diversosCards = document.getElementsByClassName('products__list__card__diversos');
    for(let i = 0; diversosCards.length > i ; i++) {
        diversosCards[i].className = 'products__list__card-show products__list__card__diversos products__list__card';
    }
})