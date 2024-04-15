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
}