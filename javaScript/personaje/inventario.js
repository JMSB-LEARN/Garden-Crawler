import { Objeto } from "../objetos/objeto.js";

export class Inventario {
    index;
    tamanno;
    slots;
    constructor(tamanno) {
        if(!tamanno){
            tamanno=10
        }
        this.tamanno = tamanno;
        this.slots = new Array(tamanno).fill(null);;
        this.index = 0;
    }
    push(objeto) {
        if (this.index >= this.tamanno) {
            console.log("El inventario está lleno.");
            return;
        }
        this.slots[this.index++] = objeto;
    }
    
    convertirEnObjeto(index) {
        if (index && typeof index === 'object' && 'objeto' in index) {
            return index.objeto;
        }
        return this.slots[index]?.objeto;
    }
    


    mostrarInventario() {
        this.slots.forEach((item, i) => {
            if (item)
                console.log(`[${i}] ${item.objeto.nombre} - ${item.objeto.descripcion}`);
            else
                console.log(`[${i}] (vacío)`);
        });
    }
    getObjeto(indiceIGO){
        console.log(window.IGO)
        let temp= window.IGO.inventario.slots[indiceIGO];
        return temp;
    }
}
