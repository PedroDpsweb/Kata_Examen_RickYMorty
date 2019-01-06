module.exports = function clonar(personaje) {
    let clon = Object.create(personaje);
    clon.id=personaje.id+Math.floor(Math.random()*10);
    return clon
}