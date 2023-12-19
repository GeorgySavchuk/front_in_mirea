const button = document.querySelector('.like__btn');
const likeCounter = document.querySelector('.like__counter')
const likeImg = document.querySelector('.like__img path')
const heartsContainer = document.querySelector('.hearts__container')
const heartContainerBtn = document.querySelector('.hearts__container button')
button.addEventListener('click', () => {
    if(button.style.background === "lightgrey") {
        button.style.background = "red"
        likeCounter.textContent = "1"
        likeCounter.style.color = "white"
        likeImg.style.fill = "white"
    } else {
        button.style.background = "lightgrey"
        likeCounter.textContent = "0"
        likeCounter.style.color = "black"
        likeImg.style.color = "lightgrey"
        likeImg.style.fill = "black"
    }
})
let isEmittingHearts = false;
heartContainerBtn.addEventListener('click', () =>{
        if (!isEmittingHearts) {
            isEmittingHearts = true;
            document.addEventListener('mousemove', createHeart);
        } else {
            isEmittingHearts = false;
            const imgElements = heartsContainer.querySelectorAll('img');
            imgElements.forEach(img => {
                img.remove();
            });
            document.removeEventListener('mousemove', createHeart);
        }
});




function createHeart(e) {
    const img = document.createElement('img');
    img.src = "img.png";
    img.alt = "Картинка"
    img.style.top = `${e.clientY - 136}px`;
    img.style.left = `${e.clientX - 20}px`;
    heartsContainer.appendChild(img);
    setTimeout(() => {
        img.remove();
    }, 1000);
}

