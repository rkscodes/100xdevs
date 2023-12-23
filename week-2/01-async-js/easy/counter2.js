function counter() {
	let count = 0;

	function incrementLog() {
		console.log(count++)
		setTimeout(incrementLog, 1000);
	}
	incrementLog();
}
counter()