enum LogLevels {
    log = "Log",
    error = "Error",
    warning = "Warning",
    init = "Initialization"
}
class Logger {
    level: LogLevels;
    constructor(level: LogLevels = LogLevels.log) {
        this.level = level;
    }
    public log(message: string) {
        console.log('[W++ '+this.level+'] '+message)
    }
}
export default { Logger, LogLevels }