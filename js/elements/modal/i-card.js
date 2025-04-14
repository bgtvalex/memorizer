export function iCard(el) {
	console.log(el)
  const $modalContent = document.querySelector('.modal__content')
  $modalContent.innerHTML = `
		<div class="info">
			<p>0 круг — изучение (10)</p>
			<p>1 круг — сразу (90)</p>
			<p>2 круг — через неделю (10)</p>
			<p>3 круг — через 2 недели (10)</p>
			<p>4 круг — через 1 месяца (10)</p>
			<p>5 круг — через 2 месяца (10)</p>
			<p>6 круг — через 6 месяцев (10)</p>
			<p>7 круг — через 1 год (10)</p>
		</div>
	`
}
