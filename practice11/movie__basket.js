const render = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const deleteButtons = document.querySelectorAll(".remove-cart-item")
    const clearCart = document.querySelector(".clear-cart");
    const total = document.querySelector(".total");
    const totalCosts = document.querySelectorAll(".total-cost");
    let sum = 0;
    let temp = 0;
    totalCosts.forEach(totalCost =>{
        temp = parseInt(totalCost.textContent);
        sum += temp;
    });
    total.textContent = `Итого: ${sum} руб`;

    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            const item = this.closest('.cart-item');
            if (item) {
                item.remove();
            }
            render();
        });
    });
    clearCart.addEventListener("click", function() {
        cartItems.forEach(item =>{
            item.remove();
        });
        render();
    });
};
const render_counter= ()=>{


    const countContainers = document.querySelectorAll('.count-container');

    countContainers.forEach(container => {
        const countDisplay = container.querySelector('.count');
        const plusButton = container.querySelector('.plus');
        const minusButton = container.querySelector('.minus');

        const plusHandler = () => {
            let count = parseInt(countDisplay.textContent);
            countDisplay.textContent = ++count;
            const item = container.closest('.cart-item').querySelector(".total-cost");
            item.textContent = `${parseInt(item.textContent) / (count - 1) * count} руб`;
            render();
        };

        const minusHandler = () => {
            let count = parseInt(countDisplay.textContent);
            if (count > 0) {
                --count;
                if (count === 0) {
                    const item = container.closest('.cart-item');
                    if (item) {
                        item.remove();
                    }
                }
                countDisplay.textContent = count;
                const item = container.closest('.cart-item').querySelector(".total-cost");
                item.textContent = `${parseInt(item.textContent) / (count + 1) * count} руб`;
            }
            render();
        };

        plusButton.addEventListener('click', plusHandler);
        minusButton.addEventListener('click', minusHandler);

        // Сохраняем ссылки на обработчики событий для последующего удаления
        container.plusHandler = plusHandler;
        container.minusHandler = minusHandler;
    });
};
render();
render_counter();
const removeEventListeners = () => {
    const countContainers = document.querySelectorAll('.count-container');
    countContainers.forEach(container => {
        const plusButton = container.querySelector('.plus');
        const minusButton = container.querySelector('.minus');
        plusButton.removeEventListener('click', container.plusHandler);
        minusButton.removeEventListener('click', container.minusHandler);
    });
};

const button1 = document.querySelector("#rec-1");
const button2 = document.querySelector("#rec-2");
const button3 = document.querySelector("#rec-3");

button1.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
        <div class="cart-item">
            <div class="title-and-image">
                <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1777765/dd78edfd-6a1f-486c-9a86-6acbca940418/orig">
                <p class="title">Игра престолов(2011)</p>
            </div>
            <div>
                <p class="total-cost">700 руб</p>
                <h4>Количество</h4>
                <div class="count-container">
                    <button class="minus">-</button>
                    <p class="count">1</p>
                    <button class="plus">+</button>
                </div>
            </div>
            <button class="remove-cart-item">X</button>
        </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    removeEventListeners();
    render_counter();
});

button2.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
        <div class="cart-item">
        <div class="title-and-image">
            <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/dbf10d8c-83cf-4822-b99f-23a9704c11b3/orig">
            <p class="title">Форс-мажоры(2011)</p>
        </div>
        <div>
            <p class="total-cost">600 руб</p>
            <h4>Количество</h4>
            <div class="count-container">
                <button class="minus">-</button>
                <p class="count">1</p>
                <button class="plus">+</button>
            </div>
        </div>
        <button class="remove-cart-item">X</button>
        </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    removeEventListeners();
    render_counter();
});

button3.addEventListener('click', ()=>{
    const productsContainer = document.querySelector('.products');

    const newCartItemHTML = `
    <div class="cart-item">
    <div class="title-and-image">
        <img src="https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/fb35416f-3b0d-4b96-bc65-cf6923f9e329/orig">
        <p class="title">Во все тяжкие(2008)</p>
    </div>
    <div>
        <p class="total-cost">700 руб</p>
        <h4>Количество</h4>
        <div class="count-container">
            <button class="minus">-</button>
            <p class="count">1</p>
            <button class="plus">+</button>
        </div>
    </div>
    <button class="remove-cart-item">X</button>
    </div>
    `;
    productsContainer.insertAdjacentHTML('beforeend', newCartItemHTML);
    render();
    removeEventListeners();
    render_counter();
});

const filterArray = (arr, a, b) => {
    return arr.filter(item => item >= a && item <= b);
}
const func = () => {
    const a = prompt("Введите нижнюю границу(a): ");
    const b = prompt("Введите верхнюю границу(b): ");

    const cartItems = document.querySelectorAll(".cart-item");
    cartItems.forEach(function(cart){
        if(!(+cart.children[1].children[0].textContent >= +a && +cart.children[1].children[0].textContent <= +b)) {
            cart.remove();
        }
    })
    render();
}
const sortUp = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const sortedItems = Array.from(cartItems).sort((a, b) => {
        const priceA = +a.children[1].children[0].textContent;
        const priceB = +b.children[1].children[0].textContent;
        return priceA - priceB;
    });

    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    sortedItems.forEach(item => {
        productsContainer.appendChild(item);
    });

    render();
}
const sortDown = () => {
    const cartItems = document.querySelectorAll(".cart-item");
    const sortedItems = Array.from(cartItems).sort((a, b) => {
        const priceA = +a.children[1].children[0].textContent;
        const priceB = +b.children[1].children[0].textContent;
        return priceB - priceA;
    });

    const productsContainer = document.querySelector('.products');
    productsContainer.innerHTML = '';

    sortedItems.forEach(item => {
        productsContainer.appendChild(item);
    });

    render();
}

const filterBtn = document.querySelector('.filter')
filterBtn.addEventListener('click', func)
const sortUpBtn = document.querySelector('.sortUp')
const sortDownBtn = document.querySelector('.sortDown')
sortUpBtn.addEventListener('click', sortUp)
sortDownBtn.addEventListener('click', sortDown)