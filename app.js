import { init } from './js/func/init.js'
import { closeModal } from './js/elements/modal/modal.js'
import { menu } from './js/elements/modal/menu.js'
import { addCard } from './js/elements/modal/add-card.js'
import { getVersion } from './js/versions/get-version.js'

init()
getVersion()

document.querySelector('.menu').addEventListener('click', menu)
document.querySelector('.add-card').addEventListener('click', addCard)

// кнопка закрытия модального окна
document.querySelector('.modal__close').addEventListener('click', closeModal)
