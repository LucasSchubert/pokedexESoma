async function processarEnvioFormulario() {

    const nome = document.getElementById("inputNome").value
    const sobrenome = document.getElementById("inputSobrenome").value
    const email = document.getElementById("inputEmail").value
    const mensagem = document.getElementById("inputMensagem").value

    const url = "https://api-aula.up.railway.app/generica"
    const dados = {
        nome: nome,
        sobrenome: sobrenome,
        email: email,
        mensagem: mensagem
    }
    const retornoDaAPI = await enviarDados(url, dados)

    document.getElementById("resultadoEnvio").innerText = retornoDaAPI.mensagem

}