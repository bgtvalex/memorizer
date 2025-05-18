import { getDB } from "./storage.js"

export function sumCount() {
		const db = getDB('memorizer')
    let sum = 0
    for (let item of db) {
      if (item.count != '') {
        sum += parseInt(item.count)
      }
    }
    return sum
  }