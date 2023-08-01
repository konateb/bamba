import prompt from "prompt-sync";
import { add, sub, getRandom } from "./utils/helpers.js";
//l'appel de fonction getRandom. Math.floor donne les nombres entiers
let r = Math.floor(getRandom());
console.log("Aleatoire : ", r);
//demande de tapper le premier nombre
let nombre1 = prompt()("taper le premier: ");
//demande de tapper le second nombre
let nombre2 = prompt()("taper le second: ");
//l'appel de fonction add
let somme = add(nombre1, nombre2);
//l'appel de fonction add
let difference = sub(nombre1, nombre2);

//imprimer les resultats dans le terminal
console.log("la somme : ", somme);
console.log("la differance: ", difference);
