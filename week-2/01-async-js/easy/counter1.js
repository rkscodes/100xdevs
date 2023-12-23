function counter() {
	let count = 0;

	function incrementLog() {
		console.log(count++)
	}
	setInterval(incrementLog, 1000);
}
counter()