const menuElm = document.getElementById('menu-tlacitko');

menuElm.addEventListener('click', () => {
  const menuItemElm = document.getElementById('menu-polozky');
  menuItemElm.classList.toggle('show');
  if (menuItemElm.classList.contains('show')) {
    menuElm.innerHTML = '<i class="fas fa-xmark"></i>';
  } else {
    menuElm.innerHTML = '<i class="fas fa-bars"></i>';
  }
});
