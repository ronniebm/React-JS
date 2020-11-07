//Funciones en JS

const saludar = function(nombre) {
    return `Hola, ${ nombre }`;
}

// función flecha aun no simplificada
const saludar2 = (nombre) => {
    return `Hola, ${ nombre }`;
}

const saludar3 = (nombre) => `Hola, ${ nombre }`;
const saludar4 = () => `Hola Mundo...`;

console.log(saludar('Ronnie'));
console.log(saludar2('Tony Stark !!!'));
console.log(saludar2('Goku !'));
console.log( saludar4() );

// para devolver un objeto con función flecha debo encerrarlo con parentesis 
const getUser = () => (
    {
        uid: 'ABC123',
        userName: 'Soy_Goku_01', 
    }
);

console.log(getUser());


// Creando una función retornando un usuario de ejemplo
function getUsuarioActivo2(nombre) {
    return {
        uid: 'ABC567',
        username: nombre,
    }
};

const usuarioActivo2 = getUsuarioActivo2('Ronnie');
console.log( usuarioActivo2 );

// Transformando la función anterior a función flecha
const getUsuarioActivo = (nombre) => ({
    uid: 'ABC567',
    username: nombre,
});

console.log( getUsuarioActivo('Steven') );
