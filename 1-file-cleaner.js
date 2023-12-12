// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require('fs');
FileContent = ""

setTimeout(() => {
    fs.readFile('randomFile.txt', 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return;
        }else{
            FileContent = data.replace(/\s+/g, ' ');
            fs.writeFile('randomFile.txt',FileContent, 'utf8', (err) => {
                if (err) {
                    console.error(err);
                }
                else{
                    console.log("Content Added")
                    fs.readFile('randomFile.txt', 'utf8', (err, data) => {
                        if (err) {
                            console.error(err);
                            return;
                        }else{
                            console.log(data)
                        }
                        
                    });
                }
                
            });
        }
    });
}, 1000);
