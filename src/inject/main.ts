import logger from "../mods/logger";
import trackerRemoval from "../mods/trackerRemoval";

const cssInjector = require("./cssInjector");
const jsInjector = require("./jsInjector");

export default {
    css: cssInjector,
    js: jsInjector,
    aio: function (css, js, wpt) {
        new logger.Logger(logger.LogLevels.init).log('Removing ads, trackers')
        document.getElementById('top').remove()
        trackerRemoval();
        new logger.Logger(logger.LogLevels.init).log('Adding cool things')
        document.title = 'Wordle - Modded w/ W++'
        new logger.Logger(logger.LogLevels.init).log('Auto-inject starting')
        document.getElementById('settings-button').onclick = () => {
            setTimeout(() => {
                document.getElementsByClassName('Modal-module_heading__u2uxI')[0].innerText = "w++ & wordle settings"
                let g = document.createElement('h1')
                g.className = 'Modal-module_heading__u2uxI'
                g.innerText = 'using w++ v1.0'
                let g1 = document.createElement('h1')
                g1.className = 'Modal-module_heading__u2uxI'
                g1.innerText = `${js.name} by ${js.author}`
                document.getElementsByClassName('Modal-module_content__TrPIX')[0].appendChild(g)
                document.getElementsByClassName('Modal-module_content__TrPIX')[0].appendChild(g1)
            }, 50)

        }
        document.getElementById('settings-button').click()

        if (!document.getElementsByClassName('Settings-module_footnote__TOUR0')[0]) {
            throw new Error('Auto-inject failed! Open the settings menu, then re-inject.')
        }
        new logger.Logger(logger.LogLevels.init).log('Injecting CSS & JS')
        cssInjector(css)
        jsInjector(js, wpt)
    }
}

