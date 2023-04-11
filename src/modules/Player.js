import Gameboard from './Gameboard';

class Player {
	constructor() {}
	attack(gameboard) {
		const coordinates = [0, 0];
		gameboard.receiveAttack([coordinates]);
	}
}

class CPU extends Player {
	constructor() {
		super();
		this.cpuShots = [];
	}

	checkShot(coordinates) {
		const currentX = coordinates[0];
		const currentY = coordinates[1];

		for (let i = 0; i < this.cpuShots; i++) {
			const previousX = this.cpuShots[i][0];
			const previousY = this.cpuShots[i][1];
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

	attack(gameboard) {
const coordinates = this.getRandomCoordinates();
		if (this.checkShot(coordinates)) {
			this.cpuShots.push(coordinates);
			gameboard.receiveAttack(coordinates);
		} else {
			this.attack();
		}
		return coordinates;
	}
}

export { Player, CPU };
