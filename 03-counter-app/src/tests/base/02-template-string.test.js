import '@testing-library/jest-dom';
import { getSaludo } from '../../base/02-template-string';

describe('Tests on 02-template-string.js', () => {

    // getSaludo must return Hola <firstName>
    test('getSaludo must return Hola Ronnie!', () => {

        const firstName = 'Ronnie';
        const greeting = getSaludo(firstName);

        expect( greeting ).toBe( 'Hola ' + firstName + '!');
    })

    // getSaludo MUST return 'Hola Carlos!' if 'nombre' arg was not given.
    test('getSaludo wihout arg, must return "Hola Carlos!"', () => {

        const greeting = getSaludo();
        expect(greeting).toBe( 'Hola Carlos!');

    })


})
