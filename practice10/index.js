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