import { getDB } from '../../func/storage.js'
import { trans } from '../../db/trans.js'
import { iCard } from './i-card.js'
import { getJsonOneCard } from './get-json.js'
import { showHide } from '../../func/func.js'


export function infoCard(el, id) {
  const bd = getDB('memorizer')
  const card = bd.find((i) => i.id == id)
  const transFull = trans.find((i) => i.id == card.trans)
  el.innerHTML = `
    <div class="info">
      <p><i>место:</i> ${card.place}</p>
      <p><i>перевод:</i> ${transFull.title}</p>
      <p><i>добавлено:</i> ${card.create}</p>
      <p><i>начато:</i> ${card.start}</p>
      <p><i>закончено:</i> ${card.finish}</p>
      <p><i>повторения:</i> ${card.count}</p>
      <p><i>последнее повторение:</i> ${card.lastRemember}</p>
      <p class="round"><i>круг:</i> ${card.round} <sup>${card.roundNextDate ? card.roundNextDate : ''}</sup> <img class="s-info" src="img/info.svg" alt="info"></p>

      <div>${getJsonOneCard(card)}</div>
    </div>
  `
  const sInfo = document.querySelector('.s-info')
  sInfo.addEventListener('click', iCard)
  const preCardJson = document.querySelector('.pre-card-json')
  document.querySelector('.card-json-btn').addEventListener('click', () =>  showHide(preCardJson))
}
