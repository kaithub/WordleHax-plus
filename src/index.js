const theme = require('./main_theme.wpp')
const injector = require('./inject/main')

injector.aio(theme, theme, 'W++')

console.log('Wordle++ injected.')