import Gameboard from './Gameboard';

class Player {
	constructor() {
		this.aiShots = []
	}
	attack(gameboard) {
		const coordinates = [0, 0];
		gameboard.receiveAttack([coordinates]);
	}
	checkShot(coordinates) {
		const currentX = coordinates[0];
		const currentY = coordinates[1];

		for (let i = 0; i < this.aiShots; i++) {
			const previousX = this.aiShots[i][0];
			const previousY = this.aiShots[i][1];
			if (currentX === previousX && currentY === previousY) {
				return false;
			}
		}
		return true;
	}

	getRandomCoordinates() {
		const x = Math.floor(Math.random() * 10);
		const y = Math.floor(Math.random() * 10);
		const coordinates = [x, y];
		return coordinates;
	}

	randomAttack(gameboard) {
		const coordinates = this.getRandomCoordinates();
		if (this.checkShot(coordinates)) {
			this.aiShots.push(coordinates);
			gameboard.receiveAttack(coordinates);
		} else {
			this.attack();
		}
		return coordinates;
	}
}

export { Player };
