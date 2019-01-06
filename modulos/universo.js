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
        for (let pj=0;pj<pjs.length;pj++) {
            
            universo[dimension].push(pjs[pj]);
            
        }
        
        }

        universo.cambiarDimension = function (pjs,origen,destino){
           
            for (let pj=0;pj<pjs.length;pj++) {
                let index=universo[origen].indexOf(pjs[pj]);
                universo[origen].splice(index,1);
                
            }
            universo.insertarEnDimension(destino,pjs);
        }
    
    
    return this.universo;
}();




