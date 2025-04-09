import { getDB, setDB } from '../../func/storage.js'
import { trans } from '../../db/trans.js'
import { setSelect } from '../select/select-list.js'
import { handleSubmit } from '../form/submit.js'

export function editCard(el, id) {
  let bd = getDB('memorizer')
  const card = bd.find((i) => i.id == id)
  const fullTrans = trans.find((i) => i.id == card.trans)
  el.innerHTML = `
  <div class="info">
    <div class="wrapper">
          <form class="modal__form">
              <input
                value="${card.id}"
                type="number"
                name="id"
                class="id"
                hidden="true"
                autocomplete="off"
              />
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
              name="input"
              class="input"
              required
            >${card.text}</textarea>
            <label class="start__label" for="start">Старт:
              <input name="start" type="date" class="start" value="${card.start}">
            </label>
            <label class="count__label" for="count">Повторения:
              <input name="count" type="text" class="count" value="${card.count}">
            </label>
            
            <input type="submit" class="btn add" value="Изменить" />
          </form>
        </div>
  </div>`

  const $modalBook = document.querySelector('.modal__book')
  const $modalTran = document.querySelector('.modal__trans')
  const $modalForm = document.querySelector('.modal__form')
  setSelect($modalBook, $modalTran)
  

  const $form = document.querySelector('.modal__form')
  $form.addEventListener('submit', (e) => {
    handleSubmit(e, $form)
  })
}
