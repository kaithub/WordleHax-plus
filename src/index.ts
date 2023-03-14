import main_theme from './themes/main_theme.wpp'
import logger from "./mods/logger"
import injector from "./inject/main"

injector.aio(main_theme, main_theme, 'W++')

new logger.Logger(logger.LogLevels.success).log('Injected W++')
