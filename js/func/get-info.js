import { getDB } from './storage.js'

export function getInfo() {
  const el = document.querySelector('.modal__content')
  const bd = getDB('memorizer')
  el.innerHTML = `
    <div class="info">
      <p><i>число карточек:</i> ${bd.length}</p>
      <p><i>ожидают:</i> ${filterStatus('wait').length}</p>
      <p><i>учу:</i> ${filterStatus('study').length}</p>
      <p><i>повторяю:</i> ${filterStatus('active').length}</p>
      <p><i>выучено:</i> ${filterStatus('done').length}</p>
      <p><i>повторения:</i> ${sumCount()}</p>
    </div>
  `
  function filterStatus(status) {
    const arr = []
    for (let item of bd) {
      if (item.status == status) {
        arr.push(item)
      }
    }
    return arr
  }
  function sumCount() {
    let sum = 0
    for (let item of bd) {
      sum += parseInt(item.count)
    }
    return sum
  }
}
