
export default (jsJSON, wpt=null) => {
    document.getElementById('wpp-script') ? document.getElementById('wpp-script').remove() : 0;
    let fullJS = jsJSON.js
    fullJS = fullJS.replace(/w_header/g, "document.getElementsByClassName('AppHeader-module_title__EQr6V')[0]")
    fullJS = fullJS.replace(/w_bkb/g, "document.getElementsByClassName('App-module_gameContainer__K_CBh')[0]")
    fullJS = fullJS.replace(/console.log\(/g, "console.log(\"["+jsJSON.name+"] \"+")
    for (let i = 0; i < 30; i++) {
        fullJS = fullJS.replace(new RegExp('w_tile_' + i, 'g'), "document.getElementsByClassName('Tile-module_tile__UWEHN')[" + i + "]")
    }

    let newJS = document.createElement('script')
    newJS.innerHTML = `/* W++ code */ document.getElementsByClassName('AppHeader-module_title__EQr6V')[0].innerHTML = '${wpt ? wpt: '(ERR WPT01)'}'; \n` + fullJS;
    newJS.id = 'wpp-script'

    try {
        document.body.appendChild(newJS)
    } catch (er) {
        console.log('Try opening the settings menu and reinjecting.')
        console.log("JS injection failed! " + er)
    }
}