import logger from "./logger"

export default function () {
    remTracker('apstag', 'Amazon')
    remTracker('googletag', 'Google')
}
function remTracker(trackerID: string, trackerName: string) {
    delete window[trackerID]
    new logger.Logger(logger.LogLevels.success, "W++ Tracker Removal").log(trackerName + ' tracker removed')
}