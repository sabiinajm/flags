const mobileMenu = document.getElementById('mobile-menu')
let flag = true

function show() {
    if (flag) {
        mobileMenu.style.maxHeight = '500px'
    } else {
        mobileMenu.style.maxHeight = '0'
    }
    flag = !flag
}

const img1 = document.getElementById('img1')
const info1 = document.getElementById('info1')
const end = document.getElementById('end')
const card = document.getElementById('card')
let y = 20

let x = rand(0, countries.length - 1)
img1.innerHTML = `<img src='${countries[x].flag}' alt="${countries[x].name} flag"/>`
info1.innerHTML = `
    <h2>${countries[x].name}</h2>
    <h4>${countries[x].region}</h4>
    <p>Capital: ${countries[x].capital}</p>
    <p>Area: ${countries[x].area} km²</p>
    <p>Population: ${countries[x].population}</p>`;
    
function displayCountries(startIndex, count){
    let kod = ''
    for(let i = startIndex; i < startIndex + count; i++){
            kod += `<div id="card-1" class=" ${flag ? '' : 'dark-mode'}">
                <div id="card-img"><img src='${countries[i].flag}' alt="${countries[i].name} flag"/></div>
                <div id='card-info'>
                    <p>${countries[i].region}</p>
                    <h2>${countries[i].name}</h2>
                    <div class="about">
                        <p>Population: ${countries[i].population}</p>
                        <p>Area: ${countries[i].area} km²</p>
                    </div>
                </div>
            </div>`
            if (i == countries.length - 1) {
                end.innerHTML='<h3>No more</h3>'
            }
        }
        card.innerHTML += kod
}
displayCountries(0, y)

    function more(){
        displayCountries(y,20)
        y += 20
        }

function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function change() {
    const navbar = document.getElementById('navbar')
    const country = document.getElementById('country')
    const mode = document.getElementById('mode');
    const cards = document.querySelectorAll('#card-1')
    const body = document.body
    const main = document.querySelector('main')

    navbar.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    country.classList.toggle("dark-mode")
    mobileMenu.classList.toggle("dark-mode")
    cards.forEach(function(card) {
        card.classList.toggle("dark-mode")
    })
    main.classList.toggle("dark2-mode")
    if (flag) {
        mode.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></svg>'
    } else {
        mode.innerHTML = '<svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="text-[25px]" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>'
    }
    flag = !flag;
}