document.querySelector('.menu-icon-wrapper').onclick = function(){
    document.querySelector('.menu-icon').
    classList.toggle('menu-icon-active');
    // document.querySelector('.header__nav').style.display = "block";
    document.querySelector('.header__menu').classList.toggle('header__menu--visible');
}