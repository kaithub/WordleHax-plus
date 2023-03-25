import logger from "../mods/logger";
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
        document.getElementById('top').remove()
        trackerRemoval();
        document.title = 'Wordle - Modded w/ W++'
        document.getElementById('settings-button').onclick = () => {
            setTimeout(() => {
                document.getElementsByClassName('Modal-module_heading__u2uxI')[0].innerHTML = 'w++ & wordle settings'
                let g = document.createElement('h1')
                g.className = 'Modal-module_heading__u2uxI'
                g.innerText = 'using w++ v1.1.0'
                let g1 = document.createElement('h1')
                g1.className = 'Modal-module_heading__u2uxI'
                g1.innerText = `${js.name} by ${js.author}`
                document.getElementsByClassName('Modal-module_content__TrPIX')[0].appendChild(g)
                document.getElementsByClassName('Modal-module_content__TrPIX')[0].appendChild(g1)
            }, 20)
        }
        document.getElementById('help-button').onclick = () => {
            setTimeout(() => {
                document.getElementsByClassName('Modal-module_heading__u2uxI')[0].innerHTML = 'Welcome to W++!'
                document.getElementsByClassName('Help-module_subheading__mbRG9')[0].innerHTML = "<p>The new and easiest way to mod & theme Wordle.</p><p>You can edit this message however you want in <span style='background-color:#c4ce37'>src/inject/main.ts</span> then RRR (recompile, refresh, reinject).</p><p>To make it easier, here's a refresh button. <button class='Key-module_key__kchQI' type='button' onclick='window.location.replace(window.location.href)'>Go</button><h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Wanna edit the theme?</h1><p>Editing the theme is as easy as changing a few lines of CSS in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span><h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Have fun!</h1>"
                document.getElementsByClassName('Help-module_examples__W3VXL')[0].remove()
                document.getElementsByClassName('Help-module_statsLogin__HkQec')[0].remove()
                document.getElementsByClassName('Help-module_instructions__uXsG6')[0].remove()
                document.getElementsByClassName('Help-module_reminderSignUp__oQ42D')[0].remove()
            }, 20)
        }
        document.getElementById('settings-button').click()
        document.getElementById('AppHeader-module_navButton__nKv2h').remove()

        if (!document.getElementsByClassName('Settings-module_footnote__TOUR0')[0]) {
            throw new Error('Auto-inject failed! Open the settings menu, then re-inject.')
        }
        new logger.Logger(logger.LogLevels.init).log('Injecting CSS & JS')
        cssInjector(css)
        jsInjector(js, wpt)
        document.getElementById('help-button').click()
        document.getElementById('help-button').remove()
    }
}

