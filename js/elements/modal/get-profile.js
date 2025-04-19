import { getDB, setDB } from '../../func/storage.js'
import { closeModal } from './modal.js'

export function getProfile() {
	const el = document.querySelector('.modal__content')
	const profile = getDB('mb-profile')
	el.innerHTML = `
		<div class="info">
		<form class="profile-form">
		<label><i>повторений в день:</i> 
			<input type="text" name="countsPerDay" class="count" value=${profile.countsPerDay} />
		</label>
		<label><i>круг 0:</i>
			<input type="text" name="round0" class="count" value=${profile.round0} />
		</label>
		<label><i>круг 1:</i>
			<input type="text" name="round1" class="count" value=${profile.round1} />
		</label>
		<label><i>круг 2:</i>
			<input type="text" name="round2" class="count" value=${profile.round2} />
		</label>
		<label><i>круг 3:</i>
			<input type="text" name="round3" class="count" value=${profile.round3} />
		</label>
		<label><i>круг 4:</i>
			<input type="text" name="round4" class="count" value=${profile.round4} />
		</label>
		<label><i>круг 5:</i>
			<input type="text" name="round5" class="count" value=${profile.round5} />
		</label>
		<label><i>круг 6:</i>
			<input type="text" name="round6" class="count" value=${profile.round6} />
		</label>
		<label><i>круг 7:</i>
			<input type="text" name="round7" class="count" value=${profile.round7} />
		</label>
		<button type="submit" class="btn">Сохранить</button>
		</form>
		</div>
	`
	 const profileForm = document.querySelector('.profile-form')
	 profileForm.addEventListener('submit', handleProfileFormSubmit)

	 function handleProfileFormSubmit (e) {
		e.preventDefault()
		const formData = new FormData(profileForm)
		let obj = {}
		formData.forEach((val, key) => {
			obj[key] = val
		})
		console.log('obj:', obj)
		setDB('mb-profile', obj)
		closeModal()
	 }
}
