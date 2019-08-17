var header = document.querySelector('#site-header');
var toggleMenu = header.querySelector('#toggleMenu');


header.classList.add('site-header--closed');
toggleMenu.classList.add('site-header__toggle--open');

toggleMenu.addEventListener('click', function () {

  if (header.classList.contains('site-header--closed')) {
    this.classList.add('site-header__toggle--close');
    this.classList.remove('site-header__toggle--open');
    header.classList.remove('site-header--closed');
    header.classList.add('site-header--opened');
    return;
  }
  this.classList.remove('site-header__toggle--close');
  this.classList.add('site-header__toggle--open');
  header.classList.add('site-header--closed')
});

