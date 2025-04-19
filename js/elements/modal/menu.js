import { showModal } from './modal.js'
import { backupDB, importDB } from '../../func/uploading.js'
import { getInfo } from './get-info.js'
import { getProfile } from './get-profile.js'
import { getJson } from './get-json.js'

export function menu() {
  showModal()
  const $modalContent = document.querySelector('.modal__content')
  $modalContent.innerHTML = `
		<ul class="menu__list">
      <li class="menu__item">
        <div class="menu__h">Данные</div>
      </li>
      <li class="menu__item backup">
        <img class="menu__img" src="img/backup.svg" alt="data" />
        <div class="menu__text">Выгрузить данные</div>
      </li>
      <li class="menu__item import">
        <input type="file" class="menu__file" hidden="true">
        <img class="menu__img" src="img/import.svg" alt="data" />
        <div class="menu__text">Загрузить данные</div>
      </li>
      <li class="menu__item info">
        <img class="menu__img" src="img/info.svg" alt="data" />
        <div class="menu__text">Информация</div>
      </li>
      <li class="menu__item profile">
        <img class="menu__img" src="img/profile.svg" alt="data" />
        <div class="menu__text">Настройки</div>
      </li>
      <li class="menu__item json">
        <img class="menu__img" src="img/json.svg" alt="data" />
        <div class="menu__text">JSON</div>
      </li>
    </ul>
		`

  document.querySelector('.backup').addEventListener('click', backupDB)
  document.querySelector('.import').addEventListener('click', importDB)
  document.querySelector('.info').addEventListener('click', getInfo)
  document.querySelector('.profile').addEventListener('click', getProfile)
  document.querySelector('.json').addEventListener('click', getJson)
}
