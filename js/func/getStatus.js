import { getToday } from "./func.js"

export function getStatus(item) {
  if (item.count == 0) {
    item.status = 'wait'
  }
  if (item.count == 1) {
    item.start = getToday(Date.now())
    item.status = 'study'
    item.roundNextDate
  }
  if (item.count > 0 && item.count < 10) {
    item.status = 'study'
  }
  if (item.count >= 10 && item.count <= 100) {
    item.status = 'active'
  }
  if (item.count > 100) {
    item.status = 'in process'
  }
  if (item.count == 9) {
    item.roundNextDate = getToday(new Date())
    item.round = 1
  }
  if (item.count == 99) {
		item.roundNextDate = getToday(new Date())
		if (item.finish == item.lastRemember) {
			item.roundNextDate = item.finish
			item.finish = ''
		}
    item.status = 'wait'
    item.round = 2
  }
  if (item.count == 109) {
    item.roundNextDate = getToday(new Date())
		if (item.finish == item.lastRemember) {
			item.roundNextDate = item.finish
			item.finish = ''
		}
    item.round = 3
  }
  if (item.count == 119) {
    item.roundNextDate = getToday(new Date())
    item.round = 4
  }
  if (item.count == 129) {
    item.roundNextDate = getToday(new Date())
    item.round = 5
  }
  if (item.count == 139) {
    item.roundNextDate = getToday(new Date())
    item.round = 6
  }
  if (item.count == 149) {
    item.roundNextDate = getToday(new Date())
    item.round = 7
  }
  if (item.count == 159) {
    item.finished = getToday(new Date())
    item.roundNextDate = getToday(new Date())
    item.round = 'done'
  }
  if (item.count >= 100 && item.count < 110 && getDays(item.roundNextDate) >= 7) {
    item.status = 'active'
  }
  if (item.count < 120 && item.count > 130 && getDays(item.roundNextDate) >= 14) {
    item.status = 'active'
  }
  if (item.count < 130 && getDays(item.roundNextDate) >= 30) {
    item.status = 'active'
  }
  if (item.count < 140 && getDays(item.roundNextDate) >= 60) {
    item.status = 'active'
  }
  if (item.count < 150 && getDays(item.roundNextDate) >= 180) {
    item.status = 'active'
  }
  if (item.count < 160 && getDays(item.roundNextDate) >= 360) {
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