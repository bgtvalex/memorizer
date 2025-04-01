import { getDB, setDB } from '../../func/storage.js'
import { trans } from '../../db/trans.js'

export function infoCard(el, id) {
  const bd = getDB('memorizer')
  const card = bd.find((i) => i.id == id)
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
