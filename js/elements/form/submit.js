import { getDB, setDB } from "../../func/storage.js"
import { getToday } from "../../func/func.js"
import { replaceAllReturns } from '../../func/func.js'
import { renderCards } from "../render-cards.js"
import { closeModal } from "../modal/modal.js"

export function handleSubmit(e, form) {
	console.log('e', e)
	e.preventDefault()
	const formData = new FormData(form)
	let obj = {}
	formData.forEach((val, key) => {
		obj[key] = val
	})
	form.reset()
	console.log(obj)

	const memo = {
		id: Date.now(),
		create: getToday(Date.now()),
		start: '',
		finish: '',
		lastRemember: '',
		text: replaceAllReturns(obj.input),
		place: getPlace(obj),
		book: obj.book,
		chapter: obj.chapter,
		verse: obj.verse,
		count: 0,
		status: 'wait',
		trans: obj.trans,
		transFull: obj.tr,
	}
	const db = getDB('memorizer')
	db.push(memo)
	setDB('memorizer', db)
	closeModal()
	renderCards()
}

export function getPlace(obj) {
	return `${obj.book} ${obj.chapter}:${obj.verse}`
}