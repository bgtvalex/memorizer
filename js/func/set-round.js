import { getDB, setDB } from "./storage.js"
import { getStatus } from "./getStatus.js"


// устанавливаем круги повторения
export function setRound(){
	const db = getDB('memorizer')
	const profile = getDB('mb-profile')
	console.log('profile:', profile)
	db.forEach(item => {
		if (item.count >= profile.round7) {
			item.round = 'done'
		}
		if (item.count < profile.round7) {
			item.round = 7
		}
		if (item.count < profile.round6) {
			item.round = 6
		}
		if (item.count < profile.round5) {
			item.round = 5
		}
		if (item.count < profile.round4) {
			item.round = 4
		}
		if (item.count < profile.round3) {
			item.round = 3
		}
		if (item.count < profile.round2) {
			item.round = 2
		}
		if (item.count < profile.round1) {
			item.round = 1
		}
		if (item.count < 10) {
			item.round = 0
		}
	})
	
  db.forEach(item => getStatus(item))
	setDB('memorizer', db)
}