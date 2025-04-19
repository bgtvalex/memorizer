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
  let profile = getDB('mb-profile')
  if (!profile) {
    const obj = {
      countsPerDay: 50,
      round0: 10,
      round1: 100,
      round2: 110,
      round3: 120,
      round4: 130,
      round5: 140,
      round6: 150,
      round7: 160
    }
    setDB('mb-profile', obj)
  }

  setRound()
  getCountToday()

  if (db.length >= 0) {
    selectList()
    renderCards()
  }
}
