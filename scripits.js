
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")



async function convertermoedas() {

    let moedas = await fetch(" https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL").then(function (resposta) {
        return resposta.json()
    })

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high

    let inputValorEmReais = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoreal = document.getElementById("texto-real")
    if (select.value === "US$ Dólar Americano") {
        let valorEmDolares = inputValorEmReais / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
    }


    if (select.value === "€ Euro") {
        let valorEmeuros = inputValorEmReais / euro
        inputMoedas.innerHTML = valorEmeuros.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' })
    }


    textoreal.innerHTML = inputValorEmReais.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
}

// essa funçao é responsavel por trocar a bandeira e o nome das moedas
function trocadeMoedas() {
    let textomoedas = document.getElementById("texto-moedas")
    let bandeiramoedas = document.getElementById("bandeira-moedas")


    if (select.value === "US$ Dólar Americano") {
        textomoedas.innerHTML = "Dólar Americano"
        bandeiramoedas.src = "./IMG/EUA.png"

    }

    if (select.value === "€ Euro") {
        textomoedas.innerHTML = "Euro"
        bandeiramoedas.src = "./IMG/EURO.png"
    }


    convertermoedas()


}
botao.addEventListener("click", convertermoedas)
select.addEventListener("change", trocadeMoedas)







