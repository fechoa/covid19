(function () {
    const burgerMenu = document.querySelector('.nav-bar');
    const burgerOn = document.querySelector('.nav__burger');
    const burgerOff = document.querySelector('.nav__close');

    burgerOn.onclick = function() {
        burgerMenu.classList.add('nav-bar--active');
    };
    burgerOff.onclick = function() {
        burgerMenu.classList.remove('nav-bar--active')
    };

    window.onkeydown = function(event) {
        if ( event.keyCode == 27 ) {
            if (burgerMenu.classList.contains('nav-bar--active')) {
                burgerMenu.classList.remove('nav-bar--active');
            };   
        }
    };
}());

