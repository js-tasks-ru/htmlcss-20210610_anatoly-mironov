const changer = document.getElementById('theme-changer');
const changerMobile = document.getElementById('theme-changer-mobile');
const html = document.documentElement;

changer.addEventListener('change', toggleAttribute);
changerMobile.addEventListener('change', toggleAttribute);

const isDarkThemeEnabled = window.sessionStorage.getItem('darkTheme');

if (isDarkThemeEnabled === 'true') {
  toggleAttribute();
  changer.setAttribute('checked', true);
  changerMobile.setAttribute('checked', true);
}

function toggleAttribute() {
  const isEnabled = html.toggleAttribute('data-theme-dark');
  window.sessionStorage.setItem('darkTheme', isEnabled.toString())
}
