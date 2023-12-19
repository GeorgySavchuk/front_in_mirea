const notificationsContainer = document.querySelector('.notification__items')
notificationsContainer.addEventListener('click',  (e) => {
    const notificationItem = e.target.closest('.notification__item');

    if (notificationItem) {
        notificationItem.remove();
    }
})