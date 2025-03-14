import { ClaseTrabajo } from "./claseTrabajo.js";

export class Segador extends ClaseTrabajo {
    static nombre = "Segador";
    static descripcion = "Centrada en la velocidad de recoleccion";

    static getNombre() {
        return this.nombre;
    }

    static getDescripcion() {
        return this.descripcion;
    }
}