const movieCardsContainer = document.querySelector('.movie__cards__container');
let scrollThreshold = 450;

function createMovieCard(img, title, description) {
    const newCard = document.createElement('div');
    newCard.className = 'movie__card';
    newCard.innerHTML = `
        <img src=${img} alt="${title}">
        <div class="movie__info">
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="#1" class="movie__btn">Подробнее</a>
        </div>
    `;
    movieCardsContainer.appendChild(newCard);
}

function checkScroll() {
    const scrolledHeight = window.scrollY;
    if (scrolledHeight >= scrollThreshold) {
        createMovieCard("https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/0b76b2a2-d1c7-4f04-a284-80ff7bb709a4/orig","Побег из Шоушенка(1994)", "Несправедливо осужденный банкир готовит побег из тюрьмы. Тим Роббинс в выдающейся экранизации Стивена Кинга");
        createMovieCard("https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/90d57813-387c-44c4-81c1-ecddb3c417a5/orig","Гнев человеческий(2021)", "Хмурый мужчина прикидывается инкассатором, чтобы выйти на грабителей. Гай Ричи и Джейсон Стэйтем снова вместе");
        createMovieCard("https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/637271d5-61b4-4e46-ac83-6d07494c7645/orig", "Джентльмены(2019)", "Наркобарон хочет уйти на покой, но криминальный мир не отпускает. Успешное возвращение Гая Ричи к корням");
        scrollThreshold += 450;
    }
}
window.addEventListener('scroll', checkScroll);

