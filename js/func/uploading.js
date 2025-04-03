import { closeModal } from '../elements/modal/modal.js'
import { getToday } from './func.js'
import { getDB, setDB } from './storage.js'
import {renderCards} from '../elements/render-cards.js'

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

export function importDB() {
  document.querySelector('.menu__file').click()

  function importJson() {
    document
      .querySelector('.menu__file')
      .addEventListener('change', function (e) {
        let fileJson = this.files[0]
        let reader = new FileReader()
        reader.readAsText(fileJson)
        reader.onload = function () {
          const array = JSON.parse(reader.result)
          importToData(array)
        }
        reader.onerror = function () {
          console.log('error', reader.error)
        }
      })
  }
  importJson()

  function importToData(arr) {
      setDB('memorizer', arr)
      renderCards()
			closeModal()
  }
}
