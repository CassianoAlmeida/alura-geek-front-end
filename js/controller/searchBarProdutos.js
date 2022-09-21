const botaoPesquisa = document.getElementById('button-search');
const conteudoPesquisa = document.getElementById('input-search-bar');
const imgPesquisa = document.getElementById('img-search');
const botaoLogin = document.getElementById('login-button');
const pesquisaContainer = document.getElementById('search-box');

botaoPesquisa.addEventListener('click', () => {
    if(window.innerWidth > 668) {
        sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
        window.location = './pesquisa.html';
    } else {
        imgPesquisa.className = "nav__container__search-box__img nav__container__search-box__img-hide";
        botaoLogin.className = "nav__container__login-button-hide";
        botaoPesquisa.className = "nav__container__search-box__button nav__container__search-box__button-hide";
        pesquisaContainer.className = "nav__container__search-box nav__container__search-box__mobile";
        conteudoPesquisa.className = "nav__container__search-box__input nav__container__search-box__mobile__input";
        conteudoPesquisa.focus();
    }
})

conteudoPesquisa.addEventListener('keydown', (e) => {
    if(e.key == 'Enter') {
        sessionStorage.setItem('search', `${conteudoPesquisa.value}`)
        window.location = './pesquisa.html';
    }
})

conteudoPesquisa.addEventListener('focusout', () => {
    imgPesquisa.className = "nav__container__search-box__img";
    botaoLogin.className = "nav__container__login-button";
    botaoPesquisa.className = "nav__container__search-box__button";
    pesquisaContainer.className = "nav__container__search-box";
    conteudoPesquisa.className = "nav__container__search-box__input";
})