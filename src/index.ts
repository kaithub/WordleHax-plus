const theme = require('./main_theme.wpp')
import * as injector from "./inject/main.ts"

injector.default.aio(theme, theme, 'W++')

console.log('Wordle++ injected.')