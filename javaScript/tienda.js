import { Arma } from "./objetos/arma.js";
import { Armadura } from "./objetos/armadura.js";
import { Inventario } from "./personaje/inventario.js";

export class Tienda {
    constructor() {
        this.inventario = new Inventario(50);
        console.log(window.IGO)
        window.IGO.inventario.slots.forEach((element) => { if (element) { if (element.disponibleTienda) { this.agregarObjetoVenta(element) } } });
    }

    agregarObjetoVenta(objeto) {
        this.inventario.push(objeto);
    }

    mostrarObjetos() {
        console.log("Objetos disponibles en la tienda:");
        this.inventario.slots.forEach((item, i) => {
            if (item) {
                console.log(item)
                item = item.objeto;
                console.log(item)
                console.log(`[${i}] ${item.nombre} - ${item.descripcion} - Precio: ${item.precio}`);
            }
        });
    }

    comprarObjeto(indice, personaje) {
        var objetoPadre = this.inventario.slots[indice];
        let objeto=objetoPadre.objeto;
        if (!objeto) {
            console.log("El objeto seleccionado no existe.");
            return;
        }

        if (personaje.dinero >= objeto.precio) {
            personaje.dinero -= objeto.precio;
            personaje.equiparItem(objetoPadre);
            console.log(`${personaje.nombre} ha comprado ${objeto.nombre}.`);
        } else {
            console.log("Dinero insuficiente para comprar este objeto.");
        }
    }
}
