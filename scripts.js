
let botao = document.getElementById("botao")
let select = document.getElementById("select-moedas")

//funcão que vai buscar os valores no servidor e mostra os valores das moedas  atualizados do dia. 
async function converterMoedas() {
    let moedas = await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL,EUR').then(function (resposta) {
        return resposta.json()
    })


    let inputValoremReal = Number(document.getElementById("input").value)
    let inputMoedas = document.getElementById("input-moedas")
    let textoReal = document.getElementById("texto-real")

    let dolar = moedas.USDBRL.high
    let euro = moedas.EURBRL.high
    let Libra = 6.29
    let Iene = 0.035


    //Adicionar os valores mostrados na pagina.  
    if (select.value === 'US$ Dólar Americano') {
        let valorEmDolares = inputValoremReal / dolar
        inputMoedas.innerHTML = valorEmDolares.toLocaleString('en-us', { style: `currency`, currency: 'USD' })
    }
    if (select.value === '€ Euro') {
        let valorEmEuros = inputValoremReal / euro
        inputMoedas.innerHTML = valorEmEuros.toLocaleString('de-DE', { style: `currency`, currency: 'EUR' })
    }

    if (select.value === '£ Libra') {
        let valorEmLibras = inputValoremReal / Libra
        inputMoedas.innerHTML = valorEmLibras.toLocaleString('en-GB', { style: `currency`, currency: 'GBP' })
    }

    if (select.value === '¥ Iene') {
        let valorEmIene = inputValoremReal / Iene
        inputMoedas.innerHTML = valorEmIene.toLocaleString('ja-JP', { style: `currency`, currency: 'JPY' })
    }

    textoReal.innerHTML = inputValoremReal.toLocaleString('pt-br', { style: `currency`, currency: 'BRL' })
}



//Botão de trocar moedas 

function trocaDemoeda() {
    let textoMoedas = document.getElementById('texto-moedas')
    let bandeirasMoedas = document.getElementById('bandeiras-moedas')
    if (select.value === 'US$ Dólar Americano') {
        textoMoedas.innerHTML = 'Dólar Americano'
        bandeirasMoedas.src = './Usa.png'
    }

    if (select.value === '€ Euro') {
        textoMoedas.innerHTML = 'Euro'
        bandeirasMoedas.src = './ueuropeia.png'
    }

    if (select.value === '£ Libra') {
        textoMoedas.innerHTML = 'Libra'
        bandeirasMoedas.src = './runido.png'
    }

    if (select.value === '¥ Iene') {
        textoMoedas.innerHTML = 'Iene'
        bandeirasMoedas.src = './japan.png'

    }

    converterMoedas()
}

//Selecionar os botões

botao.addEventListener("click", converterMoedas)
select.addEventListener("change", trocaDemoeda)