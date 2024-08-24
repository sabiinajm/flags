const mobileMenu = document.getElementById('mobile-menu')
let flag1 = true
let flag2 = true

function show() {
    if (flag1) {
        mobileMenu.style.maxHeight = '500px'
    } else {
        mobileMenu.style.maxHeight = '0'
    }
    flag1 = !flag1
}

const img1 = document.getElementById('img1')
const info1 = document.getElementById('info1')
const end = document.getElementById('end')
const card = document.getElementById('card')

let x = rand(0, countries.length - 1)
img1.innerHTML = `<img src='${countries[x].flag}' alt="${countries[x].name} flag"/>`
info1.innerHTML = `
    <h2>${countries[x].name}</h2>
    <h4>${countries[x].region}</h4>
    <p>Capital: ${countries[x].capital}</p>
    <p>Area: ${countries[x].area} km²</p>
    <p>Population: ${countries[x].population}</p>`

let startIndex = 0
const count = 20
function displayCountries(startIndex, count) {
    let endIndex = startIndex + count
    const kod = countries.slice(startIndex, endIndex).map(country =>
        `<div id="card-1" class=" ${flag2 ? '' : 'dark-mode'}">
            <div id="card-img"><img src='${country.flag}' alt="${country.name} flag"/></div>
            <div id='card-info'>
                <p class='${country.region}'>${country.region}</p>
                <h2>${country.name}</h2>
                <div class="about">
                    <p>Population: ${country.population}</p>
                    <p>Area: ${country.area} km²</p>
                </div>
            </div>
        </div>`).join('')
    card.innerHTML += kod
    if (endIndex >= countries.length - 1) {
        end.innerHTML = '<h3>No more</h3>'
    }
}
function more() {
    displayCountries(startIndex, count)
    startIndex += count
}
displayCountries(startIndex, count)
startIndex += count

function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}
const moonmode = document.getElementById('moon-mode')
moonmode.style.display = 'none'
function change() {
    const navbar = document.getElementById('navbar')
    const country = document.getElementById('country')
    const sunmode = document.getElementById('sun-mode')
    const cards = document.querySelectorAll('#card-1')
    const body = document.body
    const main = document.querySelector('main')

    navbar.classList.toggle("dark-mode")
    body.classList.toggle("dark-mode")
    country.classList.toggle("dark-mode")
    mobileMenu.classList.toggle("dark-mode")
    cards.forEach(function (card) {
        card.classList.toggle("dark-mode")
    })
    main.classList.toggle("dark2-mode")
    if (flag2) {
        moonmode.style.display = 'block'
        sunmode.style.display = 'none'
    } else {
        moonmode.style.display = 'none'
        sunmode.style.display = 'block'
    }
    flag2 = !flag2;
}
const country = document.getElementById("country")
function changeRegion(element) {
    let regionName = element.textContent
    kod = ''
    console.log(regionName);


    countries.map(item => {
        if (item.region == regionName) {
            country.style.display = 'none'
            kod += `<div id="card-1" class=" ${flag2 ? '' : 'dark-mode'}">
                    <div id="card-img"><img src='${item.flag}' alt="${item.name} flag"/></div>
                    <div id='card-info'>
                        <p class='${item.region}'>${item.region}</p>
                        <h2>${item.name}</h2>
                        <div class="about">
                            <p>Population: ${item.population}</p>
                            <p>Area: ${item.area} km²</p>
                        </div>
                    </div>
                </div>`
            end.innerHTML = '<h3>No more</h3>'
        }
    })
    card.innerHTML = kod
}
let flag3 = true;
function showSearch() {
    if (flag3) {
        inp.style.height = '40px';
        inp.style.padding = '10px';
    } else {
        inp.style.height = '0';
        inp.style.padding = '0';
        inp.style.overflow = 'hidden';
    }
    inp.style.transition = 'all 0.3s';
    flag3 = !flag3;
}
function goDown() {
    window.scrollBy({ top: 400, behavior: 'smooth' });
}
function search() {
    const inpVal = document.getElementById('inp').value.trim().toLowerCase();
    let kod = '';
    
    if (inpVal === '') {
        country.style.display = 'flex';
        card.style.display = 'grid';
        end.style.display = 'block';
        displayCountries(0, 20);
        return;
    } else {
        country.style.display = 'none';
        end.style.display = 'none';
        countries.forEach(item => {
            if (item.name.toLowerCase().startsWith(inpVal)) {
                kod += `<div id="card-1" class="${flag2 ? '' : 'dark-mode'}">
                    <div id="card-img"><img src='${item.flag}' alt="${item.name} flag"/></div>
                    <div id='card-info'>
                        <p class='${item.region}'>${item.region}</p>
                        <h2>${item.name}</h2>
                        <div class="about">
                            <p>Population: ${item.population}</p>
                            <p>Area: ${item.area} km²</p>
                        </div>
                    </div>
                </div>`;
            }
        });
        
        if (kod === '') {
            end.innerHTML = '<h3>No results found</h3>';
            end.style.display = 'block';
        } else {
            card.innerHTML = kod;
            card.style.display = 'grid';
        }
    }
}
