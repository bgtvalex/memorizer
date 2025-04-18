import { getToday } from "./func.js";
import { getDB, setDB } from "./storage.js";
import { sumCount } from "./sum-count.js";

// подсчёт повторений за сегодня
export function getCountToday() {
	const counts = getDB('mb-counts')
	// если нет counts
  if (!counts) {
    const obj = {
      yesterday: getToday(new Date()),
      countingForYesterday: sumCount()
    }
		
    setDB('mb-counts', obj)
		location.reload()
  }
	if (counts.yesterday == getToday(new Date())) {
		counts.countingForToday = sumCount()
		setDB('mb-counts', counts)
	}
  if (counts.yesterday != getToday(new Date())) {
		counts.yesterday = getToday(new Date())
		counts.countingForYesterday = sumCount()
		counts.countingForToday = sumCount()
		setDB('mb-counts', counts)
	}
	const oldCounts = () => {
		const arr = ['counts', 'mem-counts', 'mbcounts']
		arr.forEach(key => {
			try {
				localStorage.removeItem(key)
			} catch {
				console.log(`Ключ ${key} не найден.`)
			}
		})
	}
	oldCounts()
	return counts.countingForToday - counts.countingForYesterday
}