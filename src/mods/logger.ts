enum LogLevels {
    log = "Log",
    error = "Error",
    warning = "Warning",
    success = "Success",
    init = "Initialization"
}
class Logger {
    level: LogLevels;
    module: string;
    constructor(level: LogLevels = LogLevels.log, module: string = "W++") {
        this.level = level;
        this.module = module;
    }
    public log(message: string) {
        console.log(`[${this.module} ${this.level}] ` + message)
    }
}
export default { Logger, LogLevels }