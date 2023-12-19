document.addEventListener('DOMContentLoaded', function() {
    const checkboxToggle = document.getElementById('checkbox_toggle');
    const menu = document.querySelector('.menu');
    checkboxToggle.addEventListener('change', function() {

        if (checkboxToggle.checked) {
            menu.style.bottom = '0';
        } else {
            menu.style.bottom = '';
        }
    });
});
/*const update = () => {
    const prevCount = +notificationsCount.textContent;
    const notificationContainer = document.querySelector('.notification__items')
    const notification = document.createElement('div');
    notification.className = 'notification__item';
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    span1.textContent = prevCount + 1;
    span2.textContent = "Новое уведомление";
    notificationsCount.textContent = prevCount + 1;
    notification.appendChild(span1);
    notification.appendChild(span2);
    notificationContainer.appendChild(notification);
    clearInterval(timeInterval)
    currentTime = 1
    timeInterval = setInterval(() => {
        console.log(currentTime++)
    }, 1000)
}
const notificationsCount = document.querySelector('.icon-button__badge')
const notificationBtn = document.querySelector('.icon-button')
let interval = setInterval(update, 3000)
let currentTime = 1;
let timeInterval = setInterval(() => {
    console.log(currentTime++)
}, 1000);
function delayDecorator(func, delay) {
    return function() {
        clearInterval(interval)
        clearInterval(timeInterval)
        currentTime = 1
        timeInterval = setInterval(() => {
            console.log(currentTime++)
        }, 1000)
        setTimeout(() => {
            func.apply(this, arguments);
            interval = setInterval(update, 3000)
            clearInterval(timeInterval)
            currentTime = 1
            timeInterval = setInterval(() => {
                console.log(currentTime++)
            }, 1000)
        }, delay);
    };
}
const delayedHandleNotifications = delayDecorator(update, 10000);
notificationBtn.addEventListener('click', delayedHandleNotifications)*/




const task3Btn = document.querySelector('.task3BTN');
task3Btn.addEventListener('click', createList)
function createList() {
    const list = document.querySelector('.task3')
    let userInput;
    do {
        userInput = prompt('Введите текст для нового пункта списка:');
        if (userInput !== null && userInput.trim() !== '') {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(userInput));
            list.appendChild(listItem);
        }
    } while (userInput !== null && userInput.trim() !== '');
}


const task4Btn = document.querySelector('.task4BTN')
task4Btn.addEventListener('click', () => showNotification({content: 'Сериал Игра Престолов был добавлен в избранное'}))
function showNotification(options) {
    const notificationContainer = document.querySelector('.notification__items')
    const notification = document.createElement('div');
    notification.className = 'notification__item';
    const span1 = document.createElement('span')
    const span2 = document.createElement('span')
    const prevCount = +notificationsCount.textContent;
    span1.textContent = prevCount + 1;
    span2.textContent = options.content;
    notification.appendChild(span1);
    notification.appendChild(span2);

    notificationContainer.appendChild(notification);

    notification.style.display = 'flex';

    setTimeout(function () {
        notification.style.display = 'none';
        notificationContainer.removeChild(notification);
    }, 3500);
}