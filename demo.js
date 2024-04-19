const API_URL = "https://pokeapi.co/api/v2/pokemon"
const results = document.getElementById("results")
const previousButton = document.getElementById("previousButton")
const nextButton = document.getElementById("nextButton")
const searchField = document.getElementById('pokemonInput')
const backButton = document.getElementById("backButton")
const fichaPokemon = document.getElementById("fichaPokemon")
const nombrePokemon = document.getElementById("nombrePokemon")
const tipoPokemon = document.getElementById("numeroPokemon")
const alturaPokemon = document.getElementById("alturaPokemon")
const pesoPokemon = document.getElementById("pesoPokemon")
const imgPokemon = document.getElementById("imgPokemon")
const cryPokemon = document.getElementById("cryPokemon")
const pageDropdown = document.getElementById("pageDropdown")
const ProgressBackGround = document.getElementById("ProgressBackGround")
const ProgressBar = document.getElementById("ProgressBar")

const banner = document.getElementById("banner")

const PAGE_SIZE = 25
const MAX_PAGES = 52
const MAX_ANIMATED_SPRITES = 649
let currentPage = 0
let queryResults = []
let filteredResults = []

queryPage(0)


searchField.addEventListener('input', (evt) => {
    currentPage = 0
    previousButton.disabled = true
    filterElements()
    updateResults()
})

pageDropdown.addEventListener("change", (event)=> {
    currentPage = event.target.value-1
    previousButton.disabled = (currentPage == 0)
    updateResults(false)
});


function filterElements(){
    filteredResults = []
    queryResults.forEach(element => {
        if (element.name.includes(searchField.value.toLowerCase())){
            filteredResults.push(element)
        }
    })
}

function updateProgressBar(pagesLoaded){
    let value = pagesLoaded/(MAX_PAGES-1)
    var width = value * 100;
    if (width >= 100) {
        ProgressBar.style.width = "100%";
        ProgressBar.innerHTML = "100%";
        let timer = setTimeout( function(){
            ProgressBackGround.style = "display:none"
            ProgressBar.style = "display:none"
        }, 5000)
    } else {
        ProgressBar.style.width = width + "%";
        ProgressBar.innerHTML = Math.floor(width) + "%";
    }
}

function queryPage(pageNumber){
    try {
        const PAGE_OFFSET = pageNumber * PAGE_SIZE
        fetch(API_URL + "/?limit=" + PAGE_SIZE + "&offset=" + PAGE_OFFSET)
            .then(response => {
                const responseJson = response.json()
                return responseJson
            })
            .then(data => {
                let pokemons = data.results
                let resultPromise = new Promise((resolve, reject) => {
                    pokemons.forEach(pokemon => {
                        fetch(pokemon.url)
                            .then(response => {
                                const responseJson = response.json()
                                return responseJson
                            })
                            .then(data => {
                                queryResults.push(data)
                                if (queryResults.length == PAGE_OFFSET + PAGE_SIZE) resolve()
                            })
                            .catch(error => {
                                reject()
                                console.error(error)
                            })
                    })
                })
                resultPromise.then(()=>{
                    queryResults.sort((a, b) => a.id - b.id)
                    if (pageNumber==0) updateResults()
                    if (pageNumber<MAX_PAGES){
                        queryPage(pageNumber+1)
                        updateProgressBar(pageNumber)
                        
                    } 
                    clearDropdown()
                    updateDropdown(pageNumber)
                })
            })
            .catch(error => {
                console.error(error)
            })
    } catch (error) {
        console.error(error)
    }
}

function displayElement(element){
    const node = document.createElement("div")
    let types = element.types[0].type.name
    if (element.types[1] != undefined){
         types += ", " + element.types[1].type.name
    }
    node.innerHTML += 
    `
    <div class="parent text-center">
        <div class="card text-center">
            <div class="content-box-${element.types[0].type.name}">
                <span class="card-title">${element.name}</span>
                <p class="card-content">
                    Id: ${element.id}
                </p>
                <p class="card-content">
                    Types: ${types}
                </p>
            </div>
            <div class="date-box-${element.types[0].type.name}">
                <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
            </div>
        </div>
    </div>
    `
    node.onclick = function(){
    showElement(element)
    };
    results.appendChild(node)
    
}

function showElement(element){
    results.style = "display:none"
    banner.style = "display:none"
    fichaPokemon.style = "display:inline"
    nombrePokemon.innerHTML = element.name + '<button type="button" id="btnClose" class="btn-close float-right" aria-label="Close" onclick="goBack()"></button>'
    let types = element.types[0].type.name
    if (element.types[1] != undefined){
         types += ", " + element.types[1].type.name
    }
    tipoPokemon.innerHTML = "Types: " + types
    alturaPokemon.innerHTML = "Height: " + (element.height/10) + "m" 
    pesoPokemon.innerHTML = "Weight: " + (element.weight/10) + "kg"
    if (element.id <= MAX_ANIMATED_SPRITES){
        imgPokemon.src = element.sprites.versions['generation-v']['black-white'].animated.front_default
    } else {
        imgPokemon.src = element.sprites.front_default
    }
    
    cryPokemon.onclick = function(){
        let cry = new Audio(element.cries.latest)
        cry.volume = 0.2
        cry.play()
    }
}

function clearPage(){
    results.innerHTML = ""
}

function nextPage(){
    if (currentPage*PAGE_SIZE+PAGE_SIZE <= queryResults.length){
        currentPage++
        updateResults()
        if (currentPage != 0){
            previousButton.disabled = false
        }
        if (currentPage == MAX_PAGES){
            nextButton.disabled = true
        }
        pageDropdown.selectedIndex = currentPage
    }
}

function previousPage(){
    clearPage()
    currentPage--
    updateResults()
    if (currentPage == 0){
        previousButton.disabled = true
    }
    nextButton.disabled = false
    pageDropdown.selectedIndex = currentPage
}

function goBack(){
    updateResults(false)
    results.style = "display:block"
    banner.style = "display:block"
    fichaPokemon.style = "display:none"
}

function clearDropdown(){
    pageDropdown.innerHTML = ""
}

function updateDropdown(pages){
    for (let i = 0; i < pages; i++){
        let option = document.createElement('option')
        option.text = option.value = i+1
        pageDropdown.appendChild(option)
    }
    pageDropdown.selectedIndex = currentPage
}

function updateResults(changeDropdown = true){
    clearPage()
    nextButton.disabled = false
    let resultPage = []
    if (changeDropdown) clearDropdown()
    if (searchField.value != ""){
        resultPage = filteredResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE)
        if (changeDropdown){
            updateDropdown(Math.ceil(filteredResults.length/25))
        }
        
    }
    else {
        resultPage = queryResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE)
        if (changeDropdown){
            updateDropdown(Math.ceil(queryResults.length/25))
        }
    }
    resultPage.forEach(element => {
        displayElement(element)
    })
    
    if (resultPage.length < PAGE_SIZE){
        nextButton.disabled = true
    }
}
