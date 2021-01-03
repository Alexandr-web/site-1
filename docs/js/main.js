'use strict'; // открытие и закртыие меню на адаптиве

function sitchingMenu() {
  var btn_open = document.querySelector('.header__nav-btn');
  var btn_close = document.querySelector('.header__nav-list-btn');
  var menu = document.querySelector('.header__nav-list');

  function switchingClasses(className, btn, remove) {
    if (remove) {
      btn.addEventListener('click', function () {
        menu.classList.remove(className);
      });
    } else {
      btn.addEventListener('click', function () {
        menu.classList.add(className);
      });
    }
  }

  switchingClasses('open-menu', btn_close, true);
  switchingClasses('open-menu', btn_open, false);
}

sitchingMenu();