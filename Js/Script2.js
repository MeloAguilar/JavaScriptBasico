window.onload = InicializarEventos;

var p = new Persona();

function InicializarEventos()
{
    document.getElementById("btn1").addEventListener("click", saludar, false);
}



function saludar() {
    var nombre = document.getElementById("nombre").value;
    var apellidos = document.getElementById("apellidos").value;
    p = {
        nombre: nombre,
        apellidos: apellidos
    }
    alert("Hola " + p.nombre + " " + p.apellidos);
}

class Persona{
    constructor(nombre, apellidos) {
    this.nombre = nombre;
    this.apellidos = apellidos;
    }
}


