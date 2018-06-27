const menuToggle = document.querySelector('.menu__toggle')
const menuList = document.querySelector('.menu__list')

const menuListHeight = menuList.clientHeight
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