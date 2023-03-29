import main_theme from './themes/main_theme.wpp'
import logger from "./mods/logger"
import injector from "./inject/main"

new logger.Logger(logger.LogLevels.init).log('Checking for previous injection, and removing.')
document.getElementById('wpp-script') ? document.getElementById('wpp-script').remove() : 0;
document.getElementById('wpp-style') ? document.getElementById('wpp-style').remove() : 0;

try {
    injector.aio(main_theme, main_theme, 'W++')
} catch(err) {
    new logger.Logger(logger.LogLevels.error).log('ERR WPF-5FN: '+err)
}

new logger.Logger(logger.LogLevels.success).log('Injected W++')
