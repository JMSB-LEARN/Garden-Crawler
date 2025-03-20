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
    console.log(personaje);
    personaje.sembrado.ganarExperiencia(2);
    console.log(personaje);
    console.log("Sembrado");
    personaje.sembrado.ganarExperiencia(12);
    console.log("Hibridacion");
    personaje.hibridacion.ganarExperiencia(22);
    console.log("Cosecha");
    personaje.recolecion.ganarExperiencia(10);
    personaje.ganarDinero(100);
    const tienda = new Tienda();

    // Creación de objetos
    const espada = new Arma("Espada", "Una espada poderosa", 120, 25);
    const armaduraCuero = new Armadura("Armadura de Cuero", "Protección ligera", 90, 15);

    // Añadir objetos a la tienda
    tienda.agregarObjetoVenta(espada);
    tienda.agregarObjetoVenta(armaduraCuero);
    tienda.agregarObjetoVenta(armaduraCuero);
    tienda.agregarObjetoVenta(armaduraCuero);

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
    localStorage.clear();

});