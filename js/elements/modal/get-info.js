import { getDB } from '../../func/storage.js'
import { siPrefix } from '../../func/func.js'
import { sumCount } from '../../func/sum-count.js'
import { getCountToday } from '../../func/get-count-today.js'

export function getInfo() {
  const el = document.querySelector('.modal__content')
  const db = getDB('memorizer')
  const counts = getDB('mb-counts')
  console.log('counts:', counts);
  
  const cards = db.length
  const norm = 50
  el.innerHTML = `
    <div class="info">
      <h3>Информация</h3>
      <p>Карточки:</p>
      <p><i>число карточек:</i> ${cards}</p>
      <p><i>ожидают:</i> ${filterStatus('wait').length} </p>
      <p><i>учу:</i> ${filterStatus('study').length}</p>
      <p><i>повторяю:</i> ${filterStatus('active').length}</p>
      <p><i>в процессе:</i> ${filterStatus('in process').length}</p>
      <p><i>выучено:</i> ${filterStatus('done').length}</p>
      <p><i>повторения:</i> ${siPrefix(sumCount())}</p>
      <p><i>сегодня:</i> ${getCountToday()} <sup>${(getCountToday()/norm*100).toFixed()}%</sup></p>
      <p><i>сег:</i> ${counts.countingForToday}</p>
      <p><i>вчера:</i> ${counts.countingForYesterday}</p><br>

      <p>Круги:</p>
      <p><i>Круг 0:</i> ${filterRounds(0).length}</p>
      <p><i>Круг 1:</i> ${filterRounds(1).length}</p>
      <p><i>Круг 2:</i> ${filterRounds(2).length}</p>
      <p><i>Круг 3:</i> ${filterRounds(3).length}</p>
      <p><i>Круг 4:</i> ${filterRounds(4).length}</p>
      <p><i>Круг 5:</i> ${filterRounds(5).length}</p>
      <p><i>Круг 6:</i> ${filterRounds(6).length}</p>
      <p><i>Круг 7:</i> ${filterRounds(7).length}</p>

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
  function filterRounds(round) {
    const arr = []
    for (let item of db) {
      if (item.round == round) {
        arr.push(item)
      }
    }
    return arr
  }
}
