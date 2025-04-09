import { getDB, setDB } from '../../func/storage.js'
import { getToday } from '../../func/func.js'
import { trans } from '../../db/trans.js'
import { replaceAllReturns } from '../../func/func.js'
import { renderCards } from '../render-cards.js'
import { closeModal } from '../modal/modal.js'
import { saveHtmlString } from '../../func/func.js'
import { getStatus } from './../../func/func.js'

export function handleSubmit(e, form) {
  e.preventDefault()

  // перенос данных в объект
  const formData = new FormData(form)
  let obj = {}
  formData.forEach((val, key) => {
    obj[key] = val
  })
  form.reset()
  console.log('formData', obj)

  // находим карту с таким же ID
  const db = getDB('memorizer')
  let card = db.find((i) => i.id == obj.id)

  // формируем объект карты
  const memo = {
    id: Date.now(),
    create: getToday(new Date()),
    start: getToday(obj.start),
    finish: '',
    lastRemember: '',
    text: obj.input,
    place: getPlace(obj),
    book: obj.book,
    chapter: obj.chapter,
    verse: obj.verse,
    count: obj.count,
    status: 'wait',
    trans: obj.trans,
    transFull: trans.find((i) => i.id == obj.trans).title,
  }
  console.log('memo:', memo)

  if (card) {
    card.start = memo.start
    card.book = memo.book
    card.chapter = memo.chapter
    card.verse = memo.verse
    card.place = memo.place
    card.text = memo.text
    card.trans = memo.trans
    card.transFull = memo.transFull
    card.count = memo.count
    card.status = getStatus(card).status
  } else {
    db.push(memo)
  }
  console.log('card:', card)
  setDB('memorizer', db)
  closeModal()
  renderCards()
}

export function getPlace(obj) {
  return `${obj.book} ${obj.chapter}:${obj.verse}`
}
