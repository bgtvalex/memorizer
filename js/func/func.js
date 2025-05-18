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
export function saveHtmlString(inp) {
  return inp
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&mt;')
    .replaceAll('"', '&quot;')
    .replaceAll('&', '&amp;')
}

export function lineBreak(text) {
  const regex = /\d+/gm
  let text2 = text.replace('/t', '').replace('/n')
  let text3 = text2.replace(regex, `<br/>$&`).slice(5)
  return text3
}

/* РЕДАКТОР */
export function addBreak(){
      let myElement = document.querySelector('.input');
      let startPosition = myElement.selectionStart;
      let endPosition = myElement.selectionEnd;

      let text = myElement.value
      myElement.value = text.slice(0, startPosition) + '<br />' + text.slice(startPosition)
}

export function addStrong(){
      let myElement = document.querySelector('.input');
      let startPosition = myElement.selectionStart;
      let endPosition = myElement.selectionEnd;

      let text = myElement.value
      myElement.value = text.slice(0, startPosition) + '<b>' + text.slice(startPosition, endPosition) + '</b>' + text.slice(endPosition)
}

export function addItalic(){
      let myElement = document.querySelector('.input');
      let startPosition = myElement.selectionStart;
      let endPosition = myElement.selectionEnd;

      let text = myElement.value
      myElement.value = text.slice(0, startPosition) + '<i>' + text.slice(startPosition, endPosition) + '</i>' + text.slice(endPosition)
}

export function addUnderline(){
      let myElement = document.querySelector('.input');
      let startPosition = myElement.selectionStart;
      let endPosition = myElement.selectionEnd;

      let text = myElement.value
      myElement.value = text.slice(0, startPosition) + '<u>' + text.slice(startPosition, endPosition) + '</u>' + text.slice(endPosition)
}


// Сокращенное число
export function siPrefix(num) {
  let x = 0
  
  if (num > 1000000000000){
      x = (num/1000/1000/1000/1000).toFixed(2) + 'T'
  } else if (num > 1000000000){
      x = (num/1000/1000/1000).toFixed(2) + 'G'
  } else if (num > 1000000){
      x = (num/1000/1000).toFixed(2) + 'M'
  } else if (num > 1000) {
      x = (num/1000).toFixed(2) + 'k'
  } else {
      x = num
  }
  return x
}

export function showHide(el){
  console.log('showHide', );
  
  el.classList.toggle('show')
}