export function iCard(el) {
  console.log(el)
  const $modalContent = document.querySelector('.modal__content')
  $modalContent.innerHTML = `
		<div class="info">
		<h2>Повторения по Эббингаузу.</h2>
			<p>0 круг (до 10) — изучение</p>
			<p>1 круг (до 100) — сразу, 90</p>
			<p>2 круг (до 110) — через неделю, 10</p>
			<p>3 круг (до 120) — через 2 недели, 10</p>
			<p>4 круг (до 130) — через 1 месяц, 10</p>
			<p>5 круг (до 140) — через 2 месяца, 10</p>
			<p>6 круг (до 150) — через 6 месяцев, 10</p>
			<p>7 круг (до 160) — через 1 год, 10</p>
		</div>
	`
}
