import { getDB, setDB } from "./storage.js"
import { getStatus } from "./getStatus.js"

// устанавливаем круги повторения
export function setRound(){
	const db = getDB('memorizer')
	db.forEach(item => {
		if (item.count >= 160) {
			item.round = 'done'
		}
		if (item.count < 160) {
			item.round = 7
		}
		if (item.count < 150) {
			item.round = 6
		}
		if (item.count < 140) {
			item.round = 5
		}
		if (item.count < 130) {
			item.round = 4
		}
		if (item.count < 120) {
			item.round = 3
		}
		if (item.count < 110) {
			item.round = 2
		}
		if (item.count < 100) {
			item.round = 1
		}
		if (item.count < 10) {
			item.round = 0
		}
	})
	
  db.forEach(item => getStatus(item))
	setDB('memorizer', db)
}