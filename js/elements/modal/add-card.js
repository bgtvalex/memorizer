import { showModal } from '../modal/modal.js'
import { setSelect } from '../select/select-list.js'
import {handleSubmit} from '../form/submit.js'

export function addCard() {
  showModal()
  const $modalContent = document.querySelector('.modal__content')
  $modalContent.innerHTML = `
	<form class="form">
			<div class="books__wrapper">
				<select type="text" name="book" class="book"></select>
				<input
					type="text"
					name="chapter"
					class="chapter"
					placeholder="гл"
					required
					autocomplete="off"
				/>
				<input
					type="text"
					name="verse"
					class="verse"
					placeholder="ст"
					required
					autocomplete="off"
				/>
				<select type="text" name="trans" class="trans"></select>
			</div>
			<textarea
				name="input"
				class="input"
				wrap="hard"
				required
			></textarea>
			<input type="submit" class="btn add" value="Добавить" />
		</form>`

  const $book = document.querySelector('.book')
  const $trans = document.querySelector('.trans')
  setSelect($book, $trans)

	const $form = document.querySelector('.form')
	console.log('form: ', $form)
	$form.addEventListener('submit', (e) => {handleSubmit(e, $form)})
}
