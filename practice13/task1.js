const centeredContainer = document.querySelector('.image-layout');
const centeredImage = document.querySelector('.image-layout img');
function centerImage() {
    const containerWidth = centeredContainer.clientWidth;
    const containerHeight = centeredContainer.clientHeight;
    const imageWidth = centeredImage.width;
    const imageHeight = centeredImage.height;

    const offsetX = (containerWidth - imageWidth) / 2;
    const offsetY = (containerHeight - imageHeight) / 2;

    centeredImage.style.left = offsetX + 'px';
    centeredImage.style.top = offsetY + 'px';
}
centerImage();

window.addEventListener('resize', centerImage);

centeredContainer.addEventListener('click', function (event) {
    const x = event.clientX;
    const y = event.clientY;
    console.log('Вы нажали тут: (' + x + ', ' + y + ')');
});