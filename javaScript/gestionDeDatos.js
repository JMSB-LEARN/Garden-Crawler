import { Personaje } from "./personaje/personaje.js";
import { Segador } from "./personaje/segador.js";
import { Susurrador } from "./personaje/susurrador.js";
import { Cientifico } from "./personaje/cientifico.js";

window.personaje = null;

function guardarPersonaje(personaje) {
    localStorage.setItem('personajeGuardado', personaje.serializar());
}

function cargarPersonaje() {
    const personajeGuardado = localStorage.getItem('personajeGuardado');
    if (personajeGuardado) {
        return Personaje.deserializar(personajeGuardado);
    } else {
        console.warn('No existe un personaje guardado.');
        return null;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    window.personaje = cargarPersonaje();
    
    if (!window.personaje) {
        console.log('No existe un personaje guardado, creando uno nuevo...');
        window.personaje = new Personaje("Aventurero", Segador);
        guardarPersonaje(window.personaje);
    } else {
        console.log('Personaje cargado correctamente:', window.personaje);
    }
});


window.addEventListener("beforeunload", () => {
    if (window.personaje) {
        guardarPersonaje(window.personaje);
        console.log('Personaje guardado automáticamente.');
    }
});
