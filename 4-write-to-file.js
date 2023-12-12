// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require('fs');
const newContent = "Hello Added"

setTimeout(() => {
    fs.writeFile('randomFile.txt', newContent, 'utf8', (err) => {
        if (err) {
            console.error(err);
        }
        console.log("Content Added");
    });
}, 1000);

setTimeout(() => {
    fs.readFile('randomFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }

        console.log(data);
    });
}, 1000);
