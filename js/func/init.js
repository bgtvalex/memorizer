import { getDB, setDB } from './storage.js'
import {renderCards} from '../elements/render-cards.js'
import {demo} from '../db/demo.js'
import { selectList } from '../elements/select/select-list.js'
import { getToday } from './func.js'
import { sumCount } from './sum-count.js'

export function init() {
  let db = getDB('memorizer')
  if (!db) {
    setDB('memorizer', demo)
    db = getDB('memorizer')
  }
  // повторения за вчера
  const lastCount = getDB('lastCount')
  if (!lastCount || lastCount == 0) {
    const obj = {
      yesterday: getToday(new Date() - 24*60*60*1000),
      lastCount: sumCount()
    }
    setDB('lastCount', obj)
  }

  if (db.length >= 0) {
    selectList()
    renderCards()
  }
}
