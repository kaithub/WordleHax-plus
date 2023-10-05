import main_theme from './themes/main_theme.wpp'
import logger from "./mods/logger"
import injector from "./inject/main"

try {
    injector.aio(main_theme, main_theme, 'WH+')
} catch(err) {
    new logger.Logger(logger.LogLevels.error).log('ERR WPF-5fN: '+err)
}

new logger.Logger(logger.LogLevels.success).log('Injected WH+')
