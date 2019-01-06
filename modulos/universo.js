//Universo Singleton
module.exports = function getUniverso() {
    if(!this.universo){
        universo={
            length:0
        }
    }

    universo.crearDimension= function(mundo,contenedor){
        universo[mundo]=contenedor;
        universo.length ++;
    }

    universo.insertarEnDimension= function(dimension,pjs){
        for(pj in pjs){
            universo[dimension].push(pj);
        }
        }
    
    
    return this.universo;
}();




