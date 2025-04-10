import { getDB, setDB } from '../../func/storage.js'
import { closeModal } from '../modal/modal.js'
import { renderCards } from '../render-cards.js'

export function delCard(id) {
  let bd = getDB('memorizer')
  const $select = document.querySelector('.select-list')
  const place = bd.find((i) => i.id == id)
  const allow = confirm(`Удалить карточку ${place.place}`)
  if (allow) {
    closeModal()
    bd = bd.filter((i) => i.id != id)
    setDB('memorizer', bd)
    renderCards($select.value)
  }
}
