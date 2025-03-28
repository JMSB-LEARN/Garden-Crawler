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

}