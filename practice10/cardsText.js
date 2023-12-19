const truncate = (str, maxLength) => {
    if (str.length > maxLength) {
        return str.slice(0, maxLength - 1) + "…";
    }
    return str;
}

const moviesInfo = document.querySelectorAll('.movie__info p')
const moviesContent = document.querySelectorAll('.content p')
const cardsInfo = document.querySelectorAll('.card__info span')
const info = document.querySelectorAll('.nonblur__content span')
const maxLength = 31;
moviesInfo.forEach(movieInfo => movieInfo.textContent = truncate(movieInfo.textContent, maxLength))
moviesContent.forEach(movieContent => movieContent.textContent = truncate(movieContent.textContent, maxLength))
cardsInfo.forEach(cardInfo => cardInfo.textContent = truncate(cardInfo.textContent, maxLength))
info.forEach(text => text.textContent = truncate(text.textContent, maxLength))
