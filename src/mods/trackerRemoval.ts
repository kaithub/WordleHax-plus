import logger from "./logger"
import { ModGlobal } from "./ModGlobal"

export default function () {
    remTracker(ModGlobal.AMZTracker, 'Amazon')
    remTracker(ModGlobal.GTracker, 'Google')
}
function remTracker(trackerID: string, trackerName: string) {
    delete window[trackerID]
    new logger.Logger(logger.LogLevels.success, "W++ Tracker Removal").log(trackerName + ' tracker removed')
}