// Header script start
(function () {
    const adviceMenu = document.querySelector('.advice__list');
    const adviceClick = document.querySelector('.advice-menu');
    const arrow = document.querySelector('.arrow-ico');

    adviceClick.onclick = function() {
        if (adviceMenu.classList.contains('advice__list--active')) {
            adviceMenu.classList.remove('advice__list--active'); 
            arrow.classList.toggle('arrow-ico--active');
        } 
        else {
            adviceMenu.classList.add('advice__list--active');
            arrow.classList.toggle('arrow-ico--active');
        }
    } 
    
}());
// Header script end