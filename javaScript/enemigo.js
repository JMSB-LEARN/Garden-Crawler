import { Entidad } from "./entidad";

export class enemigo extends Entidad {
    constructor(vida, nombre, descripcion, tipoEnemigo, experienciaVencido, dineroVencido, sonidoArray, ataqueArray, inventario) {
        super(vida,inventario,0,0);
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.tipoEnemigo = tipoEnemigo;
        this.experienciaVencido = experienciaVencido;
        this.dineroVencido = dineroVencido;
        this.sonidoArray = sonidoArray;
        this.ataqueArray = ataqueArray;
    }
}