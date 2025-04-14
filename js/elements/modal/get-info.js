import { getDB } from '../../func/storage.js'
import { siPrefix } from '../../func/func.js'
import { sumCount } from '../../func/sum-count.js'
import { getCountToday } from '../../func/get-count-today.js'

export function getInfo() {
  const el = document.querySelector('.modal__content')
  const db = getDB('memorizer')
  el.innerHTML = `
    <div class="info">
      <p><i>число карточек:</i> ${db.length}</p>
      <p><i>ожидают:</i> ${filterStatus('wait').length}</p>
      <p><i>учу:</i> ${filterStatus('study').length}</p>
      <p><i>повторяю:</i> ${filterStatus('active').length}</p>
      <p><i>выучено:</i> ${filterStatus('done').length}</p>
      <p><i>повторения:</i> ${siPrefix(sumCount())}</p>
      <p><i>сегодня:</i> ${getCountToday()}</p>
    </div>
  `
  function filterStatus(status) {
    const arr = []
    for (let item of db) {
      if (item.status == status) {
        arr.push(item)
      }
    }
    return arr
  }
}
