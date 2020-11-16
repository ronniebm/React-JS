import '@testing-library/jest-dom';
import { getUser } from '../../base/05-funciones';

describe('testing Functions', () => {

    test('must return an object', () => {
        
        const userTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }

        const user = getUser();

        // when we need to compare if two objects are Equal with exactly 
        // the same properties, we must use 'toEqual()' property, because
        // 'toBe()' is not going to work !..   {} === {} will said false
        // due to they're comparing two different memory positions.
        expect( user ).toEqual( userTest );

    })


})