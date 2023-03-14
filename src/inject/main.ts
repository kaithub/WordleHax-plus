const cssInjector = require("./cssInjector");
const jsInjector = require("./jsInjector");

export default {
    css: cssInjector,
    js: jsInjector,
    aio: function (css, js, wpt) {
        console.log('Initialization: Removing stupid things -ads,trackers')
        
        document.getElementById('top').remove()
        console.log('Initialization: Adding cool things')
        document.title = 'Wordle - Modded w/ W++'
        console.log('Cool things now. Auto-inject init.')
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
        console.log('Next up is CSS & JS injections!')
        cssInjector(css)
        jsInjector(js, wpt)
    }
}

