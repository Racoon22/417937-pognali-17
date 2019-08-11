var navigation = document.querySelector('#navigation');
var closeMenuButton = navigation.querySelector('#closeMenuModal');
var openMenuButton = document.querySelector('#openMenuModal');

navigation.classList.add('site-header__navigation--close');

closeMenuButton.addEventListener('click', function () {
  navigation.classList.add('site-header__navigation--close')
});

openMenuButton.addEventListener('click', function () {
  navigation.classList.remove('site-header__navigation--close')
});
