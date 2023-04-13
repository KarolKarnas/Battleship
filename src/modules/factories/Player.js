class Player {
	constructor() {
		this.aiShots = [];
	}
	attack(gameboard, coordinates = [0, 0]) {
		gameboard.receiveAttack(coordinates);
	}

	checkShot(coordinates, gameboard) {
		const x = coordinates[0];
		const y = coordinates[1];

		if (gameboard.board[x][y].missedShot || gameboard.board[x][y].hitShip) {
			return false;
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
		console.log(gameboard);
		if (this.checkShot(coordinates, gameboard)) {
			this.aiShots.push(coordinates);
			gameboard.receiveAttack(coordinates);
		} else {
			this.randomAttack(gameboard);
		}
		return coordinates;
	}
}

export default Player;
