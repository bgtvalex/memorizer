import { getDB } from '../../func/storage.js'
import { closeModal } from './modal.js'

// cards
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
// card
export function getJsonOneCard(card) {
	const json = JSON.stringify(card, null, 2)
	return `
		<div class="info json-y card-json">
			<b class="btn card-json-btn">Card JSON:</b>
			<pre class="pre-card-json">${json}</pre>
		</div>
	`
}
// options
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
