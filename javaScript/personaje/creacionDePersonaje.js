import { Personaje } from "./personaje.js";
import { Segador } from "./segador.js";
import { Susurrador } from "./susurrador.js";
import { Cientifico } from "./cientifico.js";
import { Armadura } from "../objetos/armadura.js";
import { Arma } from "../objetos/arma.js";
import { Tienda } from "../tienda.js";

document.addEventListener("DOMContentLoaded", () => {
    var personaje = window.personaje;

    if (!personaje) {
        console.error("No hay personaje cargado aún.");
        return;
    }


    console.log(personaje);
    console.log("gggggg");
    personaje.sembrado.ganarExperiencia(99);
    personaje.recolecion.ganarExperiencia(99);
    personaje.hibridacion.ganarExperiencia(99);

    personaje.ganarDinero(100000);
    
    const tienda = new Tienda();
    personaje.equiparObjeto(0);
    personaje.equiparObjeto(1);

    // Mostrar objetos en tienda
    tienda.mostrarObjetos();

    // Comprar objetos
    console.log("Intentando comprar espada...");
    tienda.comprarObjeto(0, personaje);

    console.log("Intentando comprar armadura...");
    tienda.comprarObjeto(1, personaje);

    // Mostrar estado final del personaje
    console.log(`Dinero restante del personaje: ${personaje.dinero}`);
    personaje.inventario.mostrarInventario();

});