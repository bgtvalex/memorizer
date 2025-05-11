import { getDB, setDB } from './storage.js'
import {renderCards} from '../elements/render-cards.js'
import {demo} from '../db/demo.js'
import { selectList } from '../elements/select/select-list.js'
import { getCountToday } from './get-count-today.js'
import { delNaNaNa, roundNextDateMoreLastRemember } from './utils.js'
import { getStatus } from './getStatus.js'


export function init() {
  let db = getDB('memorizer')
  if (!db || db == 'undefined') {
    setDB('memorizer', demo)
    db = getDB('memorizer')
  }
  let profile = getDB('mb-profile')
  if (!profile) {
    const obj = {
      countsPerDay: 50,
      round0: 10, 
      round1: 100,
      round2: 110, // 1w
      round3: 120, // 2w
      round4: 130, // 1m
      round5: 140, // 2m
      round6: 150, // 6m
      round7: 160  // 1y
    }
    setDB('mb-profile', obj)
  }

  // setRound()
  getCountToday()
  delNaNaNa()

  if (db.length >= 0) {
    roundNextDateMoreLastRemember(db)
    db.forEach(item => {
      getStatus(item)
    });
    setDB('memorizer', db)
    selectList()
    renderCards()
  }
}
