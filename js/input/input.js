/* todo
 - переносы строк в text
*/

const $form = document.querySelector('.form')
const $book = document.querySelector('.book')
const $trans = document.querySelector('.trans')

setSelect($book, $trans)

$form.addEventListener('submit', (e) => {
  handleSubmit(e, $form)
})
