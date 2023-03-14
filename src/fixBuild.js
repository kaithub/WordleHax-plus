let fs = require('fs');
let pkg = require('../package.json')
let cb = fs.readFileSync(`./dist/tsc/built-js-${pkg.version}`).toString()
fs.writeFile(`./dist/WordlePlusPlus-v${pkg.version}.js`, 'javascript:'+cb, () => {
    console.log('Build complete')
})