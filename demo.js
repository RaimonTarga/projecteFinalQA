const API_URL = "https://pokeapi.co/api/v2/pokemon"
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const searchField = document.getElementById('pokemonInput');
const backButton = document.getElementById("backButton");
const closeButton = document.getElementById("btnClose");
const results = document.getElementById("results");
const pokemon = document.getElementById("pokemon");
const banner = document.getElementById("banner");
const PAGE_SIZE = 25
const MAX_PAGE = 52
let currentPage = 0
let queryResults = []
let filteredResults = []

queryPage(0)

previousButton.style = "display:none"
/*
for (let i = 1; i < 52; i++){
    queryPage(i)
}
*/

searchField.addEventListener('input', (evt) => {
    clearPage()
    currentPage = 0
    previousButton.style = "display:none"
    filterElements()
    updateResults()
});

function filterElements(){
    filteredResults = []
    queryResults.forEach(element => {
        if (element.name.toLowerCase().includes(searchField.value.toLowerCase())){
            filteredResults.push(element)
        }
    });
    
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
                                console.log(data.id)
                                queryResults.push(data)
                                if (queryResults.length == PAGE_OFFSET + PAGE_SIZE) resolve()
                            })
                            .catch(error => {
                                reject()
                                console.error(error)
                            })
                    });
                    
                })
                resultPromise.then(()=>{
                    queryResults.sort((a, b) => a.id - b.id)
                    updateResults()
                    if (pageNumber<MAX_PAGE){
                        queryPage(pageNumber+1)
                    }
                    
                })
                
            
            })
            .catch(error => {
                //nextButton.style = "display:none";
                //currentPage--;
                console.error(error)
            })
    } catch (error) {
        console.error(error)
    }
}

function compareID(a, b){
    return (a.id < b.id)
}

function displayElement(element){
    const node = document.createElement("div")
    switch(element.types[0].type.name){
        case "water":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-water">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-water">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fire":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-fire">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-fire">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "grass":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-grass">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-grass">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ice":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ice">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-ice">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;

        case "bug":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-bug">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-bug">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fighting":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-fighting">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-fighting">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "electric":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-electric">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-electric">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "rock":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-rock">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-rock">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "steel":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-steel">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-steel">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "dark":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-dark">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-dark">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "flying":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-flying">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-flying">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "normal":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-normal">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-normal">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ghost":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ghost">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-ghost">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ground":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ground">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-ground">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "dragon":
            node.innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-dragon">
                    <span class="card-title">${element.name}</span>
                    <p class="card-content">
                        Id: ${element.id}
                    </p>
                    <p class="card-content">
                        Types: ${element.types[0].type.name}
                    </p>
                </div>
                <div class="date-box-dragon">
                    <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fairy":
        node.innerHTML += 
        `<div class="parent">
        <div class="card">
            <div class="content-box-fairy">
                <span class="card-title">${element.name}</span>
                <p class="card-content">
                        Id: ${element.id}
                    </p>
                <p class="card-content">
                    Types: ${element.types[0].type.name}
                </p>
            </div>
            <div class="date-box-fairy">
                <img class="imatgePokemonPokedex" src="${element.sprites.front_default}" alt="foto">
            </div>
        </div>
        </div>
        `
        break;
    }
    node.onclick = function(){
        showElement(element)
    };
    results.appendChild(node)
}

function print(){
    
}

function showElement(element){
    clearPage()
    let node = document.createElement("div")
    
    backButton.style = "display:inline"
}

function clearPage(){
    results.innerHTML = ""
}

function nextPage(){
    clearPage()
    currentPage++
    updateResults()
    if (currentPage != 0){
        previousButton.style = "display:inline"
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
    clearPage()
    updateResults()
    backButton.style = "display:none"
}

function updateResults(){
    clearPage()
    if (searchField.value != ""){
        filteredResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE).forEach(element => {
            displayElement(element)
        });
    }
    else if (queryResults.length <= currentPage * PAGE_SIZE){
        
        queryResults.forEach(element => {
            displayElement(element)
        });
        
    }
    else {
        queryResults.slice(currentPage*PAGE_SIZE, currentPage*PAGE_SIZE + PAGE_SIZE).forEach(element => {
            displayElement(element)
        });
    }
    
}

function closeCard(){
    results.style.display = "block";
    banner.style.display = "block";
    pokemon.style.display = "none";
}