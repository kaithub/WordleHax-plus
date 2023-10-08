import main_theme from './themes/main_theme.whp'
import logger from "./mods/logger"
import injector from "./inject/main"

// try {
    injector.aio(main_theme, main_theme, 'WH+')
    new logger.Logger(logger.LogLevels.success).log('Injected WH+')
/* } catch(err) {
    new logger.Logger(logger.LogLevels.error).log('ERR WPF-5fN: '+err)
} */