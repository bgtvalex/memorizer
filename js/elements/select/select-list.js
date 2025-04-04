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
      case 'study':
        renderCards('study')
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
  trans.forEach((tr) => {
    $trans.innerHTML += `<option value="${tr.id}">(${tr.id}) ${tr.title}</option>`
  })
}
