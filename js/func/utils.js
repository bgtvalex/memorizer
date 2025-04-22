import { getDB, setDB } from "./storage.js";

export function delNaNaNa() {
	const db = getDB('memorizer')
	db.forEach(item => {
		if (item.start == 'NaN-NaN-NaN'){
			item.start = ''
		}
		if (item.count == "0") {
			item.count = -1
		}
	});
	setDB('memorizer', db)
}