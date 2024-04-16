const PAGE_SIZE = 25
const MAX_PAGE = 52
const API_URL = "https://pokeapi.co/api/v2/pokemon"

let queryResults = []
let pageNumber = 1
while (pageNumber < MAX_PAGE){
    
    try {
        const PAGE_OFFSET = pageNumber * PAGE_SIZE
        console.log("before the step page offset: " + PAGE_OFFSET)
        fetch(API_URL + "/?limit=" + PAGE_SIZE + "&offset=" + PAGE_OFFSET)
            .then(response => {
                console.log("first step")
                const responseJson = response.json()
                return responseJson
            })
            .then(data => {
                console.log("second step")
                let pokemons = data.results
                
                pokemons.forEach(pokemon => {
                    fetch(pokemon.url)
                        .then(response => {
                            const responseJson = response.json()
                            return responseJson
                        })
                        .then(data => {
                            queryResults.push(data)
                        })
                        
                })
                
            })
            .catch(error => {
                console.error(error)
            })
    } catch (error) {
        console.error(error)
    } finally {
        console.log("sending message for page " + queryResults.length)
        
            console.log("sending message  " + queryResults.length)
            queryResults.sort((a, b) => a.id - b.id)
            postMessage(queryResults)
            ++pageNumber
        
    }
}

