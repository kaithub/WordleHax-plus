import main_theme from './themes/main_theme.wpp'
import logger from "./mods/logger"
import injector from "./inject/main"

new logger.Logger(logger.LogLevels.init).log('Checking for previous injection, and removing.')
document.getElementById('wpp-script') ? document.getElementById('wpp-script').remove() : 0;
document.getElementById('wpp-style') ? document.getElementById('wpp-style').remove() : 0;

injector.aio(main_theme, main_theme, 'W++')

new logger.Logger(logger.LogLevels.success).log('Injected W++')
