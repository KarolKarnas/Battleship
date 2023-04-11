import Gameboard from './Gameboard';
import { Player, CPU } from './Player';

let player = new Player();
let cpu = new CPU();
let gameboardPlayer = new Gameboard();
let gameboardCPU = new Gameboard();

describe(`CPU player`, () => {
	// beforeEach(() => {
	// });

	test(`CPU attacks random coordinates between <0,9> inclusive`, () => {
		const arr = [];
		for (let i = 0; i < 100; i++) {
			const coordinates = cpu.getRandomCoordinates();
			arr.push(coordinates);
			const x = coordinates[0];
			const y = coordinates[1];
			expect(x >= 0 && x <= 9 && y >= 0 && y <= 9).toBe(true);
		}
		console.log(arr);
	});

	// test('CPU will not attack same coordinates', () => {});
});
