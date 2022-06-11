import './scss/index.scss'

// burger 
const burgerButton = document.getElementById('menu__icon')
const menu = document.getElementById('menu')

burgerButton.onclick = (event) => {
  event.preventDefault()
  menu.classList.toggle('--opened')
  burgerButton.classList.toggle('--opened')
}