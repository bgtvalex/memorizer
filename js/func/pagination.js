// import { renderCards } from "../elements/render-cards.js";

export function pagination(db, page = 1) {
	// console.log('db', db);
	let cardCount = 10

	// console.log('bottom', document.documentElement.getBoundingClientRect().bottom);
	updatePagination(db, page)
	

	const firstCardIndex = cardCount * page - cardCount
	const lastCardIndex = firstCardIndex + cardCount
	const cardsOnPage = db.slice(firstCardIndex, lastCardIndex)
	// console.log(page, firstCardIndex, lastCardIndex);
	
	return cardsOnPage
}

export function updatePagination(db, page) {
	window.addEventListener('scroll', handleScroll)
	function handleScroll(){
		// console.log('bottom', document.documentElement.getBoundingClientRect().bottom);
		const toBottom = document.documentElement.getBoundingClientRect().bottom
		// if (toBottom < page * -1500) {
		// 	page++
		// 	console.log('page', page);
			
		// 	pagination(db, page)
		// }
	}
}