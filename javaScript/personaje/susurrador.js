import { ClaseTrabajo } from "./claseTrabajo.js";

export class Susurrador extends ClaseTrabajo {
    static nombre = "Susurrador";
    static descripcion = "Centrada en el reabastecimiento de plantas";

    static getNombre() {
        return this.nombre;
    }

    static getDescripcion() {
        return this.descripcion;
    }
}