// data format: 2025-02-29
function getToday(today) {
  const date = new Date(today)
  const y = date.getFullYear(today)
  const m = addZero(date.getMonth(today))
  const d = addZero(date.getDate(today))
  return `${y}-${m}-${d}`
}

// add zero
function addZero(t) {
  t = t.toString()
  if (t.length == 1) return '0' + t
  return t
}

// заполнение select
function setSelect($book, $trans) {
  books.forEach((book) => {
    $book.innerHTML += `<option value="${book}">${book}</option>`
  })
  trans.forEach((book) => {
    $trans.innerHTML += `<option value="${book.id}">${book.title}</option>`
  })
}

// долгое нажатие и исполнение функции
let timer_id = 0
function handleMouseDown(func) {
  timer_id = setTimeout(() => {
    func()
  }, 1000)
}
function handleMouseUp() {
  clearTimeout(timer_id)
}
function handleOnTouchStart(func) {
  timer_id = setTimeout(() => {
    func()
  }, 1000)
}
function handleOnTouchEnd() {
  clearTimeout(timer_id)
}

// Открытие / закрытие модального окна
function showModal() {
  document.querySelector('.modal').classList.add('show')
}
function closeModal() {
  document.querySelector('.modal').classList.remove('show')
}

// Наполнение модального окна

// card
function modalCard(content) {
  content.innerHTML = `
    <img src="img/edit-blue.png" class="modal__icon modal__edit" />
    <img src="img/del-red.png" class="modal__icon modal__del" />
    <img src="img/info-blue.png" class="modal__icon modal__info" />
  `
}

function handleSubmit(e, form) {
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
  const db = getBD('memorizer')
  db.push(memo)
  setBD('memorizer', db)
}

function getPlace() {
  return `${obj.book} ${obj.chapter}:${obj.verse}`
}

// сохранение всех переносов
function replaceAllReturns(inText) {
  let outText = inText
  while (outText.indexOf('\n') >= 0) {
    outText = outText.replace('\n', '<br/>')
  }
  return outText
}
