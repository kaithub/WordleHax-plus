import logger from "../mods/logger";

export default (cssJSON) => {
    let fullCSS = cssJSON.css
    let newStyle = document.createElement('style')
    newStyle.innerHTML = `/* ${cssJSON.name} by ${cssJSON.author} */\n` + fullCSS;
    newStyle.id = 'whp-style'
    try {
        document.body.appendChild(newStyle)
        new logger.Logger(logger.LogLevels.success).log('CSS injected successfully!')
    } catch (er) {
        new logger.Logger(logger.LogLevels.error).log('ERR WPF-3mY: ' + er)
    }
}