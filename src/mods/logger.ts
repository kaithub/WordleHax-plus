import { WHPGlobal } from "../WHPGlobal";

enum LogLevels {
    log = 'Log',
    error = 'Error',
    warning = 'Warning',
    success = 'Success',
    init = 'Initialization'
}
class Logger {
    level: LogLevels;
    module: string;
    constructor(level: LogLevels = LogLevels.log, module: string = 'WH+') {
        this.level = level;
        this.module = module;
    }
    public log(message: string) {
        if (typeof WHPGlobal.IsSilent === "number") return;
        console.log(`[${this.module} ${this.level}] ` + message)
    }
}
export default { Logger, LogLevels }