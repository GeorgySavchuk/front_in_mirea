
let parallaxBackground = document.querySelector(".parallax-background");

window.addEventListener('scroll', function(){
    let opacityValue = 1 - window.scrollY / 550;
    parallaxBackground.style.opacity = opacityValue > 0 ? opacityValue : 0;
    parallaxBackground.style.transform = 'translateY(' + window.scrollY * .5 + 'px)';
    // parallaxBackground.style.top = window.screenY +'px';
});