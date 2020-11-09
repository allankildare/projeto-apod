let botao = document.getElementById("botao")
let botaoHoje = document.getElementById("hoje")
let key = 'laQUTbkbRZHvE99chEF5U8VBcDOnqgHcBH2zlnDI'

let container = document.getElementById("imagem-apod")


let req = new XMLHttpRequest()

// carregando foto de hoje da APOD 
req.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${key}`, false)
req.addEventListener("load", function () {
    if ( this.status === 200 && this.readyState === 4) {
        let dados = JSON.parse(req.responseText)
        console.log(dados)
        let img = dados.url

        container.innerHTML += `<img src="${img}" class="img-apod" id="imagem">`
    }
})
req.send()

let newReq = new XMLHttpRequest()

// botao para data especifica
botao.addEventListener("click", function () {
    let date = document.getElementById("data").value
    
    newReq.onreadystatechange = function () {
        if ( this.status === 200 && this.readyState === 4) {
            let dados = JSON.parse(newReq.responseText)
            let img = dados.url
            imagem.src = img
        }
    }
    newReq.open('GET', `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`, false)
    newReq.send()
})