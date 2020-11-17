import { getHeroeByIdAsync } from '../../base/09-promesas'
import heroes from '../../base/data/heroes';

describe('Test with promises', () => {
    

    test('getHeroeByIdAsync should return a hero async', ( done ) => {
        
        const id = 1;

        getHeroeByIdAsync( id )
            .then( heroe => {
                expect( heroe ).toBe( heroes[0] );
                done();
            });

    });


    test('should return error msh if hero by id does not exists', (done) => {
        
        const id = 10;
        getHeroeByIdAsync( id )
            .catch( e => {
            
                expect( e ).toBe( 'No se pudo encontrar el héroe' );
                done();
            });

    });

})