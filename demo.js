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
const banner = document.getElementById("banner")

const PAGE_SIZE = 25
const MAX_PAGES = 52
let currentPage = 0
let queryResults = []
let filteredResults = []

queryPage(0)

searchField.addEventListener('input', (evt) => {
    clearPage()
    currentPage = 0
    previousButton.style = "display:none"
    filterElements()
    updateResults()
})

function filterElements(){
    filteredResults = []
    queryResults.forEach(element => {
        if (element.name.includes(searchField.value.toLowerCase())){
            filteredResults.push(element)
        }
    })
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
                    }
                    
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
        <div class="parent">
            <div class="card">
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
    imgPokemon.src = element.sprites.versions['generation-v']['black-white'].animated.front_default
}

function clearPage(){
    results.innerHTML = ""
}

function nextPage(){
    if (currentPage*PAGE_SIZE+PAGE_SIZE <= queryResults.length){
        clearPage()
        currentPage++
        updateResults()
        if (currentPage != 0){
            previousButton.style = "display:inline"
        }
        if (currentPage == MAX_PAGES){
            nextButton.style = "display:none"
        }
    }
}

function previousPage(){
    clearPage()
    currentPage--
    updateResults()
    if (currentPage == 0){
        previousButton.style = "display:none"
    }
    nextButton.style = "display:inline"
}

function goBack(){
    updateResults()
    results.style = "display:block"
    banner.style = "display:block"
    fichaPokemon.style = "display:none"
}

function updateResults(){
    clearPage()
    if (searchField.value != ""){
        filteredResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE).forEach(element => {
            displayElement(element)
        })
    }
    else {
        queryResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE).forEach(element => {
            displayElement(element)
        })
    }
}
