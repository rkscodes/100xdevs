const fs = require('fs')
let file = fs.readFile("3-read-from-file.md", 'utf8', (error, data) => {
	if (error) {
		console.log("Error Reading the file: Check filename")
		return
	}
	console.log(data)
})

for (let i = 0; i < 10000000000; i++) {
	let count = 0;
	count += i;
}
