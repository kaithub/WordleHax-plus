import { ModGlobal } from "./ModGlobal";

export default function () {
    const elems = document.getElementsByClassName(ModGlobal.Key)
    for (let i = 0; i < elems.length; i++) {
        if ((elems[i] as HTMLElement).dataset.state == 'absent') {
            document.onkeydown = (ev) => {
                if (ev.key == elems[i].innerHTML) {
                    const elems = document.getElementsByClassName(ModGlobal.Key)
                    for (let i = 0; i < elems.length; i++) {
                        if ((elems[i] as HTMLElement).dataset.key == '←') {
                            (elems[i] as HTMLElement).click();
                        }
                    }
                }
            }
            (elems[i] as HTMLElement).remove()
        }
    }
}