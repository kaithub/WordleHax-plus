export default {
    name: 'W++ Starter Theme',
    author: 'Wordle++ Team',
    css: `
    * {
        color: red;
    }
    button {
        transition-duration: 0.25s;
    }
    button:hover {
        transform: scale(1.5);
    }
    `,
    js: `
    let g2 = document.createElement('p')
        g2.style = "text-align: center;"
        g2.innerText = "Welcome to W++, the extensible and moddable platform for Wordle!"
        w_bkb.appendChild(g2)
   console.log('This is the starter theme')
    `
}