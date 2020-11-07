// Desestructuración
// Asignación desestructurante
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman',
    uid: 'AXY568'
};

/* const {nombre, edad, clave} = persona; */

/* console.log( nombre, edad, clave); */
/* console.log( persona.edad );
console.log( persona.clave ); */

const usarContext = ( { clave, nombre, edad, uid = 'NOT REGISTERED' } ) => {
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }
}

const {nombreClave, anios, latlng:{lat, lng}} = usarContext( persona );
console.log(nombreClave, anios);
console.log(lat, lng);