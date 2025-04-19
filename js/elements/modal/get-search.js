import { getDB } from '../../func/storage.js'
import { renderCards } from '../render-cards.js'
import { closeModal } from './modal.js'

export function getSearch() {
  closeModal()

  const inpWrap = document.querySelector('.navigation__search')
  const inpClose = document.querySelector('.navigation__close')
  const inp = document.querySelector('.searching')
	const search = document.querySelector('.navigation__searching')

  // открытие/закрытие окна search
  inpWrap.classList.add('show')
  inpClose.addEventListener('click', () => {
    inpWrap.classList.remove('show')
		renderCards()
  })

  // поиск карточек
  const db = getDB('memorizer')
  search.addEventListener('click', handleInput)

  function handleInput() {
    const newList = []
		db.forEach(item => {
			if (item.text.toLowerCase().includes((inp.value).toLowerCase())) {
				newList.push(item)
			}
		});
		 renderCards(newList, 'all')
  }
}
