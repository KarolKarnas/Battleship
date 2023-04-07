import Ship from './Ship';
let ship1 = new Ship();

describe('Ship factory', () => {
	beforeEach(() => {
		ship1 = new Ship();
	});

	test('is new Ship object', () => {
		expect(typeof ship1).toBe('object');
	});

	test('is new Ship by default hits === 0', () => {
		expect(ship1.hits).toBe(0);
	});


	test('is new Ship by default length === 4', () => {
		expect(ship1.length).toBe(4);
	});

    test('is hits increase after ship.hit()', () => {
        ship1.hit()
        expect(ship1.hits).toBe(1)
    })
    test('will ship sunk = true when num hits = length', () => {
        for(let i = 0; i < ship1.length; i++) {
            ship1.hit();
        }
        expect(ship1.hits).toBe(4);
    })
});
