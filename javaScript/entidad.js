export class Entidad {

    constructor(vidaMaxima, inventario, ataque, defensa) {
        this.vidaMaxima = vidaMaxima;
        this.vida = this.vidaMaxima;
        this.inventario = inventario;
        this.ataque = ataque;
        this.defensa = defensa;
    }

    atacar(entidadRecibe) {
        entidadRecibe.recibirAtaque(this.ataque);
    }
    recibirAtaque(dannoEntrada) {
        if (dannoEntrada < 0) {
            dannoEntrada = 0;
        }
        this.vida -= this.ataque - this.defensa;
    }

    annadirItem(objeto) {
        if (!objeto) return;
        this.inventario.push(objeto);
    }

    equiparObjeto(posicionInventario) {
        if(posicionInventario===null||posicionInventario===undefined){
            return
        }
        debugger;
        let inventario = this.inventario;
        let slotInventario = inventario.slots[posicionInventario];
        let objetoSlot = slotInventario.objeto;
        switch (slotInventario.tipo) {
            case "Arma": inventario.armaEquipada = objetoSlot.ataque;
                break;
            case "Armadura": inventario.armaduraEquipada = objetoSlot.defensa;
                break;
        }
        this.calcularEstadisticas(slotInventario);
    }
    calcularEstadisticas(objetoCalcular) {
        switch (objetoCalcular.tipo) {
            case "Arma":
                this.ataque = this.inventario.armaEquipada.ataque;
                break;
            case "Armadura":
                this.defensa = this.inventario.armaduraEquipada.defensa;
                break;
        }
    }
}