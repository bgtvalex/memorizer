import { getDB, setDB } from './storage.js'
import {selectList} from '../elements/select/select-list.js'
import {renderCards} from '../elements/render-cards.js'
import {demo} from '../db/demo.js'

export function init() {
  let bd = getDB('memorizer')
  if (!bd) {
    setDB('memorizer', demo)
    bd = getDB('memorizer')
  }

  if (bd.length >= 0) {
    selectList()
    renderCards('active')
  }
}
