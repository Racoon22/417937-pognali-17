var header = document.querySelector('#site-header');
var toggleMenu = header.querySelector('#toggleMenu');
var tariffsModal = document.querySelector('#tariffsModal');
var tariffsButton = document.querySelector('#tariffsButton');
var closeTariffs = document.querySelector('#closeTariffs');

header.classList.add('site-header--closed');
toggleMenu.classList.add('site-header__toggle--open');

toggleMenu.addEventListener('click', function () {

  if (header.classList.contains('site-header--closed')) {
    this.classList.add('site-header__toggle--close');
    this.classList.remove('site-header__toggle--open');
    header.classList.remove('site-header--closed');
    header.classList.remove('site-header--scroll');
    header.classList.add('site-header--opened');
    return;
  }
  this.classList.remove('site-header__toggle--close');
  this.classList.add('site-header__toggle--open');
  header.classList.remove('site-header--opened');
  header.classList.add('site-header--closed')
});

tariffsButton.addEventListener('click', function (e) {
  e.preventDefault();
  tariffsModal.classList.add('modal--show');
});

closeTariffs.addEventListener('click', function (e) {
  tariffsModal.classList.remove('modal--show');
});

