import { renderCards } from '../render-cards.js'
import { books } from '../../db/books.js'
import { trans } from '../../db/trans.js'

export function selectList() {
  const $select = document.querySelector('.select-list')

  $select.addEventListener('change', () => {
    switch ($select.value) {
      case 'wait':
        renderCards('wait')
        break
      case 'done':
        renderCards('done')
        break
      case 'all':
        renderCards('all')
        break
      default:
        renderCards('active')
        break
    }
  })
}

// заполнение select
export function setSelect($book, $trans) {
  books.forEach((book) => {
    $book.innerHTML += `<option value="${book}">${book}</option>`
  })
  trans.forEach((book) => {
    $trans.innerHTML += `<option value="${book.id}">${book.title}</option>`
  })
}
