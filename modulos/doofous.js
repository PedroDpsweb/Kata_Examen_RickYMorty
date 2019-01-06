const prototypes = require('./prototypes');
const protoRick = prototypes("Rick");

module.exports = function getDoofous(){
  let doofous = Object.create(protoRick);
  doofous.id = 'J-19-Z7';
  doofous.ondas = 'altas';
  doofous.monedas = ['moneda1', 'moneda2', 'moneda3', 'moneda4'];
  doofous.speak = () => 'Tengo una colección de monedas antiguas raras!';

  return doofous;
}();






  // var extend = function extender(protoRick, jerry) {
  //     var names = Object.getOwnPropertyNames(jerry);
  //                 for(var i = 0; i < names.length; i++) {
  //                     if (names[i] in protoRick) continue;
  //                     var desc = Object.getOwnPropertyDescriptor(jerry,names[i]);
  //                     Object.defineProperty(protoRick, names[i], desc);
  //                 }

  //     console.log(protoRick);
  //     return extend(protoRick,jerry);
  // };
