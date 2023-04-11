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
			expect(gameboad1.board[i][0].ship === true).toBeTruthy();
		}
	});

	describe('Ship id ship hit ship tracker, hit empty pool', () => {
		beforeEach(() => {
			gameboad1 = new Gameboard();
			gameboad1.placeShip([0, 0], 'x', 5);
		});
		test(`there is ship in ship tracker after 1 placeShip`, () => {
			expect(gameboad1.shipTracker.length).toBe(1);
		});

		test(`board pool without a ship after receiveAttack([8,8]) have missedShot prop == true`, () => {
			gameboad1.receiveAttack([8, 8]);
			expect(gameboad1.board[8][8].missedShot).toBe(true);
		});

		test(`board pool with a ship after receiveAttack([0,0]) have hitShip prop == true`, () => {
			gameboad1.receiveAttack([0, 0]);
			expect(gameboad1.board[0][0].hitShip).toBe(true);
		});

		test(`after place second ship placeShip(), the ship with id = 1 takes hit`, () => {
            gameboad1.placeShip([0, 1], 'x', 5);
            gameboad1.receiveAttack([0, 1]);
            expect(gameboad1.shipTracker[1].hits).toBe(1)
        });

        test(`areAllShipsSunk() should return true when all ships are sunk`, () => {
            
            for (let i = 0; i < 5; i++) {
                gameboad1.receiveAttack([i, 0]);
            }
            gameboad1.placeShip([1, 1], 'x', 1);
            gameboad1.receiveAttack([1, 1]);
            expect(gameboad1.areAllShipsSunk()).toBe(true)
        })
        test(`areAllShipsSunk() should return false when not all ships are sunk`, () => {
            
            for (let i = 0; i < 5; i++) {
                gameboad1.receiveAttack([i, 0]);
            }
            gameboad1.placeShip([1, 1], 'x', 1);
            expect(gameboad1.areAllShipsSunk()).toBe(false)
        })
	});
});
