function setBD(key, bd) {
  localStorage.setItem(key, JSON.stringify(bd))
}

function getBD(key) {
  const bd = JSON.parse(localStorage.getItem(key)) ?? []
  return bd
}