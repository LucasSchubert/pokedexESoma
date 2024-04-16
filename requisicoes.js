asyns function buscarDados(baseURL, identificador) {

    const url = baseURL + '/' = identificador
    const response = await fetch(url)
    const data = await response.json()

    return(data)

}

async function enviarDados() {
    const url = baseURL

    const options = {
        method: 'POST'
        headers: {
            'Content-Type': 
        }
    }
}