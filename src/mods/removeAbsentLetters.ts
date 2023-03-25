import { ModGlobal } from "./ModGlobal";

export default function () {
    const elems = document.getElementsByClassName(ModGlobal.Key)
    for (let i = 0; i < elems.length; i++) {
        if ((elems[i] as HTMLElement).dataset.state == 'absent') {
            console.log('found absent '+elems[i].innerHTML);
            (elems[i] as HTMLElement).onclick = () => { return false }
        }
    }
}