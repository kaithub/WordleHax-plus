import { WPPGlobal } from "../WPPGlobal";

export default `
<p>The new and easiest way to mod & theme Wordle.</p>
<p>You can edit this message however you want in <span style='background-color:#c4ce37'>src/inject/welcome.ts</span> then RRR (rebuild, refresh, reinject).</p>
<p>To make it easier, here's a refresh button. <button class='Key-module_key__kchQI' type='button' onclick='alert('Warning: You will need to reinject W++.'); window.location.replace(window.location.href)'>Go</button></p>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Wanna edit the theme?</h1>
<p>Editing the theme is as easy as changing a few lines of CSS in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Also..</h1>
<p>The RAL (Remove Absent Letters) challenge is enabled by default. Turn it off in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span>!
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Cool dev info...</h1>
<p>w_bkb = ${WPPGlobal.BelowKeyboard}</p>
<p>w_g[i] = ${WPPGlobal.Tile}</p>
<p>w_header = ${WPPGlobal.Header}</p>
<p>Version = ${WPPGlobal.Version}</p>
<p>Is silent = ${WPPGlobal.IsSilent}</p>
<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Have fun!</h1>`