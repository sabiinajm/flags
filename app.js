const hamburger = document.getElementById('hamburger');
const leftMenu = document.getElementsByClassName('menu')[0];
const rightMenu = document.getElementsByClassName('menu')[1];
const main = document.querySelector('main');
let flag = true;
const size = 768;

function show() {
    if (flag) {
        leftMenu.style.top = '102px';
        rightMenu.style.top = '102px';
        leftMenu.style.height = '28vh';
        rightMenu.style.height = '56vh';
        leftMenu.style.transitionDelay = '0s';
        rightMenu.style.transitionDelay = '.24s';
        main.style.marginTop = '56vh';
    } else {
        leftMenu.style.height = '0';
        rightMenu.style.height = '0';
        leftMenu.style.transitionDelay = '.24s';
        rightMenu.style.transitionDelay = '0s';
        main.style.marginTop = '0';
    }
    flag = !flag;
}

if (window.innerWidth < size) {
    hamburger.addEventListener('click', show);
}
window.addEventListener('resize', () => {
    if (window.innerWidth >= size) {
        leftMenu.style.top = '';
        rightMenu.style.top = '';
        leftMenu.style.height = '';
        rightMenu.style.height = '';
        leftMenu.style.transitionDelay = '';
        rightMenu.style.transitionDelay = '';
        main.style.marginTop = '';
    }
});

const img1 = document.getElementById('img1')
const name1 = document.getElementById('name1')
const region1 = document.getElementById('region')
const area1 = document.getElementById('area')
const pop1 = document.getElementById('pop')
img1.innerHTML = `<img src='${img[1]}'/>`