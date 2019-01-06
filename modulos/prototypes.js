module.exports = function getPersonaje(personaje) {
  //objeto contendor de los personajes
  personajes = {
    //Rick utilizando Singleton
    Rick: (function getRick() {
      let numero = 137;
      let mundo = 'C-';
      if (!this.Rick) {
        Rick = { id: mundo+numero, ondas: 'altas', habla: 'Es Rick-dículo!' };
      }
      return this.Rick;
    })(),

    //Morti utilizanod Singleton
    Morty: (function getMorty() {
      if (!this.Morty) {
        Morty = {
          id: 'earthMorty',
          ondas: 'bajas',
          partner: Rick,
          habla: 'Oohh man!'
        };
      }

      return this.Morty;
    })(),

    //Jerry
    Jerry: (function getJerry() {
      if (!this.Jerry) {
        Jerry = {
          id: 'Jerry',
          monedas: ['R2-D2', 1, 2, 3],
          speak: () => 'Tengo una colección de monedas antiguas raras!'
        };
      }

      return this.Jerry;
    })()
  };

  //Devolvemos el objeto que se pida por parametro
  return personajes[personaje];
};
