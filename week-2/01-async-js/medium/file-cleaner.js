// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs').promises

async function reformat(fileName) {
	try {
		let file = await fs.readFile(fileName, 'utf8');
		dataArr = file.split(' ')
		dataArr = dataArr.filter(val => {
			if (val == '')
				return false
			return true
		})
		console.log(dataArr.join(' '))
		await fs.writeFile(fileName, dataArr.join(' '))
	} catch (err) {
		console.log(err)
	}
}
reformat('test.txt')