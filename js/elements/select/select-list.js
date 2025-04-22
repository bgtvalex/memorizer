import { renderCards } from '../render-cards.js'
import { books, apocr } from '../../db/books.js'
import { trans } from '../../db/trans.js'
import { getDB } from '../../func/storage.js'

export function selectList() {
  const $select = document.querySelector('.select-list')

  $select.addEventListener('change', () => {
    renderCards()
  })
}

// заполнение select
export function setSelect($book, $trans) {
  const apocrypha = getDB('mb-profile').apocrypha
  
  if (apocrypha) {
    apocr.forEach((book) => {
      $book.innerHTML += `<option value="${book}">${book}</option>`
    })
  } else {
    books.forEach((book) => {
      $book.innerHTML += `<option value="${book}">${book}</option>`
    })
  }
  
  trans.forEach((tr) => {
    $trans.innerHTML += `<option value="${tr.id}">(${tr.id}) ${tr.title}</option>`
  })
}
