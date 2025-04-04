import { getDB, setDB } from './storage.js'
import { renderCards } from '../elements/render-cards.js'
import {
  handleMouseDown,
  handleMouseUp,
  handleOnTouchEnd,
} from './clicks-touches.js'
import { showModal, modalCard } from '../elements/modal/modal.js'
import { editCard } from '../elements/modal/edit-card.js'
import { infoCard } from '../elements/modal/info-card.js'
import { delCard } from '../elements/modal/del-card.js'
import { getToday } from './func.js'

export function addListeners() {
  let bd = getDB('memorizer')
  const cards = document.querySelectorAll('.card__text')

  for (let card of cards) {
    card.addEventListener('click', (e) => {
      const id = e.target
        .closest('.card')
        .querySelector('.card__id').textContent
      const item = bd.find((item) => item.id == id)

      item.count++
      if (item.count == 1) {
        item.start = getToday(Date.now())
      }
      if (item.count > 0 && item.count <= 10) {
        item.status = 'study'
      }
      if (item.count > 10 && item.count <= 100) {
        item.status = 'active'
      }
      if (item.count >= 100) {
        item.status = 'done'
        item.finish = getToday(Date.now())
      }
      item.lastRemember = getToday(Date.now())

      setDB('memorizer', bd)
      renderCards('active')
    })

    // долгое нажатие
    card.addEventListener('touchstart', cardLongPress)
    card.addEventListener('mousedown', cardLongPress)

    function cardLongPress(e) {
      handleMouseDown(showModal)
      const id = e.target
        .closest('.card')
        .querySelector('.card__id').textContent
      const $modalContent = document.querySelector('.modal__content')
      modalCard($modalContent)
      const $info = $modalContent.querySelector('.modal__info')
      const $edit = $modalContent.querySelector('.modal__edit')
      const $del = $modalContent.querySelector('.modal__del')
      $info.addEventListener('click', () => {
        infoCard($modalContent, id)
      })
      $info.addEventListener('touchstart', () => {
        infoCard($modalContent, id)
      })
      $del.addEventListener('click', () => {
        delCard(id)
      })
      $del.addEventListener('touchstart', () => {
        delCard(id)
      })
      $edit.addEventListener('click', () => {
        editCard($modalContent, id)
      })
      $edit.addEventListener('touchstart', () => {
        editCard($modalContent, id)
      })
    }

    card.addEventListener('mouseup', () => {
      handleMouseUp()
    })
    card.addEventListener('touchend', handleOnTouchEnd)
  }
}
