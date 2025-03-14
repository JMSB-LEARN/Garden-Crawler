import { ClaseTrabajo } from "./claseTrabajo.js";

export class Cientifico extends ClaseTrabajo {
    static nombre = "Cientifico";
    static descripcion = "Centrada en conseguir mas recursos";

    static getNombre() {
        return this.nombre;
    }

    static getDescripcion() {
        return this.descripcion;
    }
}