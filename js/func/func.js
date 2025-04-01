import { books } from '../db/books.js'
import { trans } from '../db/trans.js'

// data format: 2025-02-29
export function getToday(today) {
  const date = new Date(today)
  const y = date.getFullYear(today)
  const m = addZero(date.getMonth(today))
  const d = addZero(date.getDate(today))
  return `${y}-${m}-${d}`
}

// add zero
export function addZero(t) {
  t = t.toString()
  if (t.length == 1) return '0' + t
  return t
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

export function handleSubmit(e, form) {
  e.preventDefault()
  const formData = new FormData(form)
  obj = {}
  formData.forEach((val, key) => {
    obj[key] = val
  })
  form.reset()
  console.log(obj)

  const memo = {
    id: Date.now(),
    create: getToday(Date.now()),
    start: '',
    finish: '',
    lastRemember: '',
    text: replaceAllReturns(obj.input),
    place: getPlace(obj),
    book: obj.book,
    chapter: obj.chapter,
    verse: obj.verse,
    count: 0,
    status: 'wait',
    trans: obj.trans,
    transFull: obj.tr,
  }
  const db = getDB('memorizer')
  db.push(memo)
  setDB('memorizer', db)
}

export function getPlace() {
  return `${obj.book} ${obj.chapter}:${obj.verse}`
}

// сохранение всех переносов
export function replaceAllReturns(inText) {
  let outText = inText
  while (outText.indexOf('\n') >= 0) {
    outText = outText.replace('\n', '<br/>')
  }
  return outText
}
