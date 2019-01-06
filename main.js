/**
 * Importa los módulos de tus clases
 */

const pjproto = require('./modulos/prototypes.js');
const clonar = require('./modulos/clonar.js');
const universo = require('./modulos/universo');
const gun = require('./modulos/portalGun');
const doofous = require('./modulos/doofous');

console.log(pjproto('Rick'));
console.log(pjproto('Morty'));
console.log(pjproto('Jerry'));

/////////////////////////////////////////////////////////////
/**
 * Crea el objeto Rick
 */

const protoRick = pjproto('Rick');

console.assert(protoRick);
console.assert(protoRick.id == 'C-137');
console.assert(protoRick.ondas == 'altas');
console.assert(protoRick.habla == 'Es Rick-dículo!');

/////////////////////////////////////////////////////////////

/**
 * Crea el objeto Morty
 */

const protoMorty = pjproto('Morty');

console.assert(protoMorty);
console.assert(protoMorty.id == 'earthMorty');
console.assert(protoMorty.ondas == 'bajas');
console.assert(protoMorty.partner == protoRick);
console.assert(protoMorty.habla == 'Oohh man!');

/////////////////////////////////////////////////////////////

/**
 * Crea el objeto Jerry
 */

const jerry = pjproto('Jerry');

console.assert(jerry);
console.assert((jerry.id = 'Jerry'));
console.assert(jerry.monedas.length == 4);
console.assert(jerry.monedas[0] == 'R2-D2');
console.assert(
  jerry.speak() == 'Tengo una colección de monedas antiguas raras!'
);

/////////////////////////////////////////////////////////////

/**
 * Crea 2 Rick-clones y 1 clon de Morty
 * y asocia como partner de ese Morty a uno de los Rick-clones.
 */


let clon = clonar(protoRick);

const clonRick = clonar(protoRick);

const otroRick = clonar(protoRick);

const clonMorty = clonar(protoMorty);
clonMorty.partner = clonRick;

console.assert(clonRick);
console.assert(protoRick != clonRick);
console.assert(Object.getPrototypeOf(clonRick) == protoRick);
console.assert(clonRick.id != 'C-137');
console.assert(clonRick.ondas == 'altas');
console.assert(clonRick.habla == 'Es Rick-dículo!');

console.assert(otroRick);
console.assert(protoRick != otroRick);
console.assert(Object.getPrototypeOf(otroRick) == protoRick);
console.assert(otroRick.id != 'C-137');
console.assert(otroRick.ondas == 'altas');
console.assert(otroRick.habla == 'Es Rick-dículo!');

console.assert(clonMorty);
console.assert(clonMorty != protoMorty);
console.assert(Object.getPrototypeOf(clonMorty) == protoMorty);
console.assert(clonMorty.ondas == 'bajas');
console.assert(clonMorty.partner == clonRick);

/**
 * Crea el objeto universo
 */

//Esta en las importaciones arriba

/**
 * Crea la primera dimensión, el `Array` mundo `Tierra`,
 * mete en él a los 6 objetos que has creado (Rick, Morty y Jerry,
 * 2 rick-clones y 1 clon de Morty) y añádelo al objeto `universo`.
 */

let tierra = [];
let pasanDimension = [
  jerry,
  protoRick,
  protoMorty,
  clonRick,
  otroRick,
  clonMorty
];

universo.crearDimension('Tierra', tierra);
universo.insertarEnDimension('Tierra', pasanDimension);

console.assert(tierra);
console.assert(Object.getPrototypeOf(tierra) == Array.prototype);
console.assert(tierra.length == 6);
console.assert('Tierra' in universo);
console.assert(universo.length == 1);

/**
 * Crea el objeto portal gun / pistola de portales.
 *
 * Dale la pistola al protoRick para que la dispare.
 * Pon a la tierra en el principio del historial de dimensiones de la pistola.
 *
 * Rick dispara la pistola y se añade al universo la dimensión "Fart"
 *  */

//creada arriba en los imports

console.assert(gun);
console.assert(gun.historial.length == 1);

//Rick dispara
protoRick.disparar(gun, 'Fart');

console.assert('Fart' in universo);
console.assert(universo.length == 2);

/**
 * Todos SALVO Jerry cruzan a la dimensión "Fart".
 * Has de eliminarlos del mundo tierra y meterlos en la nueva dimensión "Fart".
 *
 * Es necesaria una función cruzarDimension para ser reutilizada posteriormente.
 * Puedes situarla en aquel componente que estimes más adecuado.
 *
 * La pistola añade a su historial "Fart".
 */

//Los protagnistas cambian de dimension y se van a Fart

pasanDimension = [protoRick, protoMorty, clonRick, otroRick, clonMorty];
universo.cambiarDimension(pasanDimension, 'Tierra', 'Fart');

console.assert(universo['Fart'].length == 5);
console.assert(universo['Tierra'].length == 1);
console.assert(gun.historial.length == 2);

/**
 * Si haces un scan de la pistola, se muestra en consola
 * la lista de dimensiones, desde la más reciente a la más
 * antigua: Fart, Tierra.
 */


console.log(gun.scan());
console.assert(gun.historial.length == 2);

/**
 * Rick dispara la pistola y se añade al universo la dimensión "Coaches".
 */

//Rick dispara el arma y crea Coach
protoRick.disparar(gun, 'Coach');

console.assert('Coach' in universo);
console.assert(universo.length == 3);

/**
 * Los cuatro cruzan a la dimensión "Coach".
 *
 * Has de eliminarlos del mundo "Fart" y meterlos en la nueva dimensión "Coach".
 *
 * La pistola añade a su historial "Fart".
 *
 * Si haces un scan de la pistola, se muestra en consola
 * Coaches, Fart, Tierra.
 */

universo.cambiarDimension(pasanDimension, 'Fart', 'Coach');

console.assert(universo['Coach'].length == 5);
console.assert(universo['Fart'].length == 0);
console.assert(universo['Tierra'].length == 1);
console.log(gun.scan());
console.assert(gun.historial.length == 3);



/**
 * Crea un Doofus Rick segun se indica en el README
 */

// var extend = function extender(protoRick, jerry) {
//     var names = Object.getOwnPropertyNames(jerry);
//                 for(var i = 0; i < names.length; i++) {
//                     if (names[i] in protoRick) continue;
//                     var desc = Object.getOwnPropertyDescriptor(jerry,names[i]);
//                     Object.defineProperty(protoRick, names[i], desc);
//                 }
//     return protoRick;
// };


console.assert(doofous);
console.assert(doofous.id == 'J-19-Z7');
console.assert(doofous.ondas == 'altas');
console.assert(doofous.monedas.length == 4);
console.assert(
  doofous.speak() == 'Tengo una colección de monedas antiguas raras!'
);
