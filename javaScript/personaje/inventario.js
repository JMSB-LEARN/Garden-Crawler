import { Objeto } from "../objetos/objeto.js";

export class Inventario {
    index;
    tamanno;
    slots;
    constructor(tamanno) {
        this.tamanno = tamanno;
        this.slots = new Array(tamanno).fill(null);;
        this.index = 0;
    }
    push(objeto) {
        if (this.index >= this.tamanno) {
            console.log("El inventario está lleno.");
            return;
        }
        this.slots[this.index++] = objeto;
    }

    mostrarInventario() {
        this.slots.forEach((item, i) => {
            if (item)
                console.log(`[${i}] ${item.nombre} - ${item.descripcion}`);
            else
                console.log(`[${i}] (vacío)`);
        });
    }
}
