import { getDB, setDB } from './storage.js'
import {renderCards} from '../elements/render-cards.js'
import {demo} from '../db/demo.js'
import { selectList } from '../elements/select/select-list.js'
import { getCountToday } from './get-count-today.js'
import { setRound } from './set-round.js'

export function init() {
  let db = getDB('memorizer')
  if (!db) {
    setDB('memorizer', demo)
    db = getDB('memorizer')
  }

  setRound()
  
  getCountToday()

  if (db.length >= 0) {
    selectList()
    renderCards()
  }
}
