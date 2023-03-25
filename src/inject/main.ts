import logger from "../mods/logger";
import { getFElement } from "../mods/ModGlobal";
import removeStatsShare from "../mods/removeStatsShare";
import trackerRemoval from "../mods/trackerRemoval";
import cssInjector from "./cssInjector";
import jsInjector from "./jsInjector";

export default {
    css: cssInjector,
    js: jsInjector,
    aio: function (css, js, wpt) {
        // is user on the page yet
        if(document.getElementsByClassName('Welcome-module_title__uhLqe')[1]) {
            alert('Press Continue, then inject.')
            throw new Error('Can\'t inject when game hasn\'t been initialized yet.')
        }

        new logger.Logger(logger.LogLevels.init).log('Removing ads, trackers & pre-inject initialization.')
        document.getElementById('top') ? document.getElementById('top').remove() : 0;
        trackerRemoval();
        document.title = 'Wordle - Modded w/ W++'
        document.getElementById('settings-button').onclick = () => {
            setTimeout(() => {
                getFElement('Modal-module_heading__u2uxI').innerHTML = 'w++ & wordle settings'
                let g = document.createElement('h1')
                g.className = 'Modal-module_heading__u2uxI'
                g.innerText = 'using w++ v1.1.0'
                let g1 = document.createElement('h1')
                g1.className = 'Modal-module_heading__u2uxI'
                g1.innerText = `${js.name} by ${js.author}`
                getFElement('Modal-module_content__TrPIX').appendChild(g)
                getFElement('Modal-module_content__TrPIX').appendChild(g1)
            }, 20)
        }
        document.getElementById('help-button').onclick = () => {
            setTimeout(() => {
                getFElement('Modal-module_heading__u2uxI').innerHTML = 'Welcome to W++!'
                getFElement('Help-module_subheading__mbRG9').innerHTML = "<p>The new and easiest way to mod & theme Wordle.</p><p>You can edit this message however you want in <span style='background-color:#c4ce37'>src/inject/main.ts</span> then RRR (recompile, refresh, reinject).</p><p>To make it easier, here's a refresh button. <button class='Key-module_key__kchQI' type='button' onclick='window.location.replace(window.location.href)'>Go</button><h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Wanna edit the theme?</h1><p>Editing the theme is as easy as changing a few lines of CSS in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span><h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Have fun!</h1>"
                getFElement('Help-module_examples__W3VXL').remove()
                getFElement('Help-module_statsLogin__HkQec').remove()
                getFElement('Help-module_instructions__uXsG6').remove()
                getFElement('Help-module_reminderSignUp__oQ42D').remove()
            }, 20)
        }
        document.getElementById('statistics-button').onclick = () => {
            setTimeout(() => {
                removeStatsShare();
            }, 20);
        }
        document.getElementById('settings-button').click()
        document.getElementById('AppHeader-module_navButton__nKv2h').remove()

        if (!getFElement('Settings-module_footnote__TOUR0')) {
            throw new Error('Auto-inject failed! Open the settings menu, then re-inject.')
        }
        new logger.Logger(logger.LogLevels.init).log('Injecting CSS & JS')
        cssInjector(css)
        jsInjector(js, wpt)
        document.getElementById('help-button').click()
        document.getElementById('help-button').remove()
    }
}

