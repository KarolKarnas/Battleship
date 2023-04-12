import Gameboard from './Gameboard';
import Player from './Player';

let player = new Player();
let ai = new Player();
let gameboardPlayer = new Gameboard();
let gameboardAi = new Gameboard();

describe(`Ai player`, () => {
	beforeEach(() => {
		gameboardPlayer = new Gameboard()
		ai = new Player()
	});

	test(`Ai attacks random coordinates between <0,9> inclusive`, () => {
		const arr = [];
		for (let i = 0; i < 100; i++) {
			const coordinates = ai.getRandomCoordinates();
			arr.push(coordinates);
			const x = coordinates[0];
			const y = coordinates[1];
			expect(x >= 0 && x <= 9 && y >= 0 && y <= 9).toBe(true);
		}
		console.log(arr);
	});

	test(`board field attacked by ai should have missedShot pro == true`, () => {
		const coordinates = ai.randomAttack(gameboardPlayer)
		console.log(coordinates);
		const x = coordinates[0]
		const y = coordinates[1]
		expect(gameboardPlayer.board[x][y].missedShot).toBe(true)
	})

	test(`checkShot with coordinates which are already in aiShots array should return false`, () => {
		ai.aiShots.push([0,0])
		expect(ai.checkShot([0,0])).toBe(false)
	})

	// test('Ai will not attack same coordinates', () => {});
});

describe('Human Player', () => {
	test(`board field attacked by player should have missedShot pro == true`, () => {
		player.attack(gameboardAi, [1,1])
		expect(gameboardAi.board[1][1].missedShot).toBe(true)
	})
})
