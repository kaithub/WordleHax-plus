import { WHPGlobal } from "../WHPGlobal";

export default `
<p>The new and easiest way to mod & theme Wordle.</p>
<p>You can edit this message however you want in <span style='background-color:#c4ce37'>src/inject/welcome.ts</span> then RRR (rebuild, refresh, reinject).</p>
<p>Click this button to restart the wordle, you need to refresh and reinject after using this. (To try the wordle again)<button class='Key-module_key__kchQI' type='button' onclick='localStorage.removeItem("nyt-wordle-moogle/ANON");'>Restart</button></p>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Wanna edit the theme?</h1>
<p>Editing the theme is as easy as changing a few lines of CSS in <span style='background-color:#c4ce37'>src/themes/main_theme.whp.ts</span>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Also..</h1>
<p>The RAL (Remove Absent Letters) challenge is enabled by default. Turn it off in <span style='background-color:#c4ce37'>src/themes/main_theme.whp.ts</span>!
<div id="_sd_cdi">
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Cool dev info...</h1>
<p>w_bkb = ${WHPGlobal.BelowKeyboard}</p>
<p>w_g[i] = ${WHPGlobal.Tile}</p>
<p>w_header = ${WHPGlobal.Header}</p>
<p>Version = ${WHPGlobal.Version}</p>
<p>Is silent = ${WHPGlobal.IsSilent}</p>
</div>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Have fun!</h1>`