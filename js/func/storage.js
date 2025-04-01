export function setDB(key, bd) {
  localStorage.setItem(key, JSON.stringify(bd))
}

export function getDB(key) {
  const bd = JSON.parse(localStorage.getItem(key))
  return bd
}