const hamburger = document.getElementById('hamburger')
const leftMenu = document.getElementsByClassName('menu')[0]
const rightMenu = document.getElementsByClassName('menu')[1]
const main = document.querySelector('main')
let flag = true
const size = 768

function show() {
    if (flag) {
        leftMenu.style.height = '28vh'
        rightMenu.style.height = '56vh'
        leftMenu.style.transitionDelay = '0s'
        rightMenu.style.transitionDelay = '.3s'
        main.style.marginTop = '56vh'
    } else {
        leftMenu.style.height = '0'
        rightMenu.style.height = '0'
        leftMenu.style.transitionDelay = '.24s'
        rightMenu.style.transitionDelay = '0s'
        main.style.marginTop = '0'
    }
    flag = !flag
}

if (window.innerWidth < size) {
    hamburger.addEventListener('click', show)
}
window.addEventListener('resize', () => {
    if (window.innerWidth >= size) {
        leftMenu.style.height = ''
        rightMenu.style.height = ''
        main.style.marginTop = ''
    }
});

const img1 = document.getElementById('img1')
const info1 = document.getElementById('info1')

img1.innerHTML = `<img src='${imgs[1]}'/>`;
    info1.innerHTML = `
        <h2>${names[1]}</h2>
        <h4>${region[1]}</h4>
        <p>Capital: ${capital[1]}</span></p>
        <p>Area: ${area[1]}</span> km2</p>
        <p>Population: ${population[1]}</span></p>`;