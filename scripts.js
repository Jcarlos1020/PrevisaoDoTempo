

const key = "13e955f24931ecccede3e1ab5f36499f"


function dadosNaTela(dados) {

    document.querySelector(".cidade").innerHTML = dados.name
    document.querySelector(".temperatura").innerHTML = Math.floor(dados.main.temp) + " °C"
    document.querySelector(".clima").innerHTML = dados.weather[0].description
    document.querySelector(".porcentagem").innerHTML = dados.main.humidity + " % "
    document.querySelector(".vento").innerHTML = "velocidade do vento: " + Math.floor(dados.wind.speed) + " km/h"
    document.querySelector(".maxima").innerHTML = "Max.: " + Math.floor(dados.main.temp_max) + "°"
    document.querySelector(".minima").innerHTML = "Min.: " + Math.floor(dados.main.temp_min) + "°"
    document.querySelector(".nuven").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png `
    console.log(dados);
}


async function buscaCidade(city) {

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then(response => response.json())

    dadosNaTela(dados)
}


function clickButon() {

    const city = document.querySelector(".input-1").value

    buscaCidade(city)
}