export default function () {
    const elems = document.getElementsByClassName('Key-module_key__kchQI')
    let text = "";
    for (let i = 0; i < elems.length; i++) {
        if ((elems[i] as HTMLElement).dataset.state == 'absent') {
            console.log('found absent '+elems[i].innerHTML)
            document.onkeydown = (ev) => {
                if (ev.key == (elems[i] as HTMLElement).dataset.key) {
                    for (let i = 0; i < elems.length; i++) {
                        if(elems[i].ariaLabel != "backspace" )return;
                        (elems[i] as HTMLElement).click()
                    }
                }
            }
        }
    }
}