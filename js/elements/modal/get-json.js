import { getDB } from '../../func/storage.js'
import { closeModal } from './modal.js'


export function getJson() {
	closeModal()
	const el = document.querySelector('.cards')
	el.innerHTML = ''
	const db = getDB('memorizer')
	const json = JSON.stringify(db, null, 2)
	console.log(json)
	
	el.innerHTML = `
		<div class="info json">
			<h2>Cards</h2>
			<pre>${json}</pre>
		</div>
	`

	/*
	const $info = document.createElement('div')
	db.forEach(item => {
		$info.classList.add('info')
		$info.classList.add('json')
		const p = document.createElement('p')
		p.append(JSON.stringify(item, null, 1))
		$info.append(p)
	})
	el.append($info)
	*/
}
