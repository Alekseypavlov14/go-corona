import './scss/index.scss'

// burger 
const burgerButton = document.getElementById('menu__icon')
const menu = document.getElementById('menu')

burgerButton.onclick = () => {
  menu.classList.toggle('--opened')
}