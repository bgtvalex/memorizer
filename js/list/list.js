/*
todo:
- status: done, finish: date
*/

let $cards = document.querySelector('.cards')
const $select = document.querySelector('.select-list')

$select.addEventListener('change', () => {
  switch ($select.value) {
    case 'wait':
      renderList('wait')
      break
    case 'done':
      renderList('done')
      break
    case 'all':
      renderList('all')
      break
    default:
      renderList('active')
      break
  }
})

renderList('active')

function renderList(status) {
  let bd = getBD('memorizer')
  $cards.innerHTML = ''
  if (status !== 'all') {
    bd = bd.filter((item) => item.status == status)
  }
  if (bd.length == 0) {
    $cards.innerHTML = '<h2>Список пуст.</h2>'
  }
  bd.forEach((item) => {
    let cl = ''
    if (item.status == 'wait') {
      cl = 'wait'
    }
    if (item.status == 'active') {
      cl = 'active'
    }
    if (item.status == 'done') {
      cl = 'done'
    }
    $cards.innerHTML += `
        <div class="card ${cl}">
				<div class="card__id">${item.id}</div>
					<div class="card__title">
						<div class="card__place">${item.place} <small>(${item.trans})</small></div>
						<div class="card__status">${item.status}</div>
					</div>
          
          <div class="card__text">${item.text}</div>
          <div class="card__info">
						<div class="card__date">
							<div class="card__start">${item.start}</div>-
							<div class="card__last-remember">${item.finish}</div>
							<div class="card__last-remember">[${item.lastRemember}]</div>
						</div>
						<div class="card__counter">
							<div class="card__count">${item.count}</div>
						</div>
          </div>
        </div>`
  })
  addListeners()
}

function addListeners() {
  let bd = getBD('memorizer')
  const cards = document.querySelectorAll('.card')

  for (let card of cards) {
    card.addEventListener('click', (e) => {
      const id = e.target
        .closest('.card')
        .querySelector('.card__id').textContent
      const item = bd.find((item) => item.id == id)

      item.count++
      if (item.count > 0 && item.count < 100) {
        item.status = 'active'
        item.start = getToday(Date.now())
      }
      if (item.count >= 100) {
        item.status = 'done'
        item.finish = getToday(Date.now())
      }
      item.lastRemember = getToday(Date.now())

      setBD('memorizer', bd)
      renderList('active')
    })

    // долгое нажатие
    card.addEventListener('touchstart', cardLongPress)
    card.addEventListener('mousedown', cardLongPress)

    function cardLongPress(e) {
      handleMouseDown(showModal)
      const id = e.target
        .closest('.card')
        .querySelector('.card__id').textContent
      const $modalContent = document.querySelector('.modal__content')
      modalCard($modalContent)
      const $info = $modalContent.querySelector('.modal__info')
      const $edit = $modalContent.querySelector('.modal__edit')
      const $del = $modalContent.querySelector('.modal__del')
      $info.addEventListener('click', () => {
        infoCard($modalContent, id)
      })
      $info.addEventListener('touchstart', () => {
        infoCard($modalContent, id)
      })
      $del.addEventListener('click', () => {
        delCard(id)
      })
      $del.addEventListener('touchstart', () => {
        delCard(id)
      })
      $edit.addEventListener('click', () => {
        editCard($modalContent, id)
      })
      $edit.addEventListener('touchstart', () => {
        editCard($modalContent, id)
      })
    }

    card.addEventListener('mouseup', handleMouseUp)
    card.addEventListener('touchend', handleOnTouchEnd)
  }
}

// function counter(item) {}

// кнопка закрытия модального окна
document.querySelector('.modal__close').addEventListener('click', closeModal)
// document.querySelector('.modal').addEventListener('click', closeModal)

function infoCard(el, id) {
  const bd = getBD('memorizer')
  const card = bd.find((i) => i.id == id)
  alert(card.place)
  const transFull = trans.find((i) => i.id == card.trans)
  el.innerHTML = `
    <div class="info">
      <p><i>место:</i> ${card.place}</p>
      <p><i>перевод:</i> ${transFull.title}</p>
      <p><i>создано:</i> ${card.create}</p>
      <p><i>начато:</i> ${card.start}</p>
      <p><i>закончено:</i> ${card.finish}</p>
      <p><i>повторения:</i> ${card.count}</p>
      <p><i>последнее повторение:</i> ${card.lastRemember}</p>
    </div>
  `
}

function delCard(id) {
  let bd = getBD('memorizer')
  const place = bd.find((i) => i.id == id)
  const allow = confirm(`Удалить карточку ${place.place}`)
  if (allow) {
    closeModal()
    bd = bd.filter((i) => i.id != id)
    console.log(bd)
    setBD('memorizer', bd)
    console.log($select.options[$select.selectedIndex].text)
    renderList($select.value)
  }
}

function editCard(el, id) {
  let bd = getBD('memorizer')
  const card = bd.find((i) => i.id == id)
  alert(card.place)
  const fullTrans = trans.find((i) => i.id == card.trans)
  el.innerHTML = `
  <div class="info">
    <div class="wrapper">
          <form class="modal__form">
            <div class="modal__books__wrapper">
              <select type="text" name="book" class="modal__book">
                <option value="${card.book}">${card.book}</option>
              </select>
              <input
                value="${card.chapter}"
                type="text"
                name="chapter"
                class="chapter"
                placeholder="гл"
                required
                autocomplete="off"
              />
              <input
                value="${card.verse}"
                type="text"
                name="verse"
                class="verse"
                placeholder="ст"
                required
                autocomplete="off"
              />
              <select type="text" name="trans" class="modal__trans">
                <option value="${card.trans}">${fullTrans.title}</option>
              </select>
            </div>
            <textarea
              value="${card.text}"
              name="input"
              class="input"
              required
            ></textarea>
            <input type="submit" class="btn add" value="+" />
          </form>
        </div>
  </div>`

  $modalBook = document.querySelector('.modal__book')
  $modalTran = document.querySelector('.modal__trans')
  $modalForm = document.querySelector('.modal__form')
  setSelect($modalBook, $modalTran)
  $modalForm.addEventListener('submit', (e) => {
    renderList($select.value)
    console.log('close')
    handleSubmit(e, $modalForm)
    closeModal()
  })
}
