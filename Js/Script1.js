// Ejercicio 1

window.onload = InicializarEventos;


function InicializarEventos()
{
    document.getElementById("btn1").addEventListener("click", saludar, true);
}

function saludar()
{
    alert("Hola Mundo !!");
}