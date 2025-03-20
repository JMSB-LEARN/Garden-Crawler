import { ClaseTrabajo } from "./claseTrabajo.js";
import { Inventario } from "./inventario.js";
import { Habilidad } from "./habilidad.js";

import { Segador } from "./segador.js";
import { Susurrador } from "./susurrador.js";
import { Cientifico } from "./cientifico.js";

export class Personaje {
    constructor(nombre, clase, arma, armadura) {
        this.nombre = nombre;
        this.clase = clase;
        this.vida = 100;
        this.dinero = 185; //§

        this.base = new Habilidad("General", "Descripcion Niveles", null)

        this.recolecion = new Habilidad("Recoleccion", "Descripcion Recoleciion", this.base);
        this.sembrado = new Habilidad("Sembrado", "Descripcion Sembrado", this.base);
        this.hibridacion = new Habilidad("Hibridacion", "Descripcion Hibridacion", this.base);
        
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
    
    ganarDinero(cantidad){
        this.dinero+=cantidad;
    }

    serializar() {
        return JSON.stringify({
            nombre: this.nombre,
            clase: this.clase.nombre,
            vida: this.vida,
            dinero: this.dinero,
            base: this.base,
            recolecion: this.recolecion,
            sembrado: this.sembrado,
            hibridacion: this.hibridacion,
            inventario: this.inventario.slots,
        });
    }

    static deserializar(jsonString) {
        const data = JSON.parse(jsonString);
    
        const clases = { Segador, Susurrador, Cientifico };
        let claseTrabajo = clases[data.clase] || ClaseTrabajo;
    
        const personaje = new Personaje(data.nombre, claseTrabajo);
    
        personaje.vida = data.vida;
        personaje.dinero = data.dinero;
    
        // Restaurar habilidades correctamente
        personaje.base = new Habilidad(
            data.base.nombre,
            data.base.descripcion,
            null
        );
    
        personaje.recolecion = new Habilidad(
            data.recolecion.nombre,
            data.recolecion.descripcion,
            personaje.base
        );
        personaje.recolecion.multiplicadorSubidaDeExperiencia;
        personaje.recolecion.ganarExperiencia(data.recolecion.experienciaTotalBruta);
    
        personaje.sembrado = new Habilidad(
            data.sembrado.nombre,
            data.sembrado.descripcion,
            personaje.base
        );

        personaje.sembrado.multiplicadorSubidaDeExperiencia;
        personaje.sembrado.ganarExperiencia(data.sembrado.experienciaTotalBruta);
    
        personaje.hibridacion = new Habilidad(
            data.hibridacion.nombre,
            data.hibridacion.descripcion,
            personaje.base
        );

        personaje.hibridacion.multiplicadorSubidaDeExperiencia;
        personaje.hibridacion.ganarExperiencia(data.hibridacion.experienciaTotalBruta);
    
        // Restaurar inventario correctamente
        personaje.inventario = new Inventario(data.inventario.length);
        personaje.inventario.slots = data.inventario;
    
        personaje.vida = data.vida;
        personaje.dinero = data.dinero;
    
        return personaje;
    }
    



}
