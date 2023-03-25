export enum ModGlobal {
    Key = 'Key-module_key__kchQI',
    AMZTracker = 'apstag',
    GTracker = 'googletag',
    StatsContainer = 'Stats-module_ctaContainer__1Krdy',
    BotContainer = 'Stats-module_botLink__Gf9gC',
}

export function getFElement(cn: string) {
    return document.getElementsByClassName(cn)[0]
}