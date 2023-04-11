import Gameboard from './Gameboard';

let gameboad1 = new Gameboard();

describe('Gameboard', () => {
	beforeEach(() => {
		gameboad1 = new Gameboard();
	});
	test('board has 10 rows', () => {
		// console.log(gameboad1)
		expect(gameboad1.board.length).toBe(10);
	});

	test('checkCoordinates [0,0] should return true', () => {
		expect(gameboad1.checkCoordinates([0, 0])).toBe(true);
	});
	test('checkCoordinates [11,11] should return false', () => {
		expect(gameboad1.checkCoordinates([11, 11])).toBe(false);
	});

	test(`isEnoughSpace([0,0], 'x', 5), should return true`, () => {
		expect(gameboad1.isEnoughSpace([0, 0], 'x', 5)).toBe(true);
	});

	test(`isEnoughSpace([6,0], 'x', 5), should return false`, () => {
		expect(gameboad1.isEnoughSpace([6, 0], 'x', 5)).toBe(false);
	});

	test(`isEnoughSpace([0,0], 'y', 5), should return true`, () => {
		expect(gameboad1.isEnoughSpace([0, 0], 'y', 5)).toBe(true);
	});

	test(`isEnoughSpace([0,6], 'y', 5), should return false`, () => {
		expect(gameboad1.isEnoughSpace([0, 6], 'y', 5)).toBe(false);
	});

	test(`placeShip([0,0], 'x', 5) should return 'Ship placed'`, () => {
		expect(gameboad1.placeShip([0, 0], 'x', 5)).toBe('Ship placed');
	});

	test(`placeShip([6,0], 'x', 5) should return 'Cannot build here'`, () => {
		expect(gameboad1.placeShip([6, 0], 'x', 5)).toBe('Cannot build here');
	});

	test(`After placing ship, board pools with ship should have object property ship === true`, () => {
        gameboad1.placeShip([0, 0], 'x', 5);
        for (let i = 0; i < 5; i++) {
            expect(gameboad1.board[i][0].ship === true).toBeTruthy()
        }
    });
});
