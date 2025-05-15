import { ClaseTrabajo } from "./claseTrabajo.js";
import { Inventario } from "./inventario.js";
import { Habilidad } from "./habilidad.js";

import { Segador } from "./segador.js";
import { Susurrador } from "./susurrador.js";
import { Cientifico } from "./cientifico.js";
import { Arma } from "../objetos/arma.js";
import { Armadura } from "../objetos/armadura.js";
import { Entidad } from "../entidad.js";

export class Personaje extends Entidad {
    constructor(nombre, clase, arma, armadura) {
        super(100, new Inventario(20), 0, 0);
        this.nombre = nombre;
        this.clase = clase;
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

        if (arma) this.annadirItem(arma);
        if (armadura) this.annadirItem(armadura);

    }


    ganarDinero(cantidad) {
        this.dinero += cantidad;
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
            inventarioSlots: this.inventario.slots,
            inventarioIndice: this.inventario.index,
            armaEquipada:this.inventario.armaEquipada,
            armaduraEquipada:this.inventario.armaduraEquipada,
        });
    }
    serializarInventario(slotsInventario) {
        let idsInventario = new Array(slotsInventario.length);
        idsInventario.forEach((slot, i) => {
            idsInventario[i] = slot.getId()
        });
    }


    static deserializar(jsonString) {
        const data = JSON.parse(jsonString);

        const clases = { Segador, Susurrador, Cientifico };
        let claseTrabajo = clases[data.clase] || ClaseTrabajo;

        const personaje = new Personaje(data.nombre, claseTrabajo);
        let inventario= personaje.inventario;
        inventario = new Inventario(data.inventarioSlots.length);
        personaje.dinero = data.dinero;
        personaje.vidaMaxima = data.vidaMaxima;
        personaje.recolecion.ganarExperiencia(data.recolecion.experienciaTotalBruta);
        personaje.sembrado.ganarExperiencia(data.sembrado.experienciaTotalBruta);
        personaje.hibridacion.ganarExperiencia(data.hibridacion.experienciaTotalBruta);

        data.inventarioSlots.forEach((item, i) => {
            if (item) {
                inventario.push(inventario.getObjeto(item.id))
            }
        });
        debugger;
        equiparObjeto(data.armaEquipada)
        equiparObjeto(data.armaduraEquipada)
        return personaje;
    }


}
