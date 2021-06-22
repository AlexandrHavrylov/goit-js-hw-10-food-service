import styles from './sass/main.scss'
import menuData from './menu.json'
import menuItemsTpl from './templetes/menu_items.hbs'


// Создаем разметку

const menuList = document.querySelector('.js-menu')
menuList.innerHTML = menuItemsTpl(menuData);



// Меняем тему

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeSwitcherChekbox = document.querySelector('#theme-switch-toggle')
const body = document.querySelector('body')
body.classList.add(Theme.LIGHT)


themeSwitcherChekbox.addEventListener('change', changeTheme)
       
function changeTheme(evt) {
   

    if (evt.target.checked) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
        localStorage.setItem ('theme', Theme.DARK)
    }
    else {
        body.classList.replace(Theme.DARK, Theme.LIGHT)
         localStorage.setItem ('theme', Theme.LIGHT)
    }
   
 

}

function setLastChoosenTheme () {
 const lastThemeChoosed = localStorage.getItem("theme")
    
    if (lastThemeChoosed === Theme.DARK) {
        body.classList.replace(Theme.LIGHT, Theme.DARK);
       themeSwitcherChekbox.checked = true;
    }


}

setLastChoosenTheme ()