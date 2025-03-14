import { Personaje } from "./personaje.js";
import { Segador } from "./segador.js";
import { Susurrador } from "./susurrador.js";
import { Cientifico } from "./cientifico.js";
import { Armadura } from "../objetos/armadura.js";
import { Arma } from "../objetos/arma.js";
const personaje = new Personaje("test", Segador, new Arma("Hoz", "Sirve para cosechar", 12, 5), new Armadura("Arpillera", "Esta hecha de tela", 7, 2));
console.log(personaje);
personaje.sembrado.ganarExperiencia(99);
console.log(personaje);
personaje.sembrado.ganarExperiencia(2);
console.log(personaje);
console.log("Sembrado");
personaje.sembrado.ganarExperiencia(1002);
console.log("Hibridacion");
personaje.hibridacion.ganarExperiencia(2002);
console.log("Cosecha");
personaje.cosecha.ganarExperiencia(1002);