module.exports = function getPersonaje(personaje) {
  //objeto contendor de los personajes
  personajes = {
    //Rick
    Rick: (function getRick() {
      Rick = { id: 'C-137', ondas: 'altas', habla: 'Es Rick-dículo!' };
      return Rick;
    })(),

    //Morti
    Morty: (function getMorty() {
      Morty = {
        id: 'earthMorty',
        ondas: 'bajas',
        partner: Rick,
        habla: 'Oohh man!'
      };
      return Morty;
    })(),

    //Jerry
    Jerry: (function getJerry() {
      Jerry = {
        id: 'Jerry',
        monedas: ['R2-D2', 1, 2, 3],
        speak: () => 'Tengo una colección de monedas antiguas raras!'
      };
      return Jerry;
    })()
  };

//Devolvemos el objeto que se pida por parametro
  return personajes[personaje];
};
