import { getDB } from "../../func/storage.js"
import { getProfile } from "./get-profile.js"

export function iCard(el) {
  console.log(el)
  const $modalContent = document.querySelector('.modal__content')
	const p = getDB('mb-profile')
  $modalContent.innerHTML = `
		<div class="info">
		<h2>Повторения по Эббингаузу.</h2>
			<p>0 круг (до ${p.round0}) — изучение</p>
			<p>1 круг (до ${p.round1}) — сразу</p>
			<p>2 круг (до ${p.round2}) — через неделю</p>
			<p>3 круг (до ${p.round3}) — через 2 недели</p>
			<p>4 круг (до ${p.round4}) — через 1 месяц</p>
			<p>5 круг (до ${p.round5}) — через 2 месяца</p>
			<p>6 круг (до ${p.round6}) — через 6 месяцев</p>
			<p>7 круг (до ${p.round7}) — через 1 год</p>
			<button class="btn edit">
				<img src="img/edit-white.svg" class="edit__ebbing" />
			</button>
		</div>
	`

	document.querySelector('.edit').addEventListener('click', getProfile)
}
