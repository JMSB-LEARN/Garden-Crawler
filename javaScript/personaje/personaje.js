import { ClaseTrabajo } from "./claseTrabajo.js";
import { Inventario } from "./inventario.js";
import { Habilidad } from "./habilidad.js";
export class Personaje {
    constructor(nombre, clase, arma, armadura) {
        this.nombre = nombre;
        this.clase = clase;
        this.vida = 100;
        this.dinero = 185; //§

        this.base= new Habilidad ("General", "Descripcion Niveles",null)

        this.recolecion = new Habilidad("Recoleccion", "Descripcion Recoleciion",this.base);
        this.sembrado = new Habilidad("Sembrado", "Descripcion Sembrado",this.base);
        this.hibridacion = new Habilidad("Hibridacion", "Descripcion Hibridacion",this.base);
        switch (clase.name) {
            case "Segador":
                this.recolecion.multiplicadorSubidaDeExperiencia += 0.3;
                break;
            case "Susurrador":
                this.sembrado.multiplicadorSubidaDeExperiencia += 0.3;
                break;
            case "Cientifico":
                this.hibridacion.multiplicadorSubidaDeExperiencia += 0.3;
                break;
            default:
                console.warn(`Clase desconocida: ${clase.classname}`);
                break;
        }
        this.inventario = new Inventario(20);

        if (arma) this.equiparItem(arma);
        if (armadura) this.equiparItem(armadura);

    }

    equiparItem(objeto) {
        if (!objeto) return;
        this.inventario.push(objeto);
    }

}
