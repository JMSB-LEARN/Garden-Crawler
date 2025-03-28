export class combate {
    constructor(personaje, enemigo) {
        this.personaje = personaje;
        this.enemigo = enemigo;
    }
    luchar(){
        let combateFinalizado=false;
        while(!combateFinalizado){
            this.personaje.atacar(this.enemigo);
            this.enemigo.atacar(this.enemigo);

        }
    }
}