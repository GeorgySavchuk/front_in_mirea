function Accumulator(startingValue) {
    this.value = startingValue ?? 0;
    this.read =  function () {
        const newValue = +prompt("Введите сумму товара", '0');
        this.value += newValue;
        alert(`Текущая сумма товаров: ${this.value}`)
    }
}
let accumulator;
window.onload = () => accumulator = new Accumulator();

const shoppingBasket = document.querySelector('.shopping__basket');
shoppingBasket.addEventListener('click', () => accumulator.read())
