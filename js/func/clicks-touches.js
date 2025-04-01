// долгое нажатие и исполнение функции
let timer_id = 0
export function handleMouseDown(func) {
  timer_id = setTimeout(() => {
    func()
  }, 1000)
}
export function handleMouseUp() {
  clearTimeout(timer_id)
}
export function handleOnTouchStart(func) {
  timer_id = setTimeout(() => {
    func()
  }, 1000)
}
export function handleOnTouchEnd() {
  clearTimeout(timer_id)
}