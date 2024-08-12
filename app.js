const hamburger = document.getElementById('hamburger');
const leftMenu = document.getElementsByClassName('menu')[0];
const rightMenu = document.getElementsByClassName('menu')[1];
const main = document.querySelector('main');
let flag = true;
let size = 768;

function show() {
    if (flag) {
        leftMenu.style.height = '28vh';
        rightMenu.style.height = '28vh';
        rightMenu.style.top = 'calc(102px + 28vh)';
        leftMenu.style.transitionDelay = '0s';
        rightMenu.style.transitionDelay = '.6s';
        main.style.marginTop = '56vh';
    } else {
        leftMenu.style.height = '0';
        rightMenu.style.height = '0';
        leftMenu.style.transitionDelay = '.6s';
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
        leftMenu.style.height = '';
        rightMenu.style.height = '';
        main.style.marginTop = '';
    }
});

const img1 = document.getElementById('img1');
const info1 = document.getElementById('info1');

const card = document.getElementById('card')
let x = rand(0, names.length - 1)
let y = 20;

for(let i = 0; i < y; i++){
    img1.innerHTML = `<img src='${imgs[x]}'/>`;
    info1.innerHTML = `
        <h2>${names[x]}</h2>
        <h4>${region[x]}</h4>
        <p>Capital: ${capital[x]}</span></p>
        <p>Area: ${area[x]}</span> km2</p>
        <p>Population: ${population[x]}</span></p>`;
        card.innerHTML += `
        <div id='card-1'>
            <div id="card-img"><img src='${imgs[i]}'/></div>
            <div id='card-info'>
                <p>${region[i]}</p>
                <h2>${names[i]}</h2>
                <div class="about">
                    <p>Population: ${population[i]}</p>
                    <p>Area: ${area[i]} km2</p>
                </div>
            </div>
        </div>
        `;
    }
    function more(){
        let kod = '';
        for(let i = y; i < y + 20; i++){
        if (i >= names.length) break;
        kod += `
            <div id="card-1">
            <div id="card-img"><img src='${imgs[i]}'/></div>
            <div id="card-info">
                <p>${region[i]}</p>
                <h2>${names[i]}</h2>
                <div class="about">
                    <p>Population: ${population[i]}</p>
                    <p>Area: ${area[i]} km2</p>
                </div>
            </div>
            </div>
        `;
        }
        card.innerHTML += kod;
        y += 20;
    }
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
