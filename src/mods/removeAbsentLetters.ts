export default function () {
    const elems = document.getElementsByClassName('Key-module_key__kchQI')
    for (let i = 0; i < elems.length; i++) {
        if ((elems[i] as HTMLElement).dataset.state == 'absent') {
            console.log('found absent '+elems[i].innerHTML);
            (elems[i] as HTMLElement).onclick = () => { return false }
        }
    }
}