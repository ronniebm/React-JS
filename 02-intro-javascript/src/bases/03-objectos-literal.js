const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 565654,
        lat: 14.2352,
        long: 34.9854,
    }
};

const persona2 = { ...persona };

persona2.nombre = 'Tonicito'
console.log( persona2 );
console.log( persona );
