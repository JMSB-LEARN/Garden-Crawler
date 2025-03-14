import { Objeto } from "./objeto.js";

export class Arma extends Objeto {
    ataque;
    constructor(nombre, descripcion, precio, ataque) {
        super(nombre, descripcion, precio)
        this.ataque = ataque
    }
    
    getEstadisticas() {
        return `${this.nombre} - Ataque: ${this.ataque}`;
    }

}