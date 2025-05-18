import { getDB } from '../../func/storage.js'
import { closeModal } from './modal.js'


export function getJsonCards() {
	closeModal()
	const el = document.querySelector('.cards')
	el.innerHTML = ''
	const db = getDB('memorizer')
	const json = JSON.stringify(db, null, 2)
	
	el.innerHTML = `
		<div class="info json">
			<h2>Cards</h2>
			<pre>${json}</pre>
		</div>
	`
}


export function getJsonOpt() {
	closeModal()
	const el = document.querySelector('.cards')
	el.innerHTML = ''
	const db = getDB('mb-counts')
	const json = JSON.stringify(db, null, 2)
	
	el.innerHTML = `
		<div class="info json">
			<h2>Cards</h2>
			<pre>${json}</pre>
		</div>
	`
}
