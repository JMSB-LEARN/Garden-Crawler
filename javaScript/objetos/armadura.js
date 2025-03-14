import { Objeto } from "./objeto.js";

export class Armadura extends Objeto {
    defensa;
    constructor(nombre, descripcion, precio, defensa) {
        super(nombre, descripcion, precio)
        this.defensa = defensa
    }
    getEstadisticas() {
        return `${this.nombre} - Defensa: ${this.defensa}`;
    }

}