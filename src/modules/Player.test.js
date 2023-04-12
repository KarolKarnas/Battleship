import Gameboard from './Gameboard';
import { Player } from './Player';

let player = new Player();
let ai = new Player();
let gameboardPlayer = new Gameboard();
let gameboardAi = new Gameboard();

describe(`Ai player`, () => {
	// beforeEach(() => {
	// });

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

	// test('Ai will not attack same coordinates', () => {});
});
