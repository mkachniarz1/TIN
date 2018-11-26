const fs = require('fs');
var path;

process.argv.forEach((val, index, array) => {
    console.log(index + ': ' + val);
    if (index == 2)
        path = val;
});

fs.watch(path, (event, filename) => {
    if (filename) {
        fs.readFile(`${path}/${filename}`, 'utf8', function(err, contents) {
            console.log(contents);
        });
    }
});