const menuToggle = document.querySelector('.menu__toggle')
const menuList = document.querySelector('.menu__list')
const menuListItems = document.querySelectorAll('.menu__list-item')

const menuListHeight = menuListItems[0].clientHeight * menuListItems.length
menuList.classList.add('menu__list--collapsed')

menuToggle.addEventListener(
    'click',
    (event) => {
        event.preventDefault()

        if(menuList.classList.contains('menu__list--collapsed')){
            menuList.classList.remove('menu__list--collapsed')
            menuList.style.maxHeight = menuListHeight + 'px'
        }else{
            menuList.classList.add('menu__list--collapsed')
        }
    }
)