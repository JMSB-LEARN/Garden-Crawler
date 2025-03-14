import { Inventario } from "./personaje/inventario.js";

export class Tienda {
    constructor() {
        this.inventario = new Inventario(50); // Inventario más grande para la tienda
    }

    agregarObjetoVenta(objeto) {
        this.inventario.push(objeto);
    }

    mostrarObjetos() {
        console.log("Objetos disponibles en la tienda:");
        this.inventario.slots.forEach((item, i) => {
            if (item)
                console.log(`[${i}] ${item.nombre} - ${item.descripcion} - Precio: ${item.precio}`);
        });
    }

    comprarObjeto(indice, personaje) {
        const objeto = this.inventario.slots[indice];

        if (!objeto) {
            console.log("El objeto seleccionado no existe.");
            return;
        }

        if (personaje.dinero >= objeto.precio) {
            personaje.dinero -= objeto.precio;
            personaje.equiparItem(objeto);
            this.inventario.slots[indice] = null;
            console.log(`${personaje.nombre} ha comprado ${objeto.nombre}.`);
        } else {
            console.log("Dinero insuficiente para comprar este objeto.");
        }
    }
}
