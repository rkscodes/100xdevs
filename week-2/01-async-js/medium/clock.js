function clock(ampm) {
	let date = new Date()

	function wrapper() {
		date = new Date(date.getTime() + 1000)
		console.log(date.toLocaleString('en-US', {
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: ampm
		}))
		setTimeout(wrapper, 1000)
	}
	wrapper()
}

clock(false)