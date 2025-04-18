import { getToday } from "./func.js";
import { getDB, setDB } from "./storage.js";
import { sumCount } from "./sum-count.js";

// подсчёт повторений за сегодня
export function getCountToday() {
	const counts = getDB('counts')
	// если нет counts
  if (!counts) {
    const obj = {
      yesterday: getToday(new Date()),
      countingForYesterday: sumCount()
    }
		
    setDB('counts', obj)
		location.reload()
  }
	if (counts.yesterday == getToday(new Date())) {
		counts.countingForToday = sumCount()
		setDB('counts', counts)
	}
  if (counts.yesterday != getToday(new Date())) {
		counts.yesterday = getToday(new Date())
		counts.countingForYesterday = sumCount()
		counts.countingForToday = sumCount()
		setDB('counts', counts)
	}
	return counts.countingForToday - counts.countingForYesterday
}