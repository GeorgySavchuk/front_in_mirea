const content = document.querySelector('#contents')
content.addEventListener('click', e => {
    const item = e.target.closest('a')
    const answer = prompt("Вы точно хотите покинуть страницу?", '');
    if (answer === 'нет') {
        e.preventDefault()
    }
})
const backdrops = [
    "https://imagetmdb.com/t/p/original/kXfqcdQKsToO0OUXHcrrNCHDBzO.jpg",
    "https://imagetmdb.com/t/p/original/9faGSFi5jam6pDWGNd0p8JcJgXQ.jpg",
    "https://imagetmdb.com/t/p/original/tintsaQ0WLzZsTMkTiqtMB3rfc8.jpg",
    "https://imagetmdb.com/t/p/original/2OMB0ynKlyIenMJWI2Dy9IWT4c.jpg"
]
const clickableContainer = document.querySelector('.clickable-images')
const mainImage = document.querySelector('.main-image img')
window.onload = () => {
    mainImage.src = backdrops[0]
}
clickableContainer.addEventListener('click', e => {
    const item = e.target.closest('img')
    mainImage.src = backdrops[item.id]
})

const list = document.getElementById('myList');

list.addEventListener('click', function (e) {
    const clickedItem = e.target;
    const isCtrlPressed = e.ctrlKey || e.metaKey;

    if (!isCtrlPressed) {
        const allItems = list.getElementsByTagName('li');
        for (const item of allItems) {
            item.classList.remove('selected');
        }
    }

    clickedItem.classList.toggle('selected');
});
list.onmousedown = function() {
    return false;
};
const slider = document.querySelector('.slider')
let thumb = slider.querySelector('.thumb');

thumb.onmousedown = e => {
    e.preventDefault();

    let shiftX = e.clientX - thumb.getBoundingClientRect().left;

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(e) {
        let newLeft = e.clientX - shiftX - slider.getBoundingClientRect().left;

        if (newLeft < 0) {
            newLeft = 0;
        }
        let rightEdge = slider.offsetWidth - thumb.offsetWidth;
        if (newLeft > rightEdge) {
            newLeft = rightEdge;
        }

        thumb.style.left = newLeft + 'px';
    }

    function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
    }

};

thumb.ondragstart = () =>  {
    return false;
};




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
        };

        plusButton.addEventListener('click', plusHandler);
        minusButton.addEventListener('click', minusHandler);

        container.plusHandler = plusHandler;
        container.minusHandler = minusHandler;
    });
};
render_counter()

let currentDroppable = null
const products = document.querySelector('.products')
const total = document.querySelector(".total");
let currentTotalSum = 0
let currentCartContainer = null
products.onmousedown = e => {
    const cart = e.target.closest('.cart-item img')
    currentCartContainer = e.target.closest('.cart-item')
    const draggableCart = document.createElement('img');
    let shiftX = e.clientX - cart.getBoundingClientRect().left
    let shiftY = e.clientY - cart.getBoundingClientRect().top
    draggableCart.style.position = 'absolute';
    draggableCart.style.zIndex = 10000;
    draggableCart.style.width = '100px'
    draggableCart.style.height = '100px'
    draggableCart.src = cart.src
    draggableCart.style.opacity = 0.7
    document.body.appendChild(draggableCart)
    draggableCart.ondragstart = () => false;

    moveAt(e.pageX, e.pageY)
    function moveAt(pageX, pageY) {
        draggableCart.style.left = pageX - shiftX * 0.5 + 'px';
        draggableCart.style.top = pageY - shiftY * 0.5 + 'px';
    }
    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);

        draggableCart.hidden = true;
        let elemBelow = document.elementFromPoint(event.clientX, event.clientY);
        draggableCart.hidden = false;

        if (!elemBelow) return;

        let droppableBelow = elemBelow.closest('.cart-submit-container');
        if (currentDroppable != droppableBelow) {
            currentDroppable = droppableBelow;
            if (currentDroppable) {
                const productCostElement = currentCartContainer.querySelector('.total-cost');
                const productCountElement = currentCartContainer.querySelector('.count');
                const productCost = productCostElement ? parseInt(productCostElement.textContent) : 0;
                const productCount = productCountElement ? parseInt(productCountElement.textContent) : 0;

                currentTotalSum += (productCost / productCount) * productCount;

                const totalCost = document.querySelector('.total');
                totalCost.textContent = `Итого: ${currentTotalSum} руб`;
                draggableCart.remove();
                document.removeEventListener('mousemove', onMouseMove);
            }
        }
    }

    document.addEventListener('mousemove', onMouseMove);

    draggableCart.onmouseup = function() {
        document.removeEventListener('mousemove', onMouseMove);
        draggableCart.onmouseup = null;
    };

};




const animatedList = document.getElementById('animatedList');

animatedList.addEventListener('click', function (event) {
    const clickedItem = event.target;
    animateBounce(clickedItem, () => {
        animateReverseMove(clickedItem);
    });
});

function animateBounce(element, onComplete) {
    let start = performance.now();

    function animate(time) {
        let timeFraction = (time - start) / 1000;
        if (timeFraction > 1) timeFraction = 1;

        let progress = bounce(timeFraction);
        element.style.left = progress * 100 + 'px';

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        } else {
            onComplete();
        }
    }

    requestAnimationFrame(animate);
}

function animateReverseMove(element) {
    let start = performance.now();
    let initialLeft = parseInt(element.style.left) || 0;

    function animate(time) {
        let timeFraction = (time - start) / 1000;
        if (timeFraction > 1) timeFraction = 1;

        let progress = 1 - Math.pow(1 - timeFraction, 5);
        element.style.left = initialLeft - progress * 100 + 'px';

        if (timeFraction < 1) {
            requestAnimationFrame(animate);
        }
    }

    requestAnimationFrame(animate);
}
function bounce(timeFraction) {
    for (let a = 0, b = 1; 1; a += b, b /= 2) {
        if (timeFraction >= (7 - 4 * a) / 11) {
            return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
        }
    }
}





const btnAddLi = document.querySelector(".btn-add-li");
const targetList = document.querySelector(".target-list");


function showNotification(text){
    /*const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.textContent = text;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 1500);*/
    alert(text)
}

btnAddLi.addEventListener('click', () => {
    const userInput = prompt('Введите содержимое пункта списка:', '');
    if (!userInput) {
        showNotification("Вы ввели пустую строку или отменили действие");
        return;
    }
    const listItem = document.createElement('li');
    targetList.appendChild(listItem);
    listItem.textContent = userInput;

    const text = userInput;
    const textContainer = listItem;

    let index = 0;
    let animationFrame;

    function animateText() {
        textContainer.textContent = text.substring(0, index);
        index++;

        if (index <= text.length) {
            animationFrame = requestAnimationFrame(() => {
                setTimeout(animateText, 150);
            });
        }
    }
    animationFrame = requestAnimationFrame(animateText);
});