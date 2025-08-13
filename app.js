const campoNombre = document.getElementById("amigo");
const btnAdd = document.querySelector(".button-add");
const btnDraw = document.querySelector(".button-draw");
const lista = document.getElementById("listaAmigos");

let listaAmigos = [];

function cambiarTextoEn(selector, texto) {
    const elemento = document.querySelector(selector);
    elemento.innerHTML = texto;
}


function agregarAmigo() {
    cambiarTextoEn("#resultado", "");
    if (campoNombre.value !== "") {
        const elementoLi = document.createElement("li");
        elementoLi.textContent = campoNombre.value;
        lista.appendChild(elementoLi);
        listaAmigos.push(campoNombre.value);
        campoNombre.value = "";
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert("No hay amigos para sortear.");
        return;
    }
    const indice = getRandomInt(listaAmigos.length);
    lista.innerHTML = "";
    cambiarTextoEn("#resultado", `El amigo secreto sorteado es: ${listaAmigos[indice]}`);
    listaAmigos = [];
}
