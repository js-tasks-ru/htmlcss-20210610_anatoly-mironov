const menu = document.getElementById('burger-menu');
const menuClose = document.getElementById('burger-menu-close');
const menuOpen = document.getElementById('burger-menu-open');

menuOpen.addEventListener('click', function() {
  if (menu) {
    menu.setAttribute('data-open', '');
    document.body.style.overflowY = 'hidden';
  }
});

menuClose.addEventListener('click', function() {
  if (menu) {
    closeMenu();
  }
});

menu.addEventListener('click', function(event) {
  if (event.target === menu) {
    closeMenu();
  }
});

function closeMenu() {
  menu.removeAttribute('data-open');
  document.body.style.overflowY = 'auto';
}