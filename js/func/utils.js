import { getDB, setDB } from './storage.js'

export function delNaNaNa() {
  const db = getDB('memorizer')
  db.forEach((item) => {
    if (item.start == 'NaN-NaN-NaN') {
      item.start = ''
    }
    if (item.count == '0') {
      item.count = -1
    }
  })
  setDB('memorizer', db)
}

export function roundNextDateMoreLastRemember(db) {
  db.forEach((item) => {
    const roundNextDate = new Date(item.roundNextDate).getTime()
    const lastRemember = new Date(item.lastRemember).getTime()
    if (roundNextDate > lastRemember) {
      item.roundNextDate = item.lastRemember
    }
  })
	setDB('memorizer', db)
}
