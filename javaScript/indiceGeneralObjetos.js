import { objetoGeneral } from "./objetoGeneral.js";
import { Arma } from "./objetos/arma.js";
import { Armadura } from "./objetos/armadura.js";
import { Inventario } from "./personaje/inventario.js";

export class IndiceGeneralObjetos {
    inventario = new Inventario(256)
    constructor() {
        this.annadirObjeto(0,null,false,false)
        this.annadirObjeto(1, "Arma", new Arma("Espada Familiar", "Te la dio tu padre", 180, 30), true, false);
        this.annadirObjeto(2, "Armadura", new Armadura("Armadura Familiar", "Te la dio tu madre", 140, 18), true, false);
        this.annadirObjeto(3, "Arma", new Arma("Espada", "Una espada poderosa", 120, 25), true, true);
        this.annadirObjeto(4, "Armadura", new Armadura("Armadura de Cuero", "Protección ligera", 90, 15), true, true);
        this.annadirObjeto(5, "Arma", new Arma("Espadon", "Una espada mas poderosa", 200, 35), false, true);
        this.annadirObjeto(6, "Armadura", new Armadura("Armadura de Cuero Bueno", "Protección media", 130, 20), false, true);

    }


    annadirObjeto(id, tipo, objeto, inicial, disponibleTienda) {
        this.inventario.push(new objetoGeneral(id, tipo, objeto, inicial, disponibleTienda))
    }
}