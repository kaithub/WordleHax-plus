javascript:(()=>{"use strict";var e={76:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WPPGlobal=void 0,function(e){e.IsSilent="",e.Version="1.2.0",e.Header="AppHeader-module_title__EQr6V",e.BelowKeyboard="App-module_gameContainer__K_CBh",e.Tile="Tile-module_tile__UWEHN"}(t.WPPGlobal||(t.WPPGlobal={}))},788:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(763)),a=o(n(560)),r=o(n(760));try{r.default.aio(l.default,l.default,"WH+")}catch(e){new a.default.Logger(a.default.LogLevels.error).log("ERR WPF-5fN: "+e)}new a.default.Logger(a.default.LogLevels.success).log("Injected WH+")},112:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(560));t.default=e=>{let t=e.css,n=document.createElement("style");n.innerHTML=`/* ${e.name} by ${e.author} */\n`+t,n.id="wpp-style";try{document.body.appendChild(n),new l.default.Logger(l.default.LogLevels.success).log("CSS injected successfully!")}catch(e){new l.default.Logger(l.default.LogLevels.error).log("ERR WPF-3mY: "+e)}}},557:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(560)),a=n(76);t.default=(e,t=null)=>{let n=e.js;n=n.replace(/w_header/g,"document.getElementsByClassName('"+a.WPPGlobal.Header+"')[0]"),n=n.replace(/w_bkb/g,"document.getElementsByClassName('"+a.WPPGlobal.BelowKeyboard+"')[0]"),n=n.replace(/console.log\(/g,"console.log('["+e.name+"] '+");for(let e=0;e<30;e++)n=n.replace(new RegExp("w_tile_"+e,"g"),"document.getElementsByClassName('"+a.WPPGlobal.Tile+"')["+e+"]");n=n.replace(/doUseRAL/g,"window._sentryConfig.ralf");let o=document.createElement("script");o.innerHTML=`/* WH+ code */ document.getElementsByClassName('${a.WPPGlobal.Header}')[0].innerHTML = '${t||"(ERR WPT01)"}'; \n`+n,o.id="wpp-script",new l.default.Logger(l.default.LogLevels.init).log("JS injecting...");try{document.body.appendChild(o),new l.default.Logger(l.default.LogLevels.success).log("JS injected!")}catch(e){new l.default.Logger(l.default.LogLevels.error).log("ERR WPF-4MY: "+e)}}},760:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(560)),a=n(556),r=o(n(802)),d=o(n(731)),i=o(n(591)),s=n(76),u=o(n(112)),c=o(n(557)),g=o(n(406));t.default={css:u.default,js:c.default,aio:function(e,t,n){if(document.getElementById("wpp-script")||document.getElementById("wpp-style"))throw new Error("WH+ has been injected already. Cannot continue. ERR WPI-2fY");if(document.getElementsByClassName("Welcome-module_title__uhLqe")[1]&&document.getElementsByClassName("Welcome-module_button__ZG0Zh")[0].click(),new l.default.Logger(l.default.LogLevels.init).log("Removing ads, trackers & pre-inject initialization."),(0,i.default)(),document.title="Wordle - Modded w/ WH+",document.getElementById("settings-button").onclick=()=>{setTimeout((()=>{(0,a.getFElement)("Modal-module_heading__u2uxI").innerHTML="WH+ & wordle settings";let e=document.createElement("h1");e.className="Modal-module_heading__u2uxI",e.innerText="using WH+ v"+s.WPPGlobal.Version;let n=document.createElement("h1");n.className="Modal-module_heading__u2uxI",n.innerText=`${t.name} by ${t.author}`,(0,a.getFElement)("Modal-module_content__TrPIX").appendChild(e),(0,a.getFElement)("Modal-module_content__TrPIX").appendChild(n)}),20)},document.getElementById("help-button").onclick=()=>{setTimeout((()=>{(0,a.getFElement)("Modal-module_heading__u2uxI").innerHTML="Welcome to WH+!",(0,a.getFElement)("Help-module_subheading__mbRG9").innerHTML=g.default,(0,a.getFElement)("Help-module_examples__W3VXL").remove(),(0,a.getFElement)("Help-module_statsLogin__HkQec").remove(),(0,a.getFElement)("Help-module_instructions__uXsG6").remove(),(0,a.getFElement)("Help-module_reminderSignUp__oQ42D").remove(),setTimeout((()=>{document.getElementById("_sd_cdi").remove()}),5e3)}),20)},document.getElementById("statistics-button").onclick=()=>{setTimeout((()=>{(0,d.default)()}),20)},document.getElementById("settings-button").click(),document.getElementById("AppHeader-module_navButton__nKv2h").remove(),!(0,a.getFElement)("Settings-module_footnote__TOUR0"))throw new Error("Auto-inject failed! Open the settings menu, then re-inject.");new l.default.Logger(l.default.LogLevels.init).log("Injecting CSS & JS"),window._sentryConfig={},window._sentryConfig.wppg=s.WPPGlobal,window._sentryConfig.ralf=r.default,(0,u.default)(e),(0,c.default)(t,n),document.getElementById("help-button").click(),setTimeout((()=>{document.getElementsByClassName("Modal-module_modalOverlay__cdZDa")[0].click(),setTimeout((()=>{document.getElementById("top")&&document.getElementById("top").remove(),document.getElementById("help-button").click(),document.getElementById("help-button").remove()}),250)}),1e3)}}},406:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(76);t.default=`\n<p>The new and easiest way to mod & theme Wordle.</p>\n<p>You can edit this message however you want in <span style='background-color:#c4ce37'>src/inject/welcome.ts</span> then RRR (rebuild, refresh, reinject).</p>\n<p>To make it easier, here's a refresh button. <button class='Key-module_key__kchQI' type='button' onclick='alert('Warning: You will need to reinject WH+.'); window.location.replace(window.location.href)'>Go</button></p>\n<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Wanna edit the theme?</h1>\n<p>Editing the theme is as easy as changing a few lines of CSS in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span>\n<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Also..</h1>\n<p>The RAL (Remove Absent Letters) challenge is enabled by default. Turn it off in <span style='background-color:#c4ce37'>src/themes/main_theme.wpp.ts</span>!\n<div id="_sd_cdi">\n<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Cool dev info...</h1>\n<p>w_bkb = ${o.WPPGlobal.BelowKeyboard}</p>\n<p>w_g[i] = ${o.WPPGlobal.Tile}</p>\n<p>w_header = ${o.WPPGlobal.Header}</p>\n<p>Version = ${o.WPPGlobal.Version}</p>\n<p>Is silent = ${o.WPPGlobal.IsSilent}</p>\n</div>\n<h1 class='Modal-module_heading__u2uxI Modal-module_newHeading__Ah45w'>Have fun!</h1>`},556:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getFElement=t.ModGlobal=void 0,function(e){e.Key="Key-module_key__kchQI",e.AMZTracker="apstag",e.GTracker="googletag",e.StatsContainer="Stats-module_ctaContainer__1Krdy",e.BotLink="Stats-module_botLink__Gf9gC"}(t.ModGlobal||(t.ModGlobal={})),t.getFElement=function(e){return document.getElementsByClassName(e)[0]}},560:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(76);var l;!function(e){e.log="Log",e.error="Error",e.warning="Warning",e.success="Success",e.init="Initialization"}(l||(l={}));t.default={Logger:class{constructor(e=l.log,t="WH+"){this.level=e,this.module=t}log(e){"number"!=typeof o.WPPGlobal.IsSilent&&console.log(`[${this.module} ${this.level}] `+e)}},LogLevels:l}},802:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(556);t.default=function(){const e=document.getElementsByClassName(o.ModGlobal.Key);for(let t=0;t<e.length;t++)"absent"==e[t].dataset.state&&(document.onkeydown=n=>{if(n.key==e[t].innerHTML){const e=document.getElementsByClassName(o.ModGlobal.Key);for(let t=0;t<e.length;t++)"←"==e[t].dataset.key&&e[t].click()}},e[t].remove())}},731:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(556);t.default=function(){(0,o.getFElement)(o.ModGlobal.StatsContainer).remove(),(0,o.getFElement)(o.ModGlobal.BotLink).remove()}},591:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const l=o(n(560)),a=n(556);function r(e,t){delete window[e],new l.default.Logger(l.default.LogLevels.success,"WH+ Tracker Removal").log(t+" tracker removed")}t.default=function(){r(a.ModGlobal.AMZTracker,"Amazon"),r(a.ModGlobal.GTracker,"Google")}},763:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"WH+ Starter Theme",author:"WordleHax+ Team",css:"\n    button {\n        transition-duration: 0.25s;\n    }\n    button:hover {\n        transform: scale(1.5);\n    }\n    /* Lets susdeck-ify it */\n    body {\n        background: rgba(255, 0, 89, 1);\n        background: -webkit-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);\n        background: -moz-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);\n        background: -ms-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);\n        background: -o-linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);\n        background: linear-gradient(45deg, rgba(255, 0, 89, 1) 0%, rgba(0, 179, 255, 1) 33%, rgba(255, 0, 89, 1) 66%, rgba(0, 179, 255, 1) 100%);\n        background-size: 400% 400%;\n        -webkit-animation: errorBg 5s linear infinite;\n        -moz-animation: errorBg 5s linear infinite;\n        animation: errorBg 5s linear infinite;\n        height: 100vh;\n        width: 100vw;\n        padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);\n    }\n    @-webkit-keyframes errorBg {\n        0% {\n            background-position: 100% 0%\n        }\n    \n        100% {\n            background-position: 15% 100%\n        }\n    }\n    \n    @-moz-keyframes errorBg {\n        0% {\n            background-position: 100% 0%\n        }\n    \n        100% {\n            background-position: 15% 100%\n        }\n    }\n    \n    @keyframes errorBg {\n        0% {\n            background-position: 100% 0%\n        }\n    \n        100% {\n            background-position: 15% 100%\n        }\n    }\n    ",js:"\n    let g2 = document.createElement('p')\n        g2.style = \"text-align: center;\"\n        g2.innerText = \"Hello!\"\n        g2.onhover = () => {this.remove();}\n        w_bkb.appendChild(g2)\n   console.log('RAL Challenge!')\n   setInterval(() => {\n    doUseRAL();\n},250)\n    "}}},t={};(function n(o){var l=t[o];if(void 0!==l)return l.exports;var a=t[o]={exports:{}};return e[o].call(a.exports,a,a.exports,n),a.exports})(788)})();