console.log('ABRIU A PAGINA')


function processarSoma() {
    console.log('PROCESSAR SOMA')
    const numeroUm = Number(document.getElementById('inputNumeroUm').value)
    const numeroDois = Number(document.getElementById('inputNumeroDois').value)

    const resultado = somaDoisNumeros(numeroUm, numeroDois)

    document.getElementById('resultadoSoma').innerText = resultado

}
async function processarPokemon() {

    const idPokemon = document.getElementById('idPokemon').value

    const baseURL = "https://pokeapi.co/api/v2/pokemon"
    const pokemon = await buscarDados(baseURL, idPokemon)

    document.getElementById('nomePokemon').innerText = pokemon.name
    document.getElementById('imagemPokemon').src = pokemon.sprites.front_default
    
}