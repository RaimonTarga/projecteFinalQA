const API_URL = "https://pokeapi.co/api/v2/pokemon"
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const searchField = document.getElementById('pokemonInput');
const backButton = document.getElementById("backButton");
const results = document.getElementById("results");
let currentPage = 1;
let queryResults = []


printList(1, undefined)


searchField.addEventListener('input', (evt) => {
    clearPage()
    updateResults()
});


function printList(pageNumber, filter){
    try {
        fetch(API_URL + "/?limit=25&offset=" + pageNumber)
            .then(response => {
                const responseJson = response.json()
                return responseJson
            })
            .then(data => {
                
                let pokemons = data.results
                pokemons.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then(response => {
                            const responseJson = response.json()
                            return responseJson
                        })
                        .then(data => {
                            queryResults.push(data)
                            displayData(data, filter)
                        })
                });
            
            })
            .catch(error => {
                //nextButton.style = "display:none";
                //currentPage--;
                console.error(error)
            })
    } catch (error) {
        console.error(error)
    } finally {
        queryResults.sort((a, b) => a.id - b.id)
    }
}

function compareID(a, b){
    return (a.id < b.id)
}

function displayData(element, filter){
    if (filter === undefined || element.name.toLowerCase().includes(filter.toLowerCase())){
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                        <img src="${element.sprites.front_default}" alt="foto">
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
                    <img src="${element.sprites.front_default}" alt="foto">
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
    };
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
    updateResults()
    currentPage++
    if (currentPage != 1){
        previousButton.style = "display:inline"
    }
}

function previousPage(){
    clearPage()
    updateResults()
    currentPage--
    if (currentPage == 1){
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
    queryResults.forEach(element => {
        displayData(element, searchField.value)
    });
}