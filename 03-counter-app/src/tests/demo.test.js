
describe('All the tests', () => {

    test('strings must be EQUAL', () => {
    
        // 1. initialization, preparation of what we want to do.
        const msg = 'Hello world';
        
        // 2. stimulation.
        const msg2 = `Hello world`;
    
        // checking response.
        expect(msg).toBe(msg2); // ===
        
    })

})



