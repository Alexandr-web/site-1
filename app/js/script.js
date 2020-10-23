'use strict';

// открытие и закртыие меню на адаптиве
function sitchingMenu() {
    const btn_open = document.querySelector('.header__nav-btn');
    const btn_close = document.querySelector('.header__nav-list-btn');
    const menu = document.querySelector('.header__nav-list');

    function switchingClasses(className, btn, remove) {
        if (remove) {
            btn.addEventListener('click', () => {
                menu.classList.remove(className);
            });
        } else {
            btn.addEventListener('click', () => {
                menu.classList.add(className);
            });
        }
    }

    switchingClasses('open-menu', btn_close, true);
    switchingClasses('open-menu', btn_open, false);
}

sitchingMenu();