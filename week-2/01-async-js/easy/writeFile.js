const fs = require('fs').promises

async function writeFile() {
	try {
		await fs.writeFile("test-file.txt", "This is some data to write")
	} catch (err) {
		console.log("Some error has occured")
	}
}

writeFile()
console.log("see this will print first")
for (let i = 1; i < 10000000000; i++) {
	let count = i;
}