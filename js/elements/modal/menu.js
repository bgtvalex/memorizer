import { showModal } from './modal.js'
import { backupDB, importDB } from '../../func/uploading.js'
import { getInfo } from '../../func/get-info.js'

export function menu() {
  showModal()
  const $modalContent = document.querySelector('.modal__content')
  $modalContent.innerHTML = `
		<ul class="menu__list">
      <li class="menu__item">
        <div class="menu__h">Данные</div>
      </li>
      <li class="menu__item backup">
        <img class="menu__img" src="img/backup.png" alt="data" />
        <div class="menu__text">Выгрузить данные</div>
      </li>
      <li class="menu__item import">
        <input type="file" class="menu__file" hidden="true">
        <img class="menu__img" src="img/import.png" alt="data" />
        <div class="menu__text">Загрузить данные</div>
      </li>
      <li class="menu__item info">
        <img class="menu__img" src="img/info-white.png" alt="data" />
        <div class="menu__text">Информация</div>
      </li>
    </ul>
		`

  document.querySelector('.backup').addEventListener('click', backupDB)
  document.querySelector('.import').addEventListener('click', importDB)
  document.querySelector('.info').addEventListener('click', getInfo)
}
