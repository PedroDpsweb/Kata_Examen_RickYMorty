const universo = require('./universo');

module.exports = (function getGun() {
  if (!this.gun) {
    gun = { historial: ['Tierra'] };
  }

  //funcion para crear dimensiones
  gun.crearPortal = function(dimension) {
    let contenedor = [];
    universo.crearDimension(dimension, contenedor);
    gun.historial.unshift(dimension);
  };

  gun.scan = function getHistorial() {
    return gun.historial;
  };

  return gun;
})();
