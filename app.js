let flag1 = true
let flag2 = true
let flag3 = true

// hamburger menu
const mobileMenu = document.getElementById('mobile-menu')
function show() {
    if (flag1) {
        mobileMenu.style.maxHeight = '500px'
    } else {
        mobileMenu.style.maxHeight = '0'
    }
    flag1 = !flag1
}

// displaying one random country
const img1 = document.getElementById('img1')
const info1 = document.getElementById('info1')
let x = rand(0, countries.length - 1)
img1.innerHTML = `<img src='${countries[x].flag}' alt="${countries[x].name} flag"/>`
info1.innerHTML = `
<h2>${countries[x].name}</h2>
<h4>${countries[x].region}</h4>
<p>Capital: ${countries[x].capital}</p>
<p>Area: ${countries[x].area} km²</p>
<p>Population: ${countries[x].population}</p>`
function rand(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

// displaying cards
const card = document.getElementById('card')
const end = document.getElementById('end')
let startIndex = 0
const count = 20
function displayCountries(startIndex, count) {
    let endIndex = startIndex + count
    const kod = countries.slice(startIndex, endIndex).map(country =>
        `<div onclick="showInfo(this)" data-aos="fade-up" id="card-1" class=" ${flag2 ? '' : 'dark-mode'}">
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
    if (endIndex >= countries.length) {
        end.innerHTML = '<h3>No more</h3>'
    }
}
displayCountries(startIndex, count)
startIndex += count

// when clicked on more button
function more() {
    displayCountries(startIndex, count)
    startIndex += count
}

// dark-light mode
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

// menu
const country = document.getElementById("country")
function changeRegion(element) {
    let regionName = element.textContent
    kod = ''
    countries.map(item => {
        if (item.region == regionName) {
            country.style.display = 'none'
            kod += `<div onclick="showInfo(this)" data-aos="fade-up" id="card-1" class=" ${flag2 ? '' : 'dark-mode'}">
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
            }
        })
        card.innerHTML = kod
}

// display search input
function showSearch() {
    if (flag3) {
        inp.style.height = '40px'
        inp.style.padding = '10px'
    } else {
        inp.style.height = '0'
        inp.style.padding = '0'
        inp.style.overflow = 'hidden'
    }
    inp.style.transition = 'all 0.3s'
    flag3 = !flag3
}

// have a look button
function goDown() {
    window.scrollBy({ top: 400, behavior: 'smooth' })
}

// search button 
function search() {
    const inpVal = document.getElementById('inp').value.trim().toLowerCase()
    let kod = ''

    if (inpVal === '') {
        card.innerHTML = ''
        country.style.display = 'flex'
        card.style.display = 'grid'
        end.style.display = 'block'
        displayCountries(0, 20)
    } else {
        country.style.display = 'none'
        end.style.display = 'none'
        countries.forEach(item => {
            if (item.name.toLowerCase().startsWith(inpVal)) {
                kod += `<div onclick='showInfo(this)' data-aos="fade-up" id="card-1" class="${flag2 ? '' : 'dark-mode'}">
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
            }
        });

        if (kod === '') {
            end.innerHTML = '<h3>No results found</h3>'
            end.style.display = 'block'
        } else {
            card.innerHTML = kod
            card.style.display = 'grid'
        }
    }
}

const welcome = document.getElementsByClassName('welcome')[0]
function showInfo(cardElement) {
    card.style.display = 'none'
    country.style.display = 'none'
    end.style.display = 'none'
    const countryName = cardElement.querySelector('h2').textContent
    let selectedCountry
    for (let i = 0; i < countries.length; i++) {
        if (countries[i].name === countryName) {
            selectedCountry = countries[i]
            break
        }
    }

    if (selectedCountry) {
        const infoHTML = `
            <div class="card-selected ${flag2 ? '' : 'dark-mode'}">
                <div id="card-img-selected"><img src='${selectedCountry.flag}' alt="${selectedCountry.name} flag"/></div>
                <div id='card-info-selected'>
                    <h1>${selectedCountry.name}</h1>
                    <p><b>Capital:</b> ${selectedCountry.capital}</p>
                    <p><b>Region:</b> ${selectedCountry.region}</p>
                    <p><b>Population:</b> ${selectedCountry.population}</p>
                    <p><b>Area:</b> ${selectedCountry.area} km²</p>
                </div>
            </div>`
        welcome.innerHTML = infoHTML
    }
}

// when clicked on logo
function restart() {
    welcome.style.display= 'flex';
    card.innerHTML = '';
    card.style.display = 'grid';
    country.style.display = 'flex';
    end.style.display = 'block';
    displayCountries(0, 20);
}

AOS.init();
