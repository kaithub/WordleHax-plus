export default function () {
    remTracker('apstag', 'Amazon')
    remTracker('googletag', 'Google')
}
function remTracker(trackerID: string, trackerName: string) {
    delete window[trackerID]
    console.log('' + trackerName + ' tracker removed')
}