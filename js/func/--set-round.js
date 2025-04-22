import { getDB, setDB } from "./storage.js"
import { getStatus } from "./getStatus.js"


// устанавливаем круги повторения
export function setRound(){
	const db = getDB('memorizer')
	const profile = getDB('mb-profile')

	db.forEach(item => {
		if (item.count < 10) {
			item.round = 0
		} else if (item.count < profile.round1) {
			item.round = 1
		} else if (item.count < profile.round2) {
			item.round = 2
		} else if (item.count < profile.round3) {
			item.round = 3
		} else if (item.count < profile.round4) {
			item.round = 4
		} else if (item.count < profile.round5) {
			item.round = 5
		} else if (item.count < profile.round6) {
			item.round = 6
		} else if (item.count < profile.round7) {
			item.round = 7
		} else if (item.count == profile.round7) {
			item.round = 'done'
		}
	})
	
  db.forEach(item => getStatus(item))
	setDB('memorizer', db)
}