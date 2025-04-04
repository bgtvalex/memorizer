import { books } from '../db/books.js'
import { trans } from '../db/trans.js'

// data format: 2025-02-29
export function getToday(today) {
  const date = new Date(today)
  const y = date.getFullYear(today)
  const m = addZero(date.getMonth(today) + 1)
  const d = addZero(date.getDate(today))
  return `${y}-${m}-${d}`
}

// add zero
export function addZero(t) {
  t = t.toString()
  if (t.length == 1) return '0' + t
  return t
}

// сохранение всех переносов
export function replaceAllReturns(inText) {
  let outText = inText
  while (outText.indexOf('\n') >= 0) {
    outText = outText.replace('\n', '<br/>')
  }
  return outText
}

// замена тегов спец-символами (безопасный ввод)

export function saveHtmlString (inp) {
  return inp
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&mt;')
    .replaceAll('"', '&quot;')
    .replaceAll('&', '&amp;')
}
