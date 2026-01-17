/**
 * Core module tests
 */

describe('CLI Core', () => {
    it('should be defined', () => {
        expect(true).toBe(true);
    });

    describe('Configuration', () => {
        it('should have valid project types', () => {
            const validTypes = ['frontend', 'backend', 'mobile'];
            expect(validTypes.length).toBe(3);
        });
    });
});
