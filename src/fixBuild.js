let fs = require('fs');
let cb = fs.readFileSync('./dist/main.js').toString()
fs.writeFile('./dist/main.js', 'javascript:'+cb, () => {
    console.log('Build complete')
})