import { getToday } from "./func.js";
import { getDB, setDB } from "./storage.js";
import { sumCount } from "./sum-count.js";

export function getCountToday() {
	const counts = getDB('lastCount')
	
  if (counts.yesterday != getToday(new Date())) {
		counts.yesterday = getToday(new Date())
		counts.lastCount = sumCount()
		setDB('lastCount', counts)
	}
	if (counts.yesterday == getToday(new Date())) {
		counts.todayCount = sumCount()
		setDB('lastCount', counts)
	}
	return counts.todayCount - counts.lastCount
}