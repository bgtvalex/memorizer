import { getDB } from "./storage.js"

export function sumCount() {
		const db = getDB('memorizer')
    let sum = 0
    for (let item of db) {
      sum += parseInt(item.count)
    }
    return sum
  }