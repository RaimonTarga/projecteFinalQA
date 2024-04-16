<<<<<<< HEAD
const API_URL = "https://pokeapi.co/api/v2/pokemon";
function print(){
    switch(type1){
        case "water":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-water">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-water">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fire":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-fire">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-fire">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "grass":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-grass">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-grass">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ice":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ice">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-ice">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;

        case "bug":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-bug">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-bug">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fighting":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-fighting">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-fighting">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "electric":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-electric">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-electric">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "rock":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-rock">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-rock">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "steel":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-steel">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-steel">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "dark":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-dark">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-dark">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "flying":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-flying">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-flying">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "normal":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-normal">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-normal">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ghost":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ghost">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-ghost">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "ground":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-ground">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-ground">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "dragon":
            document.getElementById("print").innerHTML += 
            `<div class="parent">
            <div class="card">
                <div class="content-box-dragon">
                    <span class="card-title">${nombre}</span>
                    <p class="card-content">
                        Id: ${id}
                    </p>
                    <p class="card-content">
                        Types: ${type1}
                    </p>
                </div>
                <div class="date-box-dragon">
                    <img src="${picture}" alt="foto">
                </div>
            </div>
            </div>
            `
            break;
        case "fairy":
        document.getElementById("print").innerHTML += 
        `<div class="parent">
        <div class="card">
            <div class="content-box-fairy">
                <span class="card-title">${nombre}</span>
                <p class="card-content">
                        Id: ${id}
                    </p>
                <p class="card-content">
                    Types: ${type1}
                </p>
            </div>
            <div class="date-box-fairy">
                <img src="${picture}" alt="foto">
            </div>
        </div>
        </div>
        `
        break;
    }
=======
const API_URL = "https://pokeapi.co/api/v2/pokemon"
const previousButton = document.getElementById("previousButton");
const nextButton = document.getElementById("nextButton");
const searchField = document.getElementById('pokemonInput');
const backButton = document.getElementById("backButton");
const results = document.getElementById("results");
let currentPage = 1;


printList(1, undefined)


searchField.addEventListener('input', (evt) => {
    clearPage()
    updateResults()
});


async function printList(pageNumber, filter){
    try {
        let queryResults = []
        fetch(API_URL + "/?limit=25&offset=" + pageNumber)
            .then(response => {
                const responseJson = response.json()
                return responseJson
            })
            .then(data => {
                let queryResults = []
                let pokemons = data.results
                pokemons.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then(response => {
                            const responseJson = response.json()
                            return responseJson
                        })
                        .then(data => {
                            queryResults.push(data)
                            displayData(queryResults, filter)
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
    }
}

function displayData(data, filter){
    data.forEach(element => {
        if (filter === undefined || element.name.toLowerCase().includes(filter.toLowerCase())){
            const node = document.createElement("div")
            console.log(element.sprites.front_default)
            node.innerHTML = 
                `
                <div class="ficha">
                <h1>${element.name}</h1>
                <img src="${element.sprites.front_default}">
                </div>  
                `;
            node.onclick = function(){
                showElement(element)
            };
            results.appendChild(node)
        };
    });
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
    printList(currentPage, searchField.value)
>>>>>>> 18eb6e062cb65fd16c20e17289f84b573fc0123b
}