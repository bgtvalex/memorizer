import { renderCards } from '../render-cards.js'
import { books } from '../../db/books.js'
import { trans } from '../../db/trans.js'

export function selectList() {
  const $select = document.querySelector('.select-list')

  $select.addEventListener('change', () => {
    renderCards()
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
