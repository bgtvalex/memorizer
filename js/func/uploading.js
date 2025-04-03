import { closeModal } from '../elements/modal/modal.js'
import { getToday } from './func.js'
import { getDB } from './storage.js'

export function backupDB() {
  /* сохранение БД из localStorage на комп */

  	const nameItemStorage = 'memorizer'
    function saveText(text, filename) {
      let a = document.createElement('a')
      a.setAttribute(
        'href',
        'data:text/plain;charset=utf-8,' + encodeURIComponent(text)
      )
      a.setAttribute('download', filename)
      a.click()
    }

    let date = getToday(new Date())

    const obj = getDB(nameItemStorage)
    saveText(JSON.stringify(obj), `${nameItemStorage}-${date}.json`)
		
    closeModal()
}


export function importDB() {}
