const calc = require('./../script').calcGraph;

describe('should test all scenarios', () => {

    it('should check if it can find cycle', () => {
        expect(calc('./fixtures/01.txt')).toBeTruthy();
    });

    it('should check if it can find cycle', () => {
        expect(calc('./fixtures/02.txt')).toBeFalsy();
    });

    it('should check if it can find cycle', () => {
        expect(calc('./fixtures/03.txt')).toBeTruthy();
    })

});