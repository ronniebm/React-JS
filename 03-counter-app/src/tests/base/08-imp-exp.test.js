import { getHeroeById, getHeroesByOwner } from '../../base/08-imp-exp';
import heroes from '../../base/data/heroes';


describe('Test in heroes function', () => {


    test('should return a hero by id', () => {
        
        const id =  1;
        const heroe = getHeroeById( id );
        const heroeData = heroes.find( h => h.id = id );

        expect( heroe ).toEqual( heroeData )
    });


    test('should return undefined if hero does not exists', () => {
        
        const id =  10;
        const heroe = getHeroeById( id );

        expect( heroe ).toBe( undefined );
    });


    test('should return an array with DC heroes', () => {
        
        const owner = 'DC';
        const heroes = getHeroesByOwner( owner );
        const heroesFilter = heroes.filter( h => h.owner === owner );

        expect( heroesFilter ).toEqual( heroes );

    });


    test('should return lenght of Marvel heroes', () => {
        
        const owner = 'Marvel';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 2 );

    });


    test('should return 0 if it is a different owner', () => {
        
        const owner = 'Other';
        const heroes = getHeroesByOwner( owner );

        expect( heroes.length ).toBe( 0 );

    });


});