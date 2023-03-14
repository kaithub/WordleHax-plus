const theme = require('./main_theme.wpp')
import logger from "./mods/logger"
import injector from "./inject/main"

injector.aio(theme, theme, 'W++')

new logger.Logger(logger.LogLevels.success).log('Injected W++')
