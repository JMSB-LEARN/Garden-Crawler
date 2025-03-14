import { Personaje } from "./personaje.js";
export class Habilidad {
    constructor(nombre, descripcion,base) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.nivel = 1;
        this.experiencia = 0;
        this.limiteExperienciaNivel = 100;
        this.multiplicadorSubidaDeExperiencia=1;
        this.base=base;
    }

    ganarExperiencia(experienciaGanada) {
        this.experiencia += experienciaGanada *this.multiplicadorSubidaDeExperiencia;
        while (this.limiteExperienciaNivel <= this.experiencia) {
            if (this.base) {
                this.base.ganarExperiencia(this.limiteExperienciaNivel)
            }
            this.subirNivel();
        }

    }
    subirNivel() {
        this.nivel++;
        this.experiencia -= this.limiteExperienciaNivel;
        this.limiteExperienciaNivel *= 1.5
    }
} 