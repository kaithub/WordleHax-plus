let fs = require('fs');
const { minify } = require('terser');
let pkg = require('../package.json');

a()

async function a() {
    let cb = fs.readFileSync(`./dist/tsc/built-js-${pkg.version}`).toString()
    cb = await minify(cb)
    fs.writeFileSync(`./dist/WordlePlusPlus-v${pkg.version}.js`, 'javascript:' + cb.code, 'utf8');
}

console.log('[W++ Build] Build complete')