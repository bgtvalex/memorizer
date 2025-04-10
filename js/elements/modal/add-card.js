import { showModal } from '../modal/modal.js'
import { setSelect } from '../select/select-list.js'
import {handleSubmit} from '../form/submit.js'
import { addBreak, addStrong, addItalic, addUnderline } from '../../func/func.js'

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
			<div class="buttons-reduction">
				<div class="btn-r btn-break">↵</div>
				<div class="btn-r btn-strong">жирный</div>
				<div class="btn-r btn-italic">курсив</div>
				<div class="btn-r btn-underline">подчеркнуто</div>
    	</div>
			<input name="count" type="text" class="count" value="0" hidden="true">
			<input type="submit" class="btn add" value="Добавить" />
		</form>`

  const $book = document.querySelector('.book')
  const $trans = document.querySelector('.trans')
  setSelect($book, $trans)

	const $form = document.querySelector('.form')
	$form.addEventListener('submit', (e) => {handleSubmit(e, $form)})
	
	// кнопки редактора
	document.querySelector('.btn-break').addEventListener('click', addBreak)
	document.querySelector('.btn-strong').addEventListener('click', addStrong)
	document.querySelector('.btn-italic').addEventListener('click', addItalic)
	document.querySelector('.btn-underline').addEventListener('click', addUnderline)
}
