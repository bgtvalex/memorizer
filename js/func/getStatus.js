import { getToday } from "./func.js"
import { getDB } from "./storage.js"
const profile = getDB('mb-profile')

export function getStatus(item) {
  if (item.count == 0) {
    item.status = 'wait'
  }
  if (item.count == 1) {
    item.start = getToday(Date.now())
    item.status = 'study'
    item.roundNextDate
  }
  if (item.count > 0 && item.count < profile.round0) {
    item.status = 'study'
  }
  if (item.count >= 10 && item.count <= profile.round1) {
    item.status = 'active'
  }
  if (item.count > profile.round1) {
    item.status = 'in process'
  }
  if (item.count == profile.round0 - 1) {
    item.roundNextDate = getToday(new Date())
    item.round = 1
  }
  if (item.count == profile.round1) {
		item.roundNextDate = getToday(new Date())
		if (item.finish == item.lastRemember) {
			item.roundNextDate = item.finish
			item.finish = ''
		}
    item.status = 'in process'
    item.round = 2
  }
  if (item.count == profile.round2) {
    item.roundNextDate = getToday(new Date())
		if (item.finish == item.lastRemember) {
			item.roundNextDate = item.finish
			item.finish = ''
		}
    item.round = 3
  }
  if (item.count == profile.round3) {
    item.roundNextDate = getToday(new Date())
    item.round = 4
  }
  if (item.count == profile.round4) {
    item.roundNextDate = getToday(new Date())
    item.round = 5
  }
  if (item.count == profile.round5) {
    item.roundNextDate = getToday(new Date())
    item.round = 6
  }
  if (item.count == profile.round6) {
    item.roundNextDate = getToday(new Date())
    item.round = 7
  }
  if (item.count == profile.round7) {
    item.finished = getToday(new Date())
    item.roundNextDate = getToday(new Date())
    item.round = 'done'
  }
  if (item.count >= profile.round1 && item.count < profile.round2 && getDays(item.roundNextDate) >= 7) {
    item.status = 'active'
  }
  if (item.count < profile.round3 && item.count > profile.round4 && getDays(item.roundNextDate) >= 14) {
    item.status = 'active'
  }
  if (item.count < profile.round4 && item.count > profile.round5 && getDays(item.roundNextDate) >= 30) {
    item.status = 'active'
  }
  if (item.count < profile.round5 && item.count > profile.round6 && getDays(item.roundNextDate) >= 60) {
    item.status = 'active'
  }
  if (item.count < profile.round6 && item.count > profile.round7 && getDays(item.roundNextDate) >= 180) {
    item.status = 'active'
  }
  if (item.count < profile.round7 && getDays(item.roundNextDate) >= 360) {
    item.status = 'active'
  }
  
  return item
}
// сколько дней прошло после последнего повторения
export function getDays(lastRemember){
  const now = new Date()
  const lRem = new Date(lastRemember)
  const days = (now - lRem)/24/60/60/1000
  return days
}